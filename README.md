# PNU_React
[K-Digital 부산대22-1기] AI 활용 빅데이터분석 풀스택웹서비스 SW 개발자 양성과정

### 22.10.05
+ install node.js
+ npx create-react-app project_name
+ npm start
+ gh-pages
  + remote, push
  + npm install gh-pages --save-dev
  + package.json
    + script 
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
    + "homepage": "github url",
  + npm run deploy
+ Component
  
### 22.10.06
+ app02 : PNU_React_project5_web

### 22.10.11
+ object
+ props
+ complete app02
+ app03 : review
+ 삼항 연산자
+ falsy 값으로 간주
  + false, 0, -0, "", null, undefined, NaN

### 22.10.12
+ review
+ 인라인 형식, object 변수, css 파일로 스타일 변경
+ cascading
+ object

### 22.10.13
+ array with object
+ map
+ key
+ useState

### 22.10.17
+ JSON

### 22.10.18
+ React Hook

### 22.10.19
+ useRef

### 22.10.20
+ PNU_React_project6

### 22.10.24
+ npm install react-router-dom
+ BrowserRouter Routes Route
+ Link

### 22.10.25
+ complete PNU_React_project6_weather

### 22.10.26
+ PNU_React_project7 start

### 22.10.28
+ complete PNU_React_project7_movie

### 22.10.31
+ Firebase
  + Firebase Cloud Function
    + 클라우드 서비스를 빌드하고 연결할 수 있는 serverless 실행 환경
  + Auth
    + 주요 SNS를 통해서 로그인을 쉽게 구현하는 서비스
  + Hosting
    + 서버 없이 웹 서비스를 배포할 수 있도록 도와주는 서비스
  + Realtime Databese:
    + Firebase의 기존 실시간 데이터베이스
  + Cloud Firestore
    + 모바일 앱 개발을 위한 Firebase의 최신 데이터베이스ML
    + 머신 러닝 서비스
+ Firebase Hosting
  + firebase 프로젝트 생성
  + npm install -g firebase-tools
  + firebase
  + npm run build
  + firebase login
  + firebase init
  + firebase deploy

+ PWA(Progressive Web App)
  + 장점
    + 홈 화면, 앱 런처, 런치패드 또는 시작 메뉴에 아이콘이 있음
    + 기기에서 앱을 검색할 때 나타남
    + 브라우저의 사용자 인터페이스와 완전히 분리된 독립 실행형
    + 오프라인에서 작동
    + 다양한 앱스토어에 출시하기 위해서 별도의 프로세스를 거치지 않아도 됨
  + 단점
    + 하드웨어 사용은 웹 API를 통함으로 웹 표준을 지원하는 브라우저가 필요
    + 네이티브 앱보다는 할 수 있는 작업에 한계가 있음
  + 핵심 기술
    + 서비스 워커(Service Worker)
      + 웹 브라우저 안에 있지만 웹 브라우저와 분리되어 항상 실행되는 백그라운드 프로그램
      + 브라우저와 서버 사이에서 상태값을 감시하고 푸시 알림으로 사용자에게 특정 메시지와 댓글 알림 보냄
      + 오프라인 상태에서도 동작
    + 웹 앱 매니페스트
      + 웹 콘텐츠를 운영 체제에서 앱으로 표시하는 방법을 브라우저에 알려주는 파일
        + 앱 소개 정보와 기본 설정을 담은 JSON 파일
        + 앱 이름, 아이콘 및 테마 색상과 같은 기본 정보가 포함
        + 원하는 방향 및 앱 바로 가기와 같은 고급 기본 설정
      + 매니페스트 연결
        +```<link rel="manifest" href="/app.webmanifest">```
    + 보안을 강화한 HTTPS
      + 암호화와 인증을 거친 웹 통신규약인 HTTPS를 사용하여 서비스 워커를 이용해서 PWA를 배포할 때 반드시 HTTPS 프로토콜 사용
    + 푸시 알림
      + 사용자가 푸시 알림에 동의하면 알림을 보낼 수 있음
        + 푸시 알림은 사용자의 재방문을 유도하고 서비스 이용 시간을 늘리는 기능
        + 네이티브앱에서만 지원되던 기능이지만 PWA에서도 백그라운드 상태에서도 알림 메시지를 보낼 수 있음
    + 홈화면에 추가 기능
      + PWA로 개발된 웹에 접속하면 웹 브라우저는 사용자에게 PWA 설치를 제안
      + 운영체제에 설치되는 기능으로 진짜 앱처럼 인식
      + 4가지 요건
        + HTTPS 접속 : PWA 호스팅이 HTTPS 프로토콜로 서비스
        + 매니페스트 등록
        + 서비스 워커 설치 : 서비스 워커가 브라우저에 설치되어 있어야 함
        + PWA 설치 여부 : 현재 PWA가 이전에 설치되어 있지 않아야 함
    + 웹 API
      + https://developer.mozilla.org/en-US/docs/Web/API
      + https://whatwebcando.today/
  + 리액트 PWA 프로젝트 생성
    + npx create-react-app pj_name --template cra-template-pwa
    + index.js 추가
      + ```import * as serviceWorkerRegistration from './serviceWorkerRegistration';```
      + ```serviceWorkerRegistration.register();``` 


