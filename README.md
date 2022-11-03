# 원티드 프리온보딩 2-1

## 배포 링크

[누르시면 이동합니다!](https://kimjuno97.github.io/pre-onboarding-7th-2-1-1/)

# 기술 스택

<img src="https://img.shields.io/badge/javascript_ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

# 아토믹 디자인 패턴 도입

<img src='https://fe-developers.kakaoent.com/static/34afd4d0a47ff85c8f34295c18c2e374/f058b/atomic-design-flow.png' alt='아토믹 디자인' />

# 디렉토리 구조

```
📦 src
┣ 📂 components /- 하위 컴포넌트
┃ ┣ 📜 Atoms
┃ ┣ 📜 Molecule
┃ ┣ 📜 Organism
┃ ┣ 📜 Template
┃ ┣ 📜 Pages
┣ 📂 CONSTANT_DATA /- 상수데이터
┣ 📂 Helmet /- 메타데이터
┣ 📂 image /- svg 아이콘
┣ 📂 styles /- GlobalStyle
┣ 📂 utils /- 로직 분리
┃ ┣ 📂 context /- context-api로 전역 관리
┃ ┣ 📜 CustomAxios.js /- 커스텀 Axios 로직 분리
┃ ┣ 📜 getDate.js /- 날짜 포맷
┃ ┗ 📜 newCheckedData.js /- 신규황목 체크
┣ 📜 Router.js /- 라우터 관리 컴포넌트
┣ 📜 App.js
┗ 📜 index.js
```
