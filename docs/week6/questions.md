---
sidebar_position: 24
---

1. bar()함수는 클로저인가? O, X

```js
function foo() {
  const x = 1;

  function bar() {
    console.lg(x);
  }

  bar();
}

foo();
```

2. 클로저에 의해 참조되는 상위 스코프의 변수를 ~이라고 부른다

3. 다음의 실행 결과를 작성하세요

```js
function Person(name, age) {
  this.name = name;
  let _age = age;

  this.sayHi = function () {
    console.log(`${this.name}, ${_age}`);
  }
}

const me = new Person('Son', 28);
me.sayHi(); // (1)
console.log(me.name); // (2)
console.log(me._age); // (3)
```

4. 클래스 몸체에서 정의할 수 있는 메서드는 생00, 00000 메00, 정0 000 3가지가 있다.

5. 자바스크립트 클래스는 호이스팅이 된다? 안된다? O, X


정답!

1. X -> 외부 함수 foo의 변수 x를 참조하지만  외부 함수 foo보다 생명주기가 먼저 끝나므로 일반적으로 클로저라 부르지 않음
2. 자유변수
3. ‘Son, 28’, ‘Son’, undefined
4. 생성자, 프로토타입 메서드, 정적 메서드
5. O 안되는 것 처럼 보이나 됨
