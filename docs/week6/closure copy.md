---
sidebar_position: 23
---

# 25장 클래스

## 25.1 클래스 정의
자바스크립트는 프로토타입 기반 객체지향 언어이다. 자바스크립트에서 클래스는 사실 함수이며 기존 프로토타입 기반 패턴을 클래스 기반 패턴처럼 사용할 수 있도록 하는 문법적 설탕이라고 할 수 있다.

조금 더 자세히 말하면 새로운 객체 생성 메커니즘으로 보는 것이 합당하다고 할 수 있다.


클래스는 class 키워드를 사용하여 정의한다. 클래스 이름은 생성자 함수와 마찬가지로 파스칼 케이스를 사용하는것이 일반적이나, 사용하지 않아도 에러가 발생하지는 않는다.

```javascript
// 익명 클래스 표현식
const Person = class {};

// 기명 클래스 표현식
const Person = class MyClass {};
```

클래스 몸체에는 0개 이상의 메서드만 정의할 수 있다. 클래스 몸체에서 정의할 수 있는 메서드는 constructor(생성자), 프로포타입 메서드, 정적 메서드 세 가지가 있다.

```javascript
const Person = class {

  //생성자
  constructor(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }

  // 정적 메서드
  static sayHello() {
    console.log('Hello!');
  }
};


//인스턴스 생성
const me = new Person('Son');

console.log(me.name);
me.sayHi();
Person.sayHello();
```

## 상속에 의한 클래스 확장

상속에 의한 클래스 확장은 기존 클래스를 상속받아 새로운 클래서를 확장하여 정의하는 것이다.


### extends 키워드를 사용한 상속

```javascript
// 생성자 함수
function Base(a) {
  this.a = a;
}

// 생성자 함수를 상속받는 서브클래스
class Derived extends Base {}

const derived = new Derived(1);
console.log(derived); // Derived {a: 1}
```