# 이 repository는 https://reactcloth-remake.herokuapp.com/ 에 호스팅 되어있습니다.

## 사용 스택

- react.ts
- react hooks
- redux
- scss
- firebase
- stripe

## 소개

이 사이트는 redux 및 hooks의 useDispatch, useSelector를 연습하며 예전에 만들었던 ReactCloth repository를 다시 만들었습니다. 이전에 hooks없이 react.js와 redux로만 구성하였을 때에 비해 코드가 많이 깔끔해진 느낌이 납니다. 모바일 및 태블릿을 위한 모드는 현재 작업중입니다.

### 홈페이지

각각의 카테고리를 통해 이동할 수 있게 구성하였습니다. redux에 저장한 데이터를 hook을 사용하여 카테고리를 만들었습니다.

### 상품 페이지

홈페이지와 유사하게 redux에 저장돼있는 데이터를 hook을 통해 불러와 만들었으며, 마우스 hover시 장바구니에 넣을 수 있는 버튼이 나타나게 하였습니다.

### 로그인/회원가입 페이지

firebase를 사용하여 로그인 및 회원가입을 구현하였으며, 로그인시 홈페이지로 redirect되게 하였습니다.

### 장바구니

상품 페이지에서 넣은 아이템들을 볼 수 있으며 hooks를 사용하여 수량 추가 및 감소 혹은 삭제가 가능하게 하였습니다. 또한 장바구니 페이지에선 stripe의 테스트모드를 통해 결제시스템을 구현하였습니다.
