# PLAN.md

## 목적
Ford RFx 입력 문서를 section 단위 md로 분해하고, header-first + lazy loading 전략으로 필요한 근거만 읽어 LGES 스타일 DVM 문서를 자동 생성하는 harness를 구축한다.

## 현재 기준
- 입력 원문: `data/06.Ford HEV-C upg-RFx`
- 출력 샘플: `data/Ford FHEV-C-DVM`
- 기술 스택: Go / Svelte / Google ADK / SQLite
- Golden Path: Array group 2

## 목표 산출물
1. RFx section md 분해 규칙
2. frontmatter 표준
3. tree index 생성기
4. header router
5. lazy section loader
6. requirement extractor
7. DVM mapper
8. DVM drafting agent
9. validation agent
10. packaging flow

## 작업 단계

### Phase 1. RFx 구조화
- [ ] RFx 원문을 문서별로 분류
- [ ] 문서별 chapter/section/subsection 구조 추출
- [ ] section 단위 md 분해 규칙 정의
- [ ] frontmatter 생성 규칙 정의
- [ ] 샘플 1개 문서에 대해 수동/반자동 분해 검증

### Phase 2. Index / Routing
- [ ] `tree_index_agent` 입출력 스키마 확정
- [ ] header catalog 포맷 정의
- [ ] `header_router_agent` 선택 기준 정의
- [ ] `selection_reason`, `reject_reason` 로그 포맷 정의

### Phase 3. Lazy Loading / Extraction
- [ ] `section_loader_agent` 로딩 단위 정의
- [ ] `why_loaded`, `why_skipped` 로그 정의
- [ ] `ingestion_agent` requirement/condition/criteria 추출 포맷 확정
- [ ] source anchor 표준 정의

### Phase 4. Drafting / Validation
- [ ] DVM 공통 skeleton 템플릿 확정
- [ ] group-specific section 매핑 규칙 확정
- [ ] `validation_agent` 룰셋 구현
- [ ] `TBD`, `trace`, `evidence` 검증 로직 확정

### Phase 5. MVP 통합
- [ ] Group 2 단일 문서 대상으로 end-to-end 실행
- [ ] Draft 출력 생성
- [ ] Validation report 생성
- [ ] Official candidate 저장 규칙 확인

## Definition of Done
- header-only 단계에서 후보 문서를 안정적으로 선별할 수 있다.
- 필요한 section만 lazy loading 하며 과적재가 통제된다.
- 모든 핵심 claim에 source anchor가 연결된다.
- Group 2 DVM 초안이 자동 생성된다.
- validation rule 통과/실패 사유가 구조화되어 출력된다.

## 리스크
- frontmatter 품질이 낮으면 routing 정확도가 떨어짐
- section 분해 기준 불일치 시 tree 탐색 품질 저하
- sample 문서와 RFx 간 표현 차이로 인해 매핑 누락 가능
- 긴 표/복합 표 구조에서 section 분해 실패 가능

## 우선순위
1. Group 2 Golden Path
2. ES + Test Manual 우선 대응
3. TPV 문서 우선 자동화
4. 이후 DCV 확장

## 운영 메모
- 추정 작성 금지
- RFx 근거 없는 수치 금지
- 불확실 값은 `TBD`
- 본문 로딩 전에 반드시 header 검토
- 세부 전략은 `docs/lazy-loading-context-design.md` 준수
