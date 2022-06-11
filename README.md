# 리액트와 타입스크립트를 활용한 단어장 웹앱

---

### 개발 목표

> Json 파일을 직접 Post, Delete하여 단어장 기능을 구현

### 사용 기술

- React
- TypeScript
- Json-Server
- Personal hook

---

### 프리뷰

![image](https://user-images.githubusercontent.com/82329983/173175866-ecbcf9c2-8475-4786-95a9-19e03e911dab.png)

![image](https://user-images.githubusercontent.com/82329983/173175874-509b5a16-de02-4e9e-8770-324a36b39d51.png)

![image](https://user-images.githubusercontent.com/82329983/173175881-05b89d51-fa5b-4e0e-87e0-afabf1f23b8b.png)

---

### 주요 기능

> Day, Word 생성, 삭제

    - json-server를 이용해 json파일에 새로운 Day를 추가하는 기능, 가장 최근 Day를 삭제하는 기능
    - 반복적인 json-server fetch를 custom hook으로 만들어 사용함.

> 외운 단어, 뜻 보이기

    - 단어 생성시 json파일에 isDone을 false를 기본값으로 설정, 체크박스 체크시 true로 값 변경 후 어둡게 처리.
    - state를 이용하여 뜻을 가리거나 보이기 기능 구현

---

### 마이그레이션

> 모든 애플리케이션의 기능을 완성한 후 타입스크립트로 마이그레이션하는 경험을 위해 시도함.

    - 타입을 설정해줌으로써 조금 더 엄격하지만 오류로부터 자유로운 웹앱 구현이 가능했다.
    - 구현 초기부터 타입스크립트를 사용하여 로직 변경없이 구현하는 것이 더 자유로울것이라고 생각했다.
    - 기초 로직의 변경없이 수정이 가능했고 오류들을 해결하며 모든 컴포넌트들을 타입스크립트로 바꾸는 것에 성공하였다.
