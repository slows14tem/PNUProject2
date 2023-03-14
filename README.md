# 선용품 최적 구매발주 예측 분석 웹서비스
- 부산대학교 K-Digital 풀스택 개발자 양성과정에서 마린소프트와 연계하여 진행한 프로젝트입니다.
- 2019~2020년도의 발주정보 데이터를 머신러닝을 통해 학습하여 카테고리와 리드타임을 예측하는 모델을 제작하였습니다.
- 제작된 모델을 통해 새로운 품목의 카테고리와 리드타임을 예측하는 서비스 입니다.
- URL : http://3.37.27.133:3000/
## 프로젝트 개요
![개요](https://user-images.githubusercontent.com/106790381/224225899-91d33ddd-9255-4dda-b5ea-13def31bc4c0.jpg)
### 1. 프로젝트 목적
- 리드타임(발주 ~ 창고입고까지의 시간)을 예측하여 발주 일정 관리 효율화
- 리드타임의 정확한 예측을 위한 선용품목의 카테고리 자동 분류
### 2. 주요 기능
#### 1) 카테고리, 리드타임 예측 
- 품목의 기본 정보를 입력하면 카테고리, 리드타임 예측값을 출력한다.
![예측](https://user-images.githubusercontent.com/106790381/224226490-4e32f307-38cd-4763-be2b-1a07434ec87d.jpg)

#### 2) 장바구니
- 검색한 목록 중 선택한 목록을 예측된 리드타임과 함께 출력한다.
- 날짜를 선택하면 리드타임과 계산되어 현재 발주 가능한 품목을 알려준다.
![장바구니](https://user-images.githubusercontent.com/106790381/224226860-ec4a048b-72c8-4634-95fb-6ee37858f524.jpg)

### 3. 개발 환경
#### FrontEnd
- IDE: VS Code
- 개발 환경: react, react-router-dom, react-redux, redux-toolkit, axios, react-calander, nivo, react-js-pagination, jwt-decode, moment

#### BackEnd
- IDE: Spring Tool Suite 4
- 개발 환경: Spring Boot, Spring Data JPA, Spring Security, io.jsonwebtoken, MySQL, DevTool, Lombok

### 4. DB 구조
![DB구조](https://user-images.githubusercontent.com/106790381/224694770-c49ebcd4-332e-4543-9752-83173bd88982.jpg)

### 5. 시스템 구성도
![클래스 다이어그램](https://user-images.githubusercontent.com/106790381/224227198-419f5121-9843-47a0-8c34-d5ba8c7251e6.jpg)

## 프로젝트 구현 시 나의 역할
#### 1. 와이어 프래임을 기반으로 컴포넌트 개발
- Redux와 React Hook을 이용하여 계획한 컴토넌트를 구현하였다.
- Router 기능과 토큰의 권한 정보를 이용하여 권한이 인증된 이용자만 사용할 수 있는 페이지를 제작하였다.
#### 2. 비동기통신을 활용한 프론트엔드와 백엔드 연동
- Axios instance를 이용한 API컴포넌트를 구성하여 RestAPI서버와 통신하였습니다. 각 컴포넌트에서 효율적으로 백엔드와의 통신을 구현할 수 있었다.
#### 3. Json Web Token을 이용한 인증 기능 구현
- Springboot에서 Spring Security와 jwt기능을 구현하여 Access Token, Refresh Token발급 및 재발급, 통신 시 토큰 유효성 검사 등의 기능을 구현하였다.
- React에서 발급된 토큰을 저장하고 통신 요청시 토큰을 Header와 함께 전송하였고, 토큰 만료시 API컴포넌트에서 자동으로 재발급을 요청하는 기능을 구현하였다.
#### 4. flask 서버 구현
- 팀원이 제작한 카테고리, 리드타임 예측 모델을 flask 서버에 올려 리액트에서 요청을 보냈을 때 예측 모델이 구현되도록 하였다.
#### 5. Docker, AWS를 활용한 프로젝트 배포
- docker를 활용해 AWS에 제작한 프로젝트 결과물을 배포하였다.

## 개선 사항
#### 1. Json Web Token 기능 강화
- 짧은 시간 내에 기능을 구현하다 보니 구현 코드에 대한 깊은 이해와 공부를 할 시간이 부족해 불완전한 기능구현에 그쳤다. 예를 들어 효과적인 공격 방어를 위한 토큰의 저장 위치, Redis를 활용한 refresh토큰 이용 등을 개선해 볼 여지가 있었다.
#### 2. 프론트앤드 컴포넌트 구조 개선
- 컴포넌트 폴더 각각의 이름을 바로 알아볼 수 있는 이름으로 변경하여 다른 파트 개발자들이 보아도 쉽게 알아볼 수 있도록 할 필요가 있었다.
- 리스트 체크박스를 위한 기능이 두 컴포넌트에 사용되었는데 관련 코드를 반복해서 사용했다. 함수화하여 새로운 컴포넌트로 구성할 필요가 있다.
#### 3. GitHub Action 기능을 이용한 배포 자동화
- GitHub Action기능을 활용해 CD/CI 자동화를 시도했으나 실패했다. (folked repository에서 pull request를 하면 action기능의 secrets 변수들이 넘어가지 않아서 원하는 상황을 만들지 못했다.) 다른 시야에서 새로운 방식을 찾아 볼 필요가 있다.
#### 4. AWS 리소스 문제
- React, Springboot, flask를 도커 이미지화 하여 aws에 업로드 했지만 제작한 서비스가 생각보다 무거워 2개의 aws 개정에 업로드 했다. (프리티어에서 모두 돌리지 못함)
- 또한 품목 추천 시스템이 프리티어의 메모리 용량을 초과하여 구현되지 못했다. 서비스의 최적화가 필요하다.
