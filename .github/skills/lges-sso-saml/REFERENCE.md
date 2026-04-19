표준 프로토콜을 사용하여 언어에 구속받지 않는 **SAML 2.0 방식**을 사용하여 연동을 진행하셔야 합니다. 프록시 환경과 개발 스택을 반영한 맞춤형 SSO 연동 가이드를 아래와 같이 정리해 드립니다.

---

### [맞춤형] LG에너지솔루션 SSO SAML 2.0 연동 가이드 (Go + Svelte 환경)

#### 1. 환경 분석 및 연동 방식 선정
*   **백엔드 (Go) / 프론트엔드 (Svelte)**: 제공된 가이드 중 Java 라이브러리(`.jar`)를 사용하는 Agent 방식은 적용할 수 없으므로, **SAML 2.0** 방식을 채택합니다. Go 서버가 SAML의 Service Provider(SP) 역할을 수행하게 됩니다.
*   **프록시 환경 (`https://gen-ai-lab-lges001.lgensol.com:30874/`)**: IDP 서버가 인증 완료 후 사용자 정보를 전달(POST)할 엔드포인트(ACS URL)는 반드시 프록시가 적용된 도메인과 포트를 포함한 전체 주소로 설정되어야 합니다.

#### 2. SAML 2.0 연동 기본 정보
사내 담당자에게 메타데이터 및 인증서 파일(`idp_saml_metafile.xml`, `인증서: sha256RSA`)을 요청하여 다운로드 받은 후 Go 서버에 배치해야 합니다.

| 구분 | 개발 환경 (Dev) | 운영 환경 (Prod) |
|:---|:---|:---|
| **SP_ENTITY_ID** | `http://gssodev.lgensol.com/` | `http://gsso.lgensol.com/` |
| **IDP_ENTITY_ID** | `http://gssodev.lgensol.com` | `http://gsso.lgensol.com` |
| **IDP 요청 주소 (SSO URL)** | `https://gssodev.lgensol.com/saml1/identity_pro_exec.jsp` | `https://gsso.lgensol.com/saml1/identity_pro_exec.jsp` |

*(참고: 가이드상 SP_ENTITY_ID의 끝에 슬래시(`/`)가 포함되어 있는지 정확히 확인하여 IDP 서버와 동일하게 맞추어야 합니다.)*

#### 3. 프록시 환경에 맞춘 개발 연동 가이드

**A. 업무시스템(SP) 정보 IDP 서버 등록 (담당자 요청 사항)**
SAML 연동을 위해서는 SSO 담당자에게 현재 개발하신 시스템(SP)의 정보를 등록 요청해야 합니다. 
*   **SP ACS (Assertion Consumer Service) URL**: `https://gen-ai-lab-lges001.lgensol.com:30874/api/saml/acs` (예시)
    *   *주의: 프록시 도메인과 포트(`30874`)가 반드시 포함되어야 합니다.*

**B. Go 백엔드 구현 (SAML SP 역할)**
Go 백엔드에서는 SAML 2.0 SP 역할을 수행할 라이브러리(예: `github.com/crewjam/saml`)를 활용하여 아래 두 가지 엔드포인트를 구현합니다.

1.  **로그인 요청 엔드포인트 (`/api/saml/login`)**:
    *   사용자가 프론트엔드에서 로그인을 시도할 때 호출됩니다.
    *   Go 서버는 IDP 요청 주소(개발: `https://gssodev.lgensol.com/saml1/identity_pro_exec.jsp`)로 사용자를 **Redirect (GET 방식)** 시킵니다.
2.  **SAML 응답 수신 엔드포인트 (`/api/saml/acs`)**:
    *   인증이 완료되면 IDP 서버는 이 주소로 `SAMLResponse` 파라미터를 **POST 방식**으로 전달합니다.
    *   Go 서버는 수신한 `SAMLResponse`를 다운로드한 인증서와 메타데이터를 사용하여 검증합니다.
    *   검증이 완료되면 사원번호/ID 등을 추출하고, 자체 세션(또는 JWT)을 생성한 후 Svelte 프론트엔드 화면으로 Redirect 시킵니다.

**C. Svelte 프론트엔드 구현**
*   **로그인 버튼**: 클릭 시 백엔드의 `/api/saml/login` 경로로 이동(Location href 변경 등)시켜 SSO 화면으로 리다이렉션 되도록 처리합니다.
*   **인증 후 처리**: 백엔드에서 `SAMLResponse`를 처리하고 성공 시 프론트엔드 메인 페이지로 리다이렉션하며 쿠키를 통해 JWT 등의 인증 토큰을 전달하도록 구현합니다.

#### 4. 방화벽 및 특이사항 (주의사항)
*   **방화벽 오픈**: 사용자의 브라우저에서 IDP 서버(`gssodev.lgensol.com`, `gsso.lgensol.com`)로 접근이 가능해야 하며, Go 서버가 실행되는 컨테이너/서버(프록시 뒷단)에서도 IDP의 메타데이터를 읽어오기 위한 아웃바운드 방화벽(Port 80/443)이 오픈되어 있어야 할 수 있습니다. 
*   **오류 해결**: 개발 연동 중, 백엔드(`/api/saml/acs`)에서 `SAMLResponse`를 정상적으로 POST 받았으나 검증 및 인증 처리가 되지 않는다면, 응답 내 Error 메시지를 확인하고 즉시 사내 IDP SSO 담당자에게 공유하여 해결해야 합니다 (가이드 파일의 특이사항 규정).
*   **MS SAML 미지원**: 현재 제공된 Context에서는 MS SAML 2.0 연동이 지원되지 않으므로, 표준 SAML 2.0 규격을 엄격하게 따르는 라이브러리를 사용하시기 바랍니다.
