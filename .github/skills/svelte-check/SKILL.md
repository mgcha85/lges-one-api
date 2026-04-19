---
name: svelte-check
description: Svelte/SvelteKit 프론트엔드의 타입/문법/빌드 상태를 빠르게 검증하는 스킬
---

# 목적
프론트엔드 변경 후 컴파일/타입/런타임 리스크를 조기에 탐지한다.

## 언제 사용하나
- Svelte 컴포넌트 수정 직후
- 페이지/라우트/상태관리 로직 변경 시
- 릴리즈 전 F/E 기본 안정성 체크 시

## 권장 명령
- `npx svelte-check --tsconfig ./tsconfig.json` (프로젝트에 tsconfig가 있을 경우)
- `npm run build` (테마 또는 프론트 빌드 기준)
- `npm start` 또는 `vite preview` (런타임 확인이 필요할 경우)

## 결과 기준
- type error 0건
- 빌드 실패 없음
- 주요 화면 렌더링 경고/오류 없음
