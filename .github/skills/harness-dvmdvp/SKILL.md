---
name: harness-dvmdvp
description: RFx 문서를 section 단위로 분해하고 header-first + lazy loading 전략으로 DVM 초안을 생성/검증하는 작업 지침
---

# 목적
DVMDVP harness를 통해 RFx -> DVM 생성 파이프라인을 재현 가능하게 수행한다.

## 언제 사용하나
- RFx 기반 DVM 자동 초안 생성
- Header-only 라우팅 및 Lazy loading 구현/검증
- Validation rule (`VR-001`~`VR-009`) 점검

## 실행 절차
1. Tree Index 생성 (frontmatter 기반)
2. Header-only routing
3. Section lazy loading
4. Requirement extraction
5. DVM mapping
6. Draft 생성
7. Validation
8. Packaging

## 필수 규칙
- 근거 없는 수치 생성 금지
- 불확실 값은 `TBD`
- 핵심 claim에는 source anchor 유지
- `selection_reason`, `reject_reason`, `why_loaded`, `why_skipped` 로그 유지

## 참조 리소스
- `DEVELOPMENT_GUIDE.md`
- `PLAN.md`
- `IMPLEMENT.md`
- `HARNESS_CHECKLIST.md`
