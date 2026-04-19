# AGENTS.md

이 문서는 이 저장소에서 동작하는 AI 에이전트의 공통 실행 기준입니다.

## 1) 프로젝트 개요
- Backend: Go (`main.go`, `controller/`, `model/`, `relay/`)
- Frontend: `web/` 하위 테마별 프론트엔드
- 운영: Docker (`Dockerfile`, `docker-compose.yml`)

## 2) 기본 실행 명령
- 백엔드 빌드: `go build -ldflags "-s -w" -o one-api`
- 전체 테스트: `go test ./...`
- 도커 기동: `docker-compose up -d`
- 도커 상태: `docker-compose ps`

## 3) 공통 코딩/운영 규칙
- 기존 코드 스타일과 구조를 우선 유지한다.
- 변경은 요청 범위 내에서 최소화한다.
- 근거 없는 설정값/수치/정책을 새로 만들지 않는다.
- 보안/권한/인증 로직은 우회 구현을 금지한다.

## 4) Custom Agents
- `@architect`: 작업 분해, 라우팅, 스킬 선택, 품질 게이트
- `@frontend-coder`: Svelte 기반 F/E 구현 및 UI 품질 검증
- `@backend-coder`: Go 기반 B/E 구현 및 API/보안 검증
- `@optimization-expert`: 파일 정리, 빌드 옵션, FE/BE/DB 구성 최적화
- `@coder`(legacy): 기존 단일 구현 에이전트 (점진적 전환용)

에이전트 정의 파일:
- `.github/agents/architect.agent.md`
- `.github/agents/frontend-coder.agent.md`
- `.github/agents/backend-coder.agent.md`
- `.github/agents/optimization-expert.agent.md`
- `.github/agents/coder.agent.md`

## 5) Agent Skills
- `.github/skills/harness-dvmdvp/SKILL.md`
- `.github/skills/lges-sso-saml/SKILL.md`
- `.github/skills/iam-access-control/SKILL.md`
- `.github/skills/uiux-governance/SKILL.md`
- `.github/skills/svelte-check/SKILL.md`
- `.github/skills/go-cli/SKILL.md`
- `.github/skills/project-optimization/SKILL.md`

## 6) 선택 규칙
- DVMDVP 문서 생성/검증 작업: `harness-dvmdvp`
- SSO 연동 설계/구현 검토: `lges-sso-saml`
- IAM 권한 설계/검증: `iam-access-control`
- 화면/디자인 시스템 준수 점검: `uiux-governance`
- Frontend 구현/검증: `frontend-coder` + `svelte-check` (+ 필요 시 `uiux-governance`)
- Backend 구현/검증: `backend-coder` + `go-cli` (+ 필요 시 `iam-access-control`/`lges-sso-saml`)
- 아키텍처/성능/배포 최적화: `optimization-expert` + `project-optimization` (+ 필요 시 `go-cli`/`svelte-check`)

## 7) 산출물 원칙
- 계획 문서는 `PLAN.md` 포맷을 따른다.
- 실행 결과는 `IMPLEMENT.md` 템플릿으로 기록한다.
- 릴리즈 전 `HARNESS_CHECKLIST.md`를 통과해야 한다.

## 8) 운영 트래픽 프로파일 (사내 기준)
- 예상 전체 사용자: 최대 약 1000명
- 주요 사용 시간대: 08:00 ~ 19:00
- 동시 사용자: 높지 않음 (중/저동시성 가정)

### 운영/구성 기본 원칙
- FE: 정적 빌드 + 캐싱 중심으로 단순 운영 (과도한 복잡도 지양)
- BE: 단일 서비스 중심으로 시작하고 필요 시 점진적 수평 확장
- DB: 단일 DB + 핵심 인덱스 우선, 과도한 분산 구조는 보류
- 모니터링: 업무시간대 경보 민감도 상향, 비업무시간은 기본 감시
