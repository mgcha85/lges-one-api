# HARNESS_CHECKLIST.md

## 1. RFx 분해 준비
- [ ] 원본 문서별 식별자(`source_document`)가 일관되게 부여되었다.
- [ ] chapter / section / subsection 경계가 정의되었다.
- [ ] section 단위 md 분해 기준이 문서 전반에서 일관된다.
- [ ] 표/도표/부록 처리 원칙이 정의되었다.

## 2. Frontmatter 품질
- [ ] 모든 분리 md에 frontmatter가 존재한다.
- [ ] 필수 필드가 모두 존재한다.
  - [ ] `name`
  - [ ] `description`
  - [ ] `source_document`
  - [ ] `section_id`
  - [ ] `parent_section`
  - [ ] `doc_type`
  - [ ] `keywords`
  - [ ] `priority`
  - [ ] `relevance_hint`
- [ ] `description`만 읽어도 문서 역할이 대략 파악된다.
- [ ] `keywords`가 실제 검색/라우팅에 유효하다.
- [ ] `related_groups`가 필요한 경우 명시되었다.

## 3. Header-only Routing
- [ ] header만 읽고 후보 문서를 선정할 수 있다.
- [ ] 후보 문서마다 `selection_reason`이 남는다.
- [ ] 제외 문서마다 `reject_reason`이 남는다.
- [ ] group_id와 무관한 문서가 early reject 된다.
- [ ] target section별 추천 문서가 도출된다.

## 4. Lazy Loading
- [ ] 본문 전체를 무조건 로딩하지 않는다.
- [ ] 필요한 section만 로딩한다.
- [ ] 각 로딩 이벤트에 `why_loaded`가 기록된다.
- [ ] 스킵된 section에 `why_skipped`가 기록된다.
- [ ] 충분한 근거 확보 후 추가 로딩을 중단한다.
- [ ] 과도한 본문 적재를 탐지할 수 있다.

## 5. Requirement Extraction
- [ ] requirement 추출 시 source anchor가 남는다.
- [ ] condition 추출 시 값과 단위가 분리 가능하면 분리된다.
- [ ] criteria 문장이 별도 식별된다.
- [ ] glossary 후보가 추출된다.
- [ ] 애매한 문장은 `raw_text`로 보존된다.

## 6. Mapping
- [ ] 모든 주요 requirement가 DVM target section에 매핑된다.
- [ ] `unmapped_requirements`가 별도 관리된다.
- [ ] `primary_section` / `secondary_sections` 구분이 가능하다.
- [ ] group 번호와 맞지 않는 항목이 `conflicts`로 기록된다.

## 7. Drafting
- [ ] 필수 섹션 1~6이 모두 존재한다.
- [ ] Cover 형식이 샘플 문서와 유사하다.
- [ ] Revision history가 존재한다.
- [ ] Table of contents가 구성된다.
- [ ] General 섹션이 채워진다.
- [ ] Group-specific body가 채워진다.
- [ ] Appendix가 포함된다.
- [ ] 근거 없는 수치/내용이 들어가지 않는다.
- [ ] 불확실 값은 `TBD`로 표기된다.

## 8. Validation
- [ ] `VR-001` 필수 섹션 존재
- [ ] `VR-002` 섹션 번호 오름차순
- [ ] `VR-003` group 번호와 시험명 일치
- [ ] `VR-004` 단위 표기 일관성
- [ ] `VR-005` RFx 근거 없는 수치 금지
- [ ] `VR-006` TBD 누락 금지
- [ ] `VR-007` trace / source anchor 누락 금지
- [ ] `VR-008` header-only routing 후 불필요 본문 과적재 금지
- [ ] `VR-009` 핵심 claim evidence 부족 금지

## 9. Packaging
- [ ] TPV/DCV 파일명 규칙이 구분된다.
- [ ] Draft 상태와 Official 상태가 구분된다.
- [ ] release date / version / group_id가 manifest에 포함된다.
- [ ] source docs / loaded sections가 manifest에 포함된다.

## 10. 운영 준비
- [ ] Group 2 Golden Path가 먼저 검증되었다.
- [ ] 실패 사례가 룰 개선 항목으로 누적된다.
- [ ] frontmatter 생성 품질을 정기적으로 점검한다.
- [ ] tree 분해 기준 변경 시 전체 인덱스 재생성 절차가 정의되었다.

## 최종 승인 조건
- [ ] header-only routing이 안정적이다.
- [ ] lazy loading이 과적재 없이 동작한다.
- [ ] source anchor 기반 trace가 유지된다.
- [ ] Group 2 초안 생성과 validation report가 재현 가능하다.
