# IMPLEMENT.md

## 목적
이 문서는 DVMDVP harness 구현 과정에서 실제로 적용한 설계 결정, 편차, 이슈, 후속 작업을 기록하기 위한 실행 로그 템플릿입니다.

## 1. 구현 범위
- 프로젝트명: DVMDVP
- 대상 흐름: RFx Tree -> Header Routing -> Lazy Loading -> Extraction -> Mapping -> Drafting -> Validation -> Packaging
- 현재 우선 대상: Group 2

## 2. 이번 구현 배치
### 배치명
- 예: Group 2 MVP / Tree Index v0 / Header Router v0

### 목표
- 이번 배치에서 달성하려는 범위를 간단히 적습니다.

### 완료 조건
- [ ] tree index 생성 가능
- [ ] header-only routing 가능
- [ ] section lazy loading 가능
- [ ] DVM draft 생성 가능
- [ ] validation report 생성 가능

## 3. 설계 결정 기록
### Decision Log
#### D-001
- 제목:
- 날짜:
- 결정 내용:
- 이유:
- 대안:
- 영향 범위:

#### D-002
- 제목:
- 날짜:
- 결정 내용:
- 이유:
- 대안:
- 영향 범위:

## 4. 실제 구현 내용
### 추가/변경 파일
- [ ]
- [ ]
- [ ]

### 구현한 컴포넌트
- [ ] tree index
- [ ] header catalog builder
- [ ] header router
- [ ] section loader
- [ ] requirement extractor
- [ ] mapper
- [ ] draft generator
- [ ] validator
- [ ] packager

## 5. 입출력 스키마 변경 이력
### 변경 내용
- 변경 전:
- 변경 후:
- 이유:
- 마이그레이션 필요 여부:

## 6. 예외 및 편차
### 설계 대비 편차
- 편차 내용:
- 왜 발생했는지:
- 임시 조치:
- 영구 수정 필요 여부:

## 7. 검증 결과
### 실행 케이스
- 케이스명:
- 입력:
- 기대 결과:
- 실제 결과:
- 판정: pass / fail

### Validation 이슈
- 이슈 코드:
- 설명:
- 원인:
- 조치:

## 8. 미해결 항목
- [ ]
- [ ]
- [ ]

## 9. 다음 배치 TODO
- [ ] Group 2 Golden Path 고도화
- [ ] frontmatter 자동 생성기 구현
- [ ] trace/evidence 저장 구조 구현
- [ ] validation rules 코드화
- [ ] TPV -> DCV 확장

## 10. 참고 문서
- `./DEVELOPMENT_GUIDE.md`
- `./PLAN.md`
- `./HARNESS_CHECKLIST.md`
- `../docs/lazy-loading-context-design.md`
- `../docs/output-generation-guide.md`
