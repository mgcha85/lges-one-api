## 11. Elevation (그림자 및 계층 구조)

일반적으로 표현된 컴포넌트 계층 구조는 사용자가 컴포넌트 간의 관계를 파악할 수 있게 돕습니다. (예: Dialog가 나타날 때는 항상 모든 컴포넌트를 가리면서 나타나게 표현하여 3차원 상의 위치를 짐작하게 합니다.)

### Shadow 및 컴포넌트 Z축 기준
각 컴포넌트의 Elevation 기준에 따라 그림자 효과(Shadow)를 3가지 Depth로 적용하여 시각적 높이를 표현합니다.

| Elevation Depth | Component | 설명 및 적용 예시 |
| :--- | :--- | :--- |
| **Depth 3** | Dialog | **최상위의 Elevation**<br>특정 시점에 높은 주목도를 가져야 할 때 적용 |
| **Depth 2** | Date Picker, Option List,<br>Header > Mega Dropdown,<br>Message Bar, Tooltip | **중간 정도의 Elevation**<br>인터랙션이 일어난 후의 상태에 적용 |
| **Depth 1** | Card | **최소한의 Elevation**<br>인터랙션이 일어나기 전 정지 상태에 적용 |

> **배경 Color 별 적용:** On Colored, On White, On Dark 배경에 맞추어 Depth별 그림자 스타일을 다르게 적용합니다.

---

## 12. Favicon

Favicon은 브라우저 탭에 표기되며 시스템을 대표하는 심볼이 적용됩니다. 본 가이드라인에서는 아래 3가지 규칙으로 Favicon을 적용합니다.

1. **① 엔솔이 Type (Default)**
   * LG 에너지솔루션의 대표 캐릭터인 '엔솔이' 이미지를 Favicon으로 적용하는 기본 Type입니다. 
   * 아래 ②, ③ Type에 해당하지 않는다면 반드시 엔솔이를 기본으로 적용합니다.
2. **② En {시스템명} Type**
   * En Portal, En Mobile 등 `En`으로 시작되는 시스템들은 En Portal 로고에서 파생된 디자인 형태의 Favicon을 적용합니다.
3. **③ 예외적용 Type**
   * 구축한 시스템을 대표할 수 있는 별도 디자인의 심볼이 있는 경우 해당 심볼을 적용할 수 있습니다.
   
> **브라우저 Tab Naming Rule:** `{시스템약어(영문약어)} | {시스템 Full Name(영문)}` 
> *(예시: 4MCC | 4M Change Control, EnPortal)*

---

## 13. Color Overview 및 접근성

Color는 시스템의 전반적인 인상을 좌우하며, 콘텐츠의 상태 및 역할을 설명하는 보조수단입니다. 한 화면 내에서 사용되는 색상의 수는 3~5개 이내로 제한하여 명확한 의미 전달이 가능해야 합니다.

### Main Color
Primary와 Secondary Color는 브랜드 Identity와 Align 될 수 있도록 지정되었습니다.
* **Primary Color**: Infinite Tiffany-Deep (`#2D9BB2`)
* **Secondary Color**: Inspiration Violet (`#554596`)
* **ES Grey**: White(`FFFFFF`), Black(`000000`), Grey 50(`F7F9F8`), Grey 200(`EBEEED`), Grey 400(`B9BCBB`) 등 배경/테두리에 활용

### Accessibility (명도 대비)
웹/모바일 접근성 지침에 따라 배경과 텍스트의 명암비 기준을 충족해야 합니다.
* **기본 텍스트 명암비**: `4.5 : 1` 이상 (한국형 웹 콘텐츠 접근성 기준)
* **예외 기준**: 텍스트 사이즈가 24px 이상이거나 19px 이상의 Bold체인 경우 `3 : 1` 이상 유지

* **명도대비 예시:**
  * ❌ Primary Key Color(`#2D9BB2`) + White 텍스트 = **3.26 : 1** (기본 텍스트로는 부적합하나 24px 이상 or 19px Bold에서는 사용 가능)
  * 🟢 Primary 700(`#1F7795`) + White 텍스트 = **5.08 : 1** (Button Default로 적합)
  * 🟢 Secondary Key(`#554596`) + White 텍스트 = **7.87 : 1** (적합)

