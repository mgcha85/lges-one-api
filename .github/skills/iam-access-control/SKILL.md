---
name: iam-access-control
description: 조직 계층 + 사용자 권한 상세 테이블 기반 IAM 인가 로직을 설계/검증하는 지침
---

# 목적
조직 기반 권한 상속과 사용자별 세부 권한을 결합한 접근 제어를 구현한다.

## 언제 사용하나
- API 인가 미들웨어 설계
- RBAC/ABAC 혼합 정책 적용
- 문서/카테고리 단위 Fine-grained access control 구현

## 핵심 규칙
- `sso_id`, `ai_svc_id`, `use_yn='Y'` 기준 권한 확인
- 권한 미존재 시 즉시 403 처리
- `doc_inq_auth_ctn`, `qn_ctgr_ctn`은 파싱 가능한 포맷 유지
- 조직 계층(`uppr_org_cd`, `org_path_cd`) 기반 상속은 명시 규칙으로 구현

## 권장 사항
- `(sso_id, ai_svc_id, use_yn)` 복합 인덱스
- 사용자-조직 매핑 데이터 유무 확인
- 일시 컬럼 포맷 정합성 검증

## 참조 리소스
- `REFERENCE.md`
