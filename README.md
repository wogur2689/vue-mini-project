# vue-mini-project - 주제 정하는중
## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### 디렉토리 구조
1. src (소스코드) : Vue 컴포넌트, 페이지, 라우터 등을 포함하는 핵심 디렉토리
2. components : 버튼, 카드, 모달 등 재사용 가능한 UI 요소를 담는 곳
3. pages : 개별 페이지 단위의 Vue 파일 관리
4. layouts : 헤더, 푸터 등 페이지의 공통 레이아웃 관리
5. router : Vue Router 설정 파일을 관리 (index / router)
6. store : Pinia, Vuex와 같은 상태 관리 라이브러리를 사용할 경우 상태 관련 코드를 담는곳
7. composables : Vue Composition API의 setup()에서 재사용할 로직을 정의
8. services :  api 요청을 담당하는 함수들을 분리하여 관리
9. utils : 포맷팅, 날짜 변환 등의 헬퍼 함수를 모아둠.
10. styles : 전역 CSS 관리
11. tests : 단위 테스트 관련 코드 저장
12. vite.config.js : Vite 빌드 설정을 정의 
