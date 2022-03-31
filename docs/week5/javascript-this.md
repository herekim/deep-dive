---
sidebar_position: 21
---

# javascript의 this

# 22장 this

## 22.1 this 키워드

**"this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수다." - 343page**

자바스크립트에서의 this는 다른 언어에서 사용되는 this와 다르게 함수 호출 방식에 따라 동적으로 결정된다.
이 부분이 자바스크립트 개발자를 혼란스럽게 하지만, 기본적으로 this는 객체의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수이다.
그래서 객체의 메서드 내부 혹은 생성자 함수 내부에서만 유의미하다. 일반 함수에서는 this를 쓸 필요도 이유도 없다.

## 22.2 함수 호출 방식과 this 바인딩

**"함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프는 함수 정의가 평가되어 함수 객체가 생성되는 시점에 상위 스코프를 결정한다.
하지만 this 바인딩은 함수 호출 시점에 결정된다." - 346page**

this가 동적 바인딩되는 함수 호출 방식은 다음과 같다.

- 일반 함수 호출
- 메서드 호출
- 생성자 함수 호출
- Function.prototype.apply/call/bind 메서드에 의한 간접 호출

### 예시코드

```js
const first = function() {
  console.log(this);
}
first(); //window

const second = {
  first: first;
}
second.first(); //second

const third = new first();
third; // first

const fourth = { name: "bar" };
first.call(fourth); // bar
first.apply(fourth); // bar
first.bind(fourth)(); // bar


```

## + 화살표 함수의 this

화살표 함수는 arguments, this 객체를 가지고 있지 않다. 그렇기 때문에 this는 스코프 체인에 따라
자신의 상위 this 객체를 따르게 된다.

### 예시코드

```js
function SayHi(hi) {
  this.hi = hi;
}

SayHi.prototype.toEveryone = function (arr) {
  return arr.map((el) => `${this.hi} ${el}`);
};

SayHi.prototype.toEverybody = function (arr) {
  return arr.map(function (el) {
    return `${this.hi} ${el}`;
  });
};

let greeting = new SayHi("Hi");
console.log("toEveryone", greeting.toEveryone([1, 2])); // 'toEveryone' [ 'Hi 1', 'Hi 2' ]
console.log("toEveryBody", greeting.toEverybody([1, 2])); // 'toEveryBody' [ 'undefined 1', 'undefined 2' ]
```

# javaScript에서의 this

나는 this를 사용한 경험이 거의 없었다. 생성자 함수와 클래스 문법을 거의 쓰지 않았기 때문이다.
그래서 this는 기술 면접을 위한 암기 과목에 불과했다. 하지만 이번 기회로 "왜" this를 쓰며,
"왜" this는 동적 바인딩이라는 독특한 방식을 취했을까를 고민했다.

1. 객체 지향 프로그래밍 언어인 java, c# 등을 모방

javacript는 초창기에 여러 언어들을 모방해서 만들어졌다. 그 중 하나가 java, c# 등의 객체 지향 프로그래밍 언어였으며
클래스를 통한 객체 지향을 추구했던 객체 지향 프로그래밍 언어에서의 this는 사실 그다지 혼란스럽지 않았다.
클래스의 this는 결국 인스턴스 자신을 가리켰기 때문이다. ~~사실 안써봐서 잘 모른다.~~

2. 프로토타입에서 객체 지향 구현하기

javascript는 클래스 기반의 객체 지향언어가 아니다. 프로토타입 기반이다. 그러므로 근본이 다르다. 일례로 javascript에서는
생성자 함수가 존재한다. 하지만 대부분의 객체 지향 언어에서 생성자는 클래스를 의미한다. javascript는 ES5가 되어서야 클래스 문법을
도입했고, 이전에도 사실 생성자 함수를 통한 객체 지향 프로그래밍이 어느 정도는 가능했다.

추가로 javascript에서 프로토타입을 선택한 이유에 대해 서양 철학과 접목해서 설명한 블로그 글이 있는데
프로토타입의 깊은 이해가 필요한 분들이 봤으면 좋을 것 같다.

[자바스크립트는 왜 프로토타입을 선택했을까](https://medium.com/@limsungmook/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%99%9C-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85%EC%9D%84-%EC%84%A0%ED%83%9D%ED%96%88%EC%9D%84%EA%B9%8C-997f985adb42)

3. 프로토타입은 "누구를 기준으로 호출하느냐"가 중요하다

첨부한 블로그 글에 따르면 이해가 명쾌해진다. 결국 프로토타입은 호출하는 기준이 누구느냐에 따라서 this의 의미가 달라진다.
일반 함수의 경우 프로토타입의 상속을 통해 결국 호출하는 객체는 window 객체이기 때문에 this는 window이다.
메서드는 자신을 호출한 객체가 바로 this이다. 생성자 함수는 인스턴스를 호출한 생성자 함수가 this이다. 클래스 또한
마찬가지이다.

+생성자 함수와 클래스

    둘 다 객체 생성 매커니즘.

    - 생성자 함수

      new 연산자 없이 호출하면 일반 함수로서 호출되기 때문에 별도 처리 필요
      생성자 함수는 extends, super 키워드 미제공
      함수 선언문으로 정의된 생성자 함수는 함수 자체가 호이스팅이 됨
      함수 표현식으로 정의된 생성자 함수는 변수 호이스팅이 발생
      암묵적으로 strict mode가 지정되지 않음

    - 클래스

      new연산자 없이 호출하면 에러 발생
      상속을 지원하는 extends, super 키워드 제공
      호이스팅이 발생하지 않는 것처럼 동작
      모든 코드에는 암묵적으로 strict mode가 지정되어 실행되며 strict mode 해제 불가
      생성자 함수 기반의 객체 생성 방식보다 견고하고 명료함

# 추가 정리

## 20장

## 23장 실행 컨텍스트

- 실행 컨텍스트을 이해하면 식별자, 식별자에 바인딩된 값을 관리하는 방식, 호이스팅이 발생하는 이유,
  클로저의 동작 방식, 태스크 큐와 함께 동작하는 이벤트 핸들러, 비동기 처리의 방식을 이해할 수 있다.

### 코드 예시

```js
const x = 1;

function foo() {
  const y = 2;

  function bar() {
    const z = 3;
    console.log(x + y + z);
  }
  bar();
}

foo();
```

### 실행 컨텍스트와 소스코드 평가, 실행 과정

1. 전역 코드가 평가되어 전역 실행 컨텍스트 형성
2. 실행 컨택스트 스택에 푸시
3. 전역 변수 x와 함수 foo는 전역 실행 컨텍스트에 등록
4. 전역 코드가 실행되고 전역 변수 x에 값이 할당
5. foo()가 호출되고, 전역 코드의 실행은 일시 중지
6. foo 함수 코드가 평가되어 함수 실행 컨텍스트 형성
7. 실행 컨텍스트 스택에 푸시
8. foo함수의 지역 변수 y와 중첩함수 bar는 함수 실행 컨텍스트에 등록
9. foo함수가 실행되고 지역 변수 y에 값이 할당
10. bar()가 호출되고, foo함수의 실행은 일시 중지
11. bar함수 코드가 평가되어 함수 실행 컨텍스트 형성
12. 실행 컨텍스트 스택에 푸시
13. 지역변수 z가 bar함수 실행 컨텍스트에 등록
14. bar함수가 실행되고 지역 변수 z에 값이 할당되고, console.log 메서드 호출
15. bar 함수 종료 및 bar 함수 실행 컨텍스트 제거
16. foo 함수 종료 및 foo 함수 실행 컨텍스트 제거
17. 전역 실행 컨텍스트 제거
