---
sidebar_position: 50
---

# 44장 REST API

REST: Representational State Transfer 

웹이 HTTP를 제대로 사용하지 못하고 있는 상황을 보고 HTTP의 장점을 최대한 활용할 수 있는 아키텍처로서 REST를 로이 필딩이 소개했고, 이는 HTTP 프로토콜을 의도에 맞게 디자인하도록 유도하고 있디.

REST의 기본 원칙을 성실히 지킨 서비스 디자인을 RESTful 이라한다.

즉, REST는 HTTP를 기반으로 클라이언트가 서버의 리소스에 접근하는 방식을 규정한 아키텍처고, REST API 는 REST를 기반으로 서비스 API를 구현한것을 의미한다. 

## REST API의 구성

REST API 는 자원 (resource), 행위 (verb), 표현 (representations)의 3가지 요소로 구성된다. REST는 자체 표현 구조 self-descriptiveness로 구성되어 REST API만으로 http요청의 내용을 이해할 수 있다.

- resource : 자원 - URI (엔드포인트)
- verb: 자원에 대한 행위 - HTTP 요청 메서드
- representations: 자원에 대한 행위의 구체적 내용 - 페이로드

## REST API 설계 원칙

REST 에서 가장 중요한 기본적인 원칙을 알아보자.

1. URI는 리소스를 표현해야한다.
리소스를 식별할수 있는 이름은 동사보다는 명사를 사용.

```GET /todos/1```

2. 리소스에 대한 행위는 http 요청 메서드로 표현
HTTP 요청 메서드는 클라이언트가 서버에세 요청의 종료와 목적 (리소스에 대한 행위)을 알리는 방법이다. GET, POST, PUT, PATCH, DELETE 를 사용하여 CRUD를 구현한다.

### GET 
- 종류: index / retrieve
- 페이로드: X

### POST
- 종류: create
- 페이로드: O

### PUT
- 종류: replace (전체교체)
- 페이로드: O 

### PATCH 
- 종류: modify (일부수정)
- 페이로드: O

### DELETE
- 종류: delete 
- 페이로드: X

리소스에 대한 행위는 URI에 표현하지 않는다.

## JSON Server를 이용한 REST API 실습

JSON Server를 사용해 가상 REST API 서버를 구축하여 HTTP 요청을 전송, 응답 받을 수 있다.