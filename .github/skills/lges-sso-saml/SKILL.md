---
name: lges-sso-saml
description: LGES 환경(프록시 포함)에서 SAML 2.0 기반 SSO 연동을 구현/검토하는 지침
---

# 목적
Go + 프록시 환경에서 SAML 2.0 SP 연동을 표준 방식으로 구현한다.

## 언제 사용하나
- `/api/saml/login`, `/api/saml/acs` 설계/구현
- IDP 메타데이터/인증서 기반 검증
- 프록시 도메인/포트가 반영된 ACS URL 정합성 점검

## 구현 기준
- Java Agent 방식 대신 표준 SAML 2.0 SP 라이브러리 사용
- ACS URL은 외부 프록시 주소 기준으로 등록
- SAMLResponse 검증 후 내부 세션/JWT 발급
- 실패 시 IDP 담당 협업을 위한 에러 메시지 보존

## 필수 점검
- Dev/Prod 엔티티 ID/SSO URL 환경 분리
- 방화벽(브라우저/백엔드 아웃바운드) 경로 점검
- 인증 우회 금지

## 참조 리소스
- `REFERENCE.md`
