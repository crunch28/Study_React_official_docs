# 컴포넌트: UI 구성 요소

- React를 사용하면 마크업, CSS, JavaScript를 앱의 재사용 가능한 UI 요소인 사용자 정의 “컴포넌트”로 결합할 수 있습니다.

# 컴포넌트 정의하기

- React 컴포넌트는 마크업으로 뿌릴 수 있는 JavaScript 함수입니다.

## 컴포넌트를 빌드하는 방법

1. 컴포넌트 내보내기

   - export default 접두사는 표준 JavaScript 구문입니다(React에만 해당되지 않음).
   - 이 접두사를 사용하면 나중에 다른 파일에서 가져올 수 있도록 파일에 주요 기능을 표시할 수 있습니다.

2. 함수 정의하기

- function Profile() { }을 사용하면 Profile이라는 이름의 JavaScript 함수를 정의할 수 있습니다
- 컴포넌트 명은 반드시 대문자를 사용합니다.
  - default export Component() {} 의 경우
    - 파일에서 단독으로 export 하는 경우
    - 처음부터 대문자로 사용 가능 default export Component() {}
      - import Component from "./index.js";
      - 보통 컨벤션으로 default export Component() {} 사용
    - 소문자로도 선언 가능 default export component() {}
      - 반드시 import시에 대문자로 시작하는 새로운 이름을 부여 import Component from "./index.js";
  - named export의 경우:
    - 파일에서 여러개를 export 하는 경우
      - export const/ export function ...
      - import { a, b, c } from "./"
    - import시에 as로 대문자로 시작하는 새로운 이름을 부여
      - import { exFunc as ExComponent } from "./ex2";
    - 컴포넌트 내/외부에서 대문자로 시작하는 새로운 변수에 할당
      - const ExComp = excomp; 로 할당

3. 마크업 추가하기

- JSX 문법을 이용해 마크업을 js 파일 내에서 적용합니다.
- return이 한줄인 경우
  - return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
- return이 여러줄인 경우
  - 괄호로 묶어줌 return (<div><input/></div>)

# 컴포넌트 사용하기

## 브라우저에 표시되는 내용

- <section> 은 소문자이므로 React는 HTML 태그를 가리킨다고 이해합니다.
- <Profile /> 은 대문자 P 로 시작하므로 React는 Profile 이라는 컴포넌트를 사용하고자 한다고 이해
`<section>
  <h1>Amazing scientists</h1>
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" /> // 다른 컴포넌트 내용
</section>`

## 컴포넌트 중첩 및 구성

- 컴포넌트를 한 번 정의한 다음 원하는 곳에 원하는 만큼 여러 번 사용할 수 있습니다.
- 한파일에 중첩한 정의는 안됩니다.
  `export default function Gallery() {
  function Profile() {
  }
}`
