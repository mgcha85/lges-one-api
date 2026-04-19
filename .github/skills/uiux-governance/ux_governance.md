## 8. UX Governance

업무 수행을 위한 복잡한 과정과 방대한 양의 데이터를 구조화하고 시각화하여, 사용자가 한 화면에서 목적하는 화면까지 단 번의 클릭으로 도달할 수 있도록 강력한 UI/UX 표준화 도구로써 **Design Guideline**을 제정했습니다.

### 핵심 원칙 (3 UX Core Principles)
1. **Unified Experience**: 시스템 간의 사용자 경험을 일관되게 제공
2. **Approach with One-Click**: 한 번의 클릭으로 목적하는 화면과 데이터에 도달
3. **Catch on One-Page**: 하나의 화면에서 일련의 업무를 처리

---

## 9. Key Features (PC 및 공통)

위의 3가지 핵심 원칙을 실현하기 위해 도출된 구체적인 Key Feature와 가이드 방향성입니다.

### ① 하나의 시스템, 일관된 경험
* **Design System**: 다수 시스템 간의 사용자 경험을 일관되게 유지하기 위해 전체 가이드라인(Overall Guideline, Principle, Foundation, Component, Template)과 디자인 자산(Asset)을 제공합니다.
* **UI Pattern & Template**: 업무에서 많이 발생하는 화면 패턴(Search+Data Grid, Board, Dashboard 등)을 정의하고 활용도 높은 Template을 제공합니다.

### ② 업무시스템 향 UI Pattern
* **Monitoring UI Pattern**: 공장/제조 라인 등 다양한 조건에 맞게 조회하는 모니터링 화면에 특화된 패턴을 제공합니다.
* 공간을 최대한 확보하는 레이아웃을 적용하고, 상세 조회를 위한 Overflow Dialog 등을 활용하여 유연한 UI를 제공합니다.

### ③ One-Page 업무 화면 구성
* **Contents Flow & Grouping**: 정보의 맥락을 고려해 상위 > 중위 > 하위 내용 순으로 콘텐츠 흐름을 전개하여 인지도를 높입니다.
* **One-Page Processing**: 프로세스 진행 상태와 처리 대상 업무를 한 화면에 구조화하여, 화면 이동 없이 업무를 처리할 수 있게 설계합니다.

### ④ 정보 위계의 효과적 시각화
* **Vertical & Linear Depth**: Layer popup(Modal), Text indentation, Drop menu 등을 통해 화면상의 Depth와 사용 흐름에 따른 동선 및 행동 위계를 표현합니다.
* **Hierarchy of Style**: 중요도와 우선순위에 따라 Button(명도, 크기 등 시각적 강조), Typography(폰트 스타일과 크기)를 다르게 적용하여 정보의 위계를 명확히 합니다.

### ⑤ 직관적 식별을 도와주는 Data 시각화
* **Status Palette**: Confirmed, Warning(Minor/Major), Error, Done 5가지를 기준으로 세분화된 상태 컬러(Status Color) 및 태그(Tag)를 정의하여 Data Grid 내에 직관적으로 적용합니다.
* **데이터 목적별 View Type**: Card(그룹핑), Chart(비교/시각화), Data Grid(목록 확인), Process Tab(단계별 진행 확인) 등 목적에 최적화된 뷰 타입을 적용합니다.

### ⑥ One-Click 액션 설계
* **Favorite / Recent**: 사용자가 자주 찾는 메뉴나 최근 작업 경로로 바로 진입할 수 있도록 합니다.
* **Action Shortcut**: 요청된 업무를 빠르게 처리하고 진행 현황을 파악할 수 있는 위젯(Widget)을 제공합니다.
* **Task Summary**: 해야 할 일(To-do)과 주요 일정을 모아보고 바로 수행할 수 있는 환경을 제공합니다.

### ⑦ 입력/검색의 고도화
* 검색 조건 선택 시 **Dropdown Field**를 데이터 양과 종류에 따라 4가지로 고도화하여 제공합니다.
  * `Recent History` (최근 검색 기록)
  * `Detailed Option List` (다중 선택 옵션)
  * `Key-In Filtering` (입력과 동시에 필터링)
  * `Mega Option Dialog` (전체 옵션을 한 화면에 펼쳐 제공)

### ⑧ 액션에 대한 즉각적 가이드 장치
* **Coach Mark Guide**: 튜토리얼 성격의 가이드 버튼 클릭 시, 화면 요소별 설명을 돕는 Coach Mark 형태의 도움말을 제공합니다.
* **Predictable Loading**: 대기 시간이 길 경우 Skeleton UI나 Circle Progress Indicator + Message를 통해 진행 상태와 예상되는 결과를 표시합니다.
* **Quick Response**: Helper Text(오류 수정 유도)와 Message Bar(세부 정보, 성공/경고/에러 메시지)를 통해 사용자의 입력 및 액션에 즉각적으로 피드백을 제공합니다.

---

## 10. Key Features (Mobile 특화)

모바일 환경의 특성(화면 크기 제약, 터치 인터랙션, 휴대성 등)을 고려한 최적화 가이드입니다.

### ① Summary & Optional (정보 요약)
* 전체 데이터 중 주요 항목만 노출하여 요약본으로 제공하며, 대량/기밀/보안/복잡도가 높은 상세 데이터는 PC 화면으로 연계하여 확인하도록 구성합니다.

### ② 매끄러운 인터랙션 (Seamless Workflow)
* **Thumbs Zone**: 한 손 조작 시 터치하기 쉬운 영역(Easy Zone)에 핵심 액션(CTA Button 등)을 배치하며, 버튼 최소 사이즈(48dp 이상)를 권장합니다.
* **Bottom Sheets**: 화면 전환 없이 맥락을 유지하면서 세부 정보(Contextual Details)를 제공하여 불필요한 인터랙션 단계를 제거합니다.

### ③ 데이터 목적별 View Type & 단독 화면 구성
* 모바일 화면 크기에 맞춰 정보를 모듈 단위로 분리하고, 목적에 따라 **Multi Data Pattern** (List, Kanban, Calendar, Chart, Feed 등)을 제공하여 시각적 복잡도를 낮춥니다.

### ④ 최소한의 Input을 통한 업무 처리
* **Quick & Easy Input Options**: 모바일에서의 복잡한 타이핑을 줄이기 위해, 기본 설정된 **Chip**을 활용하여 날짜, 시간, 참석자 등을 빠르게 터치하여 입력할 수 있도록 지원합니다.

### ⑤ Notification 고도화
* **Task-Oriented Notification**: 사용자의 업무 흐름을 고려해 카테고리별로 알림을 분류하여 제공합니다.
* **Personalized Setting**: 알림 우선순위, 근무시간 외 알림 등 개개인의 상황과 필요에 맞춘 맞춤형 알림 설정 기능을 제공합니다.

### ⑥ Mobile Feature의 활용
* 사진 촬영, 영상 녹화, 음성 입력 등 모바일 디바이스만의 특화 기능을 최대한 활용하여 현장에서의 시각 콘텐츠를 바로 기록하고 빠르게 공유할 수 있도록 설계합니다.
