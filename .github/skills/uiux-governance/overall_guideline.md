# Design System

## 1. Design System 소개 (Overview)
**LG Energy Solution Design System**은 일관된 시스템 개발과 운영을 위한 UI/UX 가이드라인과 Figma Design Asset, React Front-end Code Asset을 제공합니다.

### Design Guideline 구조
* **Principle**: UI/UX 표준화 전략 (설계/디자인/레이블링 원칙)
* **Foundation**: 5가지 시각화 기준 제시 (Color, Typography, Elevation, Icon, Layout)
* **Component**: 화면을 구성하는 최소 단위 Design Asset (Unit, Combination)
* **Pattern**: Navigation & Page UI Pattern (화면에 활용 가능한 유형별 Template 제공)

### 활용 Assets
* **Figma Design Asset**: Design을 위한 Figma Component, Template
* **React Code Asset**: 재사용 가능한 Component Code Library
* **Code Live Demo**: React Code Component를 시각적으로 확인 가능한 Live Preview

---

## 2. Principle
Principle은 UI/UX 표준화 전략 및 설계, 디자인, 레이블링 원칙을 포함하고 있습니다.

* **UI/UX Governance**: 
  * Unified Experience (하나의 시스템, 일관성 확립)
  * Catch on One-Page (정보 위계의 효과적 시각화)
  * Approach with One-Click (직관적 식별을 위한 Data 시각화)
* **UI/UX Design**: 화면 설계 시 권장/비권장(Do/Don't) 가이드 제공
* **Visual Design**: 시각적 요소(그리드, 색상 등)의 권장/비권장 가이드 제공
* **Labeling**: 텍스트 및 용어 표기에 대한 명확한 레이블링 가이드 제공

---

## 3. Foundation
Foundation에는 공통적인 시각화 기준이 제시되어 있습니다.

* **Color**: Primary, Secondary, Grey, Status Color, Legend Color 체계
* **Typography**: 타이틀 및 텍스트 줄 수에 따른 행간 권장 사이즈 가이드 (H1, H2, H3 등)
* **Icon, Favicon**: 다양한 형태(원형, 정사각형, 가로/세로 사각형)와 사이즈(24px ~ 8px)의 아이콘 가이드
* **Layout**: 화면 배치를 위한 레이아웃 규격
* **Elevation**: 시각적 깊이감을 주는 그림자(Depth 1, 2, 3) 가이드
* **Motion**: UI 요소의 애니메이션/동적 효과 기준

---

## 4. Guideline & UI Asset (Component)
최소 단위의 재사용 가능한 **Unit Component**와 이를 복합적으로 구성한 **Combination Component**, 그리고 이들이 모인 **UI Pattern**을 가이드와 Sample Code로 제공합니다.

* **Unit Component**: 버튼(Button), 입력폼(Input) 등 UI 설계에 필요한 최소 단위의 Component입니다.
* **Combination Component**: Unit Component의 조합으로 구성된 Card, Table(Data Grid) 등의 Component입니다.

---

## 5. Pattern
Pattern은 Navigation과 Page UI Pattern으로 구성되어 있으며, 대표적인 업무 화면 설계에 활용할 수 있도록 유형별 Template를 제공합니다.

* **Navigation Pattern**: Top-Only, Top-Left, Top-Left-Right, MDI 구조 제공
* **Page UI Pattern**: Search + Data Grid, Board, Monitoring, Calendar, Process, Dashboard, Card, Login, Empty State, Accordion List, Scheduler, Coach Mark 등
* **유형별 Template 제공 예시**: Search + Data Grid, Monitoring, Dashboard, Process 화면의 실제 구성 예시

---

## 6. 환경 정의 및 해상도 정책
업무시스템이 구동되는 디바이스와 기준 브라우저/OS, UI 해상도를 정의하고 설계에 반영합니다.

### Device & OS
* **PC**: Windows 10 이상
* **Mobile**: iOS, Android (*Mobile 관련 가이드라인/Asset은 추후 제공 예정*)

### PC 해상도 및 Screen 가용 범위
* **PC 기준 해상도**: 1920px X 1080px (Monitoring View는 2560px X 1080px 추가 설계)
* **PC 기준 해상도 내 Screen 가용범위**: **1920 x 963**
  * 브라우저 상단(77px) 및 윈도우 작업표시줄(40px) 높이를 제외한 실제 콘텐츠 가용 높이는 963px입니다.
* **PC 지원 해상도 및 스크롤 정책**:
  * **최저 PC 지원 해상도**: 1366px X 768px (Portal 등 예외적으로 1280px 적용)
  * **최대 PC 지원 해상도**: 가로 1920px 초과 시 유동적(Fluid) 지원
  * **공통 사항**: Header/Left Area는 스크롤의 영향을 받지 않도록 고정 배치하며, Content Area의 너비는 유동적으로 확대/축소됩니다.

### Mobile Resolution
* **기준 해상도**: 375 X 647 (iPhone 6 / 7 / 8 / SE 기준)
* **최저 해상도**: 360 X 620 (Android Small 기준)
* **최대 해상도**: 가로 375 초과 시 유동적 지원

### Browser & Language
* **PC Browser**: 기준 브라우저는 Microsoft Edge이며, Google Chrome에서도 모든 화면이 정상 브라우징 되어야 합니다.
* **Mobile Browser**: Google Chrome, Safari 환경 지원
* **Language**: 국문, 영문, 중문 등 다국어 지원

---

## 7. How To & Resources

### How To (이용 방법)
LG Energy Solution의 UI/UX 표준 준수 절차 및 효과적인 Design System 활용법을 안내합니다.
* **UX표준 검수 프로세스**: 시스템 구축 시 적용부터 점검까지의 절차 안내
* **Figma 활용**: Design을 위한 Figma 사용 방법
* **Design Asset 활용**: 제공되는 Asset들의 사용 방법
* **Template 활용**: Figma Pattern Template으로 UI를 구성하는 방법

### Resources
UX 기획, 디자이너, Front-End 개발자들을 위한 리소스를 제공합니다.
* **Figma Asset**: Figma Asset & Templates `[For Designer]`
* **Icons & Font**: SVG Icon Pack, Favicon, Spoqa Han Sans Neo 폰트 `[For Designer]` `[For Developer]`
* **UX Checklist**: UX표준 준수 Self 점검표 (Excel) `[For Designer]` `[For Developer]`
* **개발코드 Asset**: 현재 Version 및 지난 Version(Archive) 코드 리소스 `[For Developer]`
