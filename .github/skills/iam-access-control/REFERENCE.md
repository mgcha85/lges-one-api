# IAM (Identity and Access Management) 구축 가이드

## 1. 개요
본 가이드는 **조직 계층 마스터 테이블(`tb_gptlb_org_hier_m`)**과 **사용자 권한 상세 테이블(`tb_gptlb_user_auth_d`)**을 활용하여 사용자 권한 제어 및 조직 기반의 접근 관리 체계를 구축하기 위해 작성되었습니다. 이 시스템을 통해 서비스 및 문서에 대한 안전하고 체계적인 접근 통제 환경을 구성할 수 있습니다.

## 2. 테이블 스키마 및 타입 정의

### 2.1 조직 계층 마스터 (`tb_gptlb_org_hier_m`)
조직의 기본 정보와 계층(Tree) 구조를 관리하는 테이블입니다. 부서별 권한 할당 및 상하위 조직 간의 권한 상속을 구현할 때 기초 데이터로 활용됩니다.

| 컬럼명 | 데이터 타입 | 설명 |
|:---|:---|:---|
| org_cd | varchar(20) | 조직 코드 (Primary Key 후보) |
| org_nm | varchar(100) | 조직 이름 (예: 인사팀, 재무팀) |
| uppr_org_cd | varchar(20) | 상위 조직 코드 (계층 구조 파악용) |
| org_lv_cd | numeric(20) | 조직 레벨 코드 (조직의 깊이/Depth) |
| org_path_cd | varchar(1000) | 조직 경로 코드 (예: ORG01>ORG05>ORG10) |
| org_hirc_path_nm | varchar(1000) | 조직 계층 경로 이름 (예: 본부>실>팀) |
| use_yn | varchar(1) | 사용 여부 (Y/N) |
| data_ins_user_id | varchar(50) | 데이터 생성자 ID |
| data_ins_dtm | timestamp | 데이터 생성 일시 |
| data_upd_user_id | varchar(50) | 데이터 수정자 ID |
| data_upd_dtm | timestamp | 데이터 수정 일시 |

### 2.2 사용자 권한 상세 (`tb_gptlb_user_auth_d`)
개별 사용자(SSO ID 기준)에게 부여된 서비스 이용 권한과 특정 문서/카테고리에 대한 세부 접근 권한을 관리하는 테이블입니다.

| 컬럼명 | 데이터 타입 | 설명 |
|:---|:---|:---|
| sso_id | varchar(50) | 사용자 식별자 (SSO ID) |
| ai_svc_id | varchar(50) | AI 서비스 식별자 (접근 대상 서비스) |
| auth_divs_cd | varchar(20) | 권한 구분 코드 (예: 관리자, 일반, 조회전용 등) |
| data_ins_user_id | varchar(50) | 데이터 생성자 ID |
| data_ins_dtm | timestamp | 데이터 생성 일시 |
| data_upd_user_id | varchar(50) | 데이터 수정자 ID |
| data_upd_dtm | timestamp | 데이터 수정 일시 |
| doc_inq_auth_ctn | varchar(4000) | 문서 조회 권한 내용 (JSON이나 규칙 문자열 등으로 저장 예상) |
| use_yn | varchar(1) | 해당 권한의 사용 여부 (Y/N) |
| doc_inq_auth_grn_dtm | varchar(14) | 문서 조회 권한 부여 일시 (YYYYMMDDHHMISS 형식 추정) |
| qn_ctgr_ctn | varchar(4000) | 질문/접근 가능한 카테고리 내용 범위 |

## 3. IAM 설계 및 인가(Authorization) 프로세스 적용 방안

### 3.1 권한 제어 모델링
1. **서비스 접근 권한 (RBAC/ABAC 혼합)**
   사용자가 시스템에 로그인하여 특정 AI 서비스에 접근할 때, `tb_gptlb_user_auth_d` 테이블에서 `sso_id`와 요청한 `ai_svc_id`를 조건으로 조회하여 `use_yn = 'Y'` 인지 확인합니다. 
2. **데이터 레벨 접근 제어 (문서 및 카테고리 권한)**
   사용자 권한 상세 테이블의 `doc_inq_auth_ctn` (문서 조회 권한) 및 `qn_ctgr_ctn` (카테고리 내용) 컬럼을 활용하여, 단순 메뉴 접근을 넘어 특정 데이터나 카테고리 단위의 미세 권한 통제(Fine-Grained Access Control)를 구현할 수 있습니다.
3. **조직 기반 권한 구조**
   `tb_gptlb_org_hier_m` 테이블의 `uppr_org_cd`, `org_path_cd`를 활용해 상위 조직 관리자가 하위 조직의 데이터를 조회할 수 있는 '계층적 권한 상속' 로직을 백엔드에서 구현할 수 있습니다.

### 3.2 권한 검증 API 구현 시나리오 (의사코드 예시)
사용자가 서비스 API를 호출할 때 IAM 미들웨어나 인터셉터에서 다음과 같이 검증합니다.
```sql
-- 1. 사용자 서비스 접근 권한 확인 쿼리 예시
SELECT auth_divs_cd, doc_inq_auth_ctn, qn_ctgr_ctn
  FROM tb_gptlb_user_auth_d
 WHERE sso_id = '요청_사용자_SSO_ID'
   AND ai_svc_id = '요청_AI_서비스_ID'
   AND use_yn = 'Y';
```
- 위 쿼리 결과가 존재하지 않으면 **접근 거부(403 Forbidden)** 처리합니다.
- 결과가 존재한다면 `doc_inq_auth_ctn` 값 등을 파싱하여 사용자가 해당 문서를 열람할 수 있는지 필터링 조건을 쿼리에 추가적으로 결합합니다.

## 4. 추가 고려 사항 (개선 제안)

1. **사용자-조직 매핑 테이블 확인**: 
   현재 두 테이블 스키마만으로는 특정 사용자가 어떤 조직(`org_cd`)에 속해 있는지 파악할 수 없습니다. 완벽한 조직 기반 접근 제어를 구현하려면 **사용자 마스터 테이블**(예: `tb_user_m`)에 `org_cd`가 포함되어 있거나, **사용자-조직 매핑 테이블**이 별도로 존재하는지 확인 및 설계가 필요합니다.
2. **성능 최적화 (인덱스 설계)**:
   인증/인가 프로세스는 모든 요청마다 빈번하게 실행되므로, `tb_gptlb_user_auth_d` 테이블의 `(sso_id, ai_svc_id, use_yn)` 조합을 복합 인덱스로 구성하여 조회 성능을 최적화하는 것을 권장합니다.
3. **데이터 포맷 정규화**:
   `doc_inq_auth_grn_dtm`의 경우 varchar(14)로 되어있는데, 가급적이면 다른 일시 데이터와 동일하게 `timestamp` 형식을 사용하거나, 애플리케이션 레벨에서 데이터 정합성 검증을 꼼꼼하게 처리하는 것이 좋습니다.