---

## 14. Global Color

Global Token Color는 명도에 따라 Variation된 Palette를 구성하며, 각 Color에는 색상을 추정할 수 있는 명칭을 부여합니다.

* **Main Color Palette**: Primary, Secondary, ES Grey Scale을 각각 명도에 따라 10단계(50 ~ 900)로 구성합니다.
  * *예: `#2D9BB2`는 Primary-600, `#554596`은 Secondary-500*
* **Status Color Palette**: 상태를 표현하는 5단계 색상(Confirmed, Warning-Minor, Warning-Major, Error, Done/Offline)을 각각 5단계(50, 100, 300, 500, 700, 900)로 Variation 하여 적용합니다.

---

## 15. Role Color

Global Color를 시스템의 각 UI 요소에 맞게 목적과 역할을 부여한 것이 **Role Token Color**입니다. Light/Dark 테마 모드에 따라 알맞은 Global Token Color가 매칭됩니다.

### 1. Color가 적용될 UI 요소 구분 (Block 구조)
* **Bg (배경)**: Container의 배경
* **Text (텍스트/아이콘)**: Container 내에 배치되는 Text, Icon 등의 콘텐츠
* **Border (외곽선)**: Container를 감싸는 외곽선

### 2. Token Name 정의 규칙
`1차 분류명(적용대상 그룹)` - `2차 분류명(UI요소 구분)` - `3차 분류명(속성, 중요도)` 형식으로 네이밍합니다.
* *예시: `Common` - `Bg` - `Basic`*

### 3. Common Colors 목록 (시스템 공통 적용)

#### Common Colors - BG (배경색)
| Role Token Color Name | Light 테마 매칭 | Dark 테마 매칭 | 주요 사용 예시 |
| :--- | :--- | :--- | :--- |
| **Common-Bg-Basic** | Grey-White | Grey-900 | 배경의 기본색 (컨텐츠 영역, 입력폼 등) |
| **Common-Bg-Elevation** | Grey-White | Grey-850 | 카드, 옵션리스트 등 표면의 배경 |
| **Common-Bg-Deep** | Grey-50 | Grey-850 | 그룹영역 구분을 위한 배경 |
| **Common-Bg-Primary** | Primary-600 | Primary-600 | 브랜드 컬러 배경 |
| **Common-Bg-Dim** | #000000, 40% | #FFFFFF, 30% | Dimmed Layer (모달 띄울 때 뒷배경) |

#### Common Colors - Text (텍스트/아이콘)
| Role Token Color Name | Light 테마 매칭 | Dark 테마 매칭 | 주요 사용 예시 |
| :--- | :--- | :--- | :--- |
| **Common-Text-Basic** | Grey-900 | Grey-White | 기본 텍스트 (Title, Body text) |
| **Common-Text-Light** | Grey-700 | Grey-300 | 보조 텍스트 (Sub-text, 부가설명) |
| **Common-Text-Lighter** | Grey-500 | Grey-500 | 보조/비활성 텍스트 (Placeholder 등) |
| **Common-Text-Inverse** | Grey-White | Grey-900 | 반전된 배경 위의 텍스트 |
| **Common-Text-Primary** | Primary-600 | Primary-400 | 강조할 텍스트 |
| **Common-Text-Error** | Status-Error-500 | Status-Error-500 | Helper Text (오류/긴급) |

#### Common Colors - Border (외곽선)
| Role Token Color Name | Light 테마 매칭 | Dark 테마 매칭 | 주요 사용 예시 |
| :--- | :--- | :--- | :--- |
| **Common-Border-Basic** | Grey-300 | Grey-700 | 외곽선의 기본색 (Input, Box 테두리 등) |
| **Common-Border-Light** | Grey-200 | Grey-750 | 한 단계 약한 구분을 위한 외곽선 |
| **Common-Border-Strong** | Grey-400 | Grey-600 | 배경과 한 단계 더 명확한 구분의 외곽선 |
| **Common-Border-Primary** | Primary-300 | Primary-700 | 강조할 UI요소의 외곽선 (Outlined Button) |
| **Common-Border-Error** | Status-Error-300 | Status-Error-500 | 오류/긴급 표현을 위한 UI의 외곽선 |
