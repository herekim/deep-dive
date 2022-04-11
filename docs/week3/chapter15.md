---
sidebar_position: 15
---

# 15장 let, const 키워드와 블록레벨 스코프

## 15.1 var 키워드로 선언한 변수의 문제점

-   변수 중복 선언 허용

```jsx
var x = 1;
var y = 1;
// 동일 스코프 내에서 중복선언 허용

// 초기화문이 있는 변수 선언문은 자바스크립트엔진에 의해 var키워드가 없는것처럼 동작
// 의도치 않은 변수 값 변경
// 초기화문: 변수선언과 동시에 초기값을 할당하는 문
var x = 100;
// 초기화 문이 없는 변수 선언문은 무시됨
var y;

console.log(x); //100
console.log(y); //1
```

-   함수레벨 스코프

함수의 코드블록 만을 지역스코프로 인정→ 함수 외부에서 var키워드로 선언한 변수는 코드블록 내에서 선언해도 모두 전역변수가 됨..

Q: 이건 이해가 안감.
전역변수 남발가능

-   변수 호이스팅⇒ 변수선언문 이전에도 참조할 수 있다. 단 할당문 이전에 변수 참조시 언제나 undefined반환

:: 변수선언문 이전에 변수를 참조⇒ 변수 호이스팅에의해 에러발생안함. 단 흐름상 안맞고 가독성 떨어뜨림

## 15.2 let 키워드

-   변수 중복 선언 금지: 동일 스코프내에서 중복선언 금지
-   블록레벨 스코프: 모든 코드블록(함수 , if, while, try,/catch 등)을 지역 스코프로 인정
-   변수 호이스팅

```jsx
console.log(foo); //undefined
var foo;
// var키워드로 선언한 변수는 런타임 이전에 자바스크립트 엔진에 의해
//암묵적으로 "선언단계"와 "초기화단계"가 한번에 진행됨
// 즉, 선언단계에서 스코프(실행컨텍스트의 렉시컬환경)에 변수 식별자를 등록해 자바스크립트엔진에 변수의 존재를 알림
// 즉시초기화 단게에서 undefined로 변수를 초기화
// 따라서 변수 선언문 이전에 변수에 접근(참조)해도 스코프에 변수가 존재하기 때문에 에러발생안함.
// 이후 변수 할당문에 도달하면 비로소 값 할당
foo = 1;

console.log(soo); // ReferenceError: foo is not defined
let soo; // 변수 선언문에서 초기화 단계가 실행된다.
console.log(soo); // undefined

foo = 1; // 할당문에서 할당단계 실행
console.log(foo); //1

//선언단계와 초기화 단계가 분리되어 진행
//런타임 이전에는 자바스크립트엔진에 의해 선언단계먼저실행
// 초기화 단계는 변수 선언문 도달했을 때 실행 => 초기화 단계 이전에 변수 접근시 "참조에러"발생
// 일시적 사각지대(TDZ; Temporal Dead Zone): 스코프 시작지점~ 초기화 단계 시작 지점(변수 선언문)까지 변수 참조 불가
```

그럼 호이스팅 안발생??? 뇨뇨

```jsx
let foo = 1; // 전역 변수

{
    console.log(foo); // ReferenceError: Cannot access 'foo' before initializion
    let foo = 2; //지역 변수
}
//호이스팅이 발생하지 않을 경우 전역변수 foo를 출력해야함
// 하지만 호이스팅이 발생하기떄문에 "참조에러"발생
```

ES6에서 도입된 let, const 를 포함한 모든 선언(var, let ,const ,function, class 등)을 호이스팅한다.

let ,const, class를 사용한 선언문은 호이스팅이 발생하지 않는 것처럼 동작함

-   전역객체와 let

```jsx
/* 브라우저 환경에서 실행 */

var x = 1; //전역변수
y = 2; //암묵적 전역
function foo() {} //전역함수

// var키워드로 선언한 전역변수와 전역함수는 전역객체 window의 프로퍼티이다.
console.log(window.x); //1
//전역객체 window의 프로퍼티는 전역변수처럼 사용가능.
//전역객체의 프로퍼티를 참조할 때 window생략 가능
console.log(x); //1

//선언하지 않은 변수에 값을 할당한 암묵적 전역은 전역객체 window의 프로퍼티이다.
console.log(window.y); //2
console.log(y); //2

//함수 선언문으로 정의한 전역함수는 전역객체 window의 프로퍼티이다.
console.log(window.foo);
//전역객체 window의 프로퍼티는 전역변수처럼 사용가능.
console.log(foo);

let x = 1;
// let키워드로 선언한 전역변수는 전역객체 window의 프로퍼티가 아니다.
console.log(window.x); //undefined
console.log(x); //1

//let 전역변수는 보이지 않는 개념적인 블록(전역 렉시컬 환경의 선언적 환경레코드)내에서 존재함
```

## 15.3 const 키워드

상수(constant)를 선언하기 위해 사용

-   선언과 동시에 초기화

```jsx
const foo; //SyntaxError: Missing initializer in const declaration
```

-   재할당 금지. 불변을의미하지는 않는다.
-   상수

— const 키워드로 선언한 변수에 원시값을 할당한 경우 변수 값을 변경할 수 없다.

— 원시값은 변경 불가능한 값(immutable value)⇒ 재할당 없이 값 변경 불가

:: 상수: 재할당이 금지된 변수

cf. 변수: 언제든 재할당을 통해 변수 값을 변경

-   const 키워드와 객체
