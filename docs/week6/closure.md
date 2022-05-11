---
sidebar_position: 22
---

# 24장 클로저

## 24.1 클로저란?

**"클로저는 함수와 그 함수가 선언됐을 때의 렉시컬 환경과의 조합이다" - 388page**

자바스크립트 엔진은 함수를 어디서 호출했는지가 아니라 함수를 어디에 정의했는지에 따라 상위 스코프를 결정한다. 이를 **렉시컬 스코프(정적 스코프)**라 한다.


```javascript
function outerFunc() {
  var x = 10;
  var innerFunc = function () { 
    console.log(x);
  };

  return innerFunc;
}

/**
 *  함수 outerFunc를 호출하면 내부 함수 innerFunc가 반환된다.
 *  그리고 함수 outerFunc의 실행 컨텍스트는 소멸한다.
 */
var inner = outerFunc();
inner(); // 10
```

외부 함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명 주기가 종료한 외부 함수의 변수를 참조할 수 있다. 이러한 중첩 함수를 클로저라 부른다.

클로저에 의해 참조되는 외부함수의 변수는 **자유변수(Free variable)**라고 부른다.


## 24.2 클로저의 조건

### CASE 1

상위 스코프의 식별자를 참조하지 않을때 일반적으로 클로저라고 하지 않는다.

```javascript
function foo() {
  const x = 1;
  const y = 2;

  function bar() {
    // 상위 스코프(foo함수)의 식별자를 참조하지 않는다.
    const z = 3;
    console.log(z);
  }

  return bar;
}

const bar = foo();
bar();
```

### CASE 2

상위 스코프의 식별자를 참조하나 외부 함수보다 일찍 소멸 될 경우 일반적으로 클로저라고 하지 않는다.

```javascript
function foo() {
  const x = 1;

  // 클로저였지만 곧바로 소멸한다.
  function bar() {
    // 상위 스코프(foo함수)의 식별자를 참조한다
    console.log(x);
  }

  bar();
}

foo();
```

### CASE 3

중첩 함수가 상위 스코프의 식별자를 참조하고 있고 중첩 함수가 외부 함수보다 더 오래 유지되는 경우에 한정하는 것이 일반적이다.

```javascript
function foo() {
  const x = 1;
  const y = 2;

  // 클로저였지만 곧바로 소멸한다.
  function bar() {
    // 상위 스코프(foo함수)의 식별자를 참조한다
    console.log(x);
  }

  return bar();
}

foo();
```

## 24.3 클로저의 활용

클로저는 상태를 안전하게 변경하고 유지하기 위해 사용한다. 즉, 상태가 의도치 않게 변경되지 않도록 상태를 안전하게 은닉하고 특정 함수에게만 상태 변경을 허용하기 위해 사용한다.

### 정보의 은닉
```javascript
function Counter() {
  // 카운트를 유지하기 위한 자유 변수
  var counter = 0;

  // 클로저
  this.increase = function () {
    return ++counter;
  };

  // 클로저
  this.decrease = function () {
    return --counter;
  };
}

const counter = new Counter();

console.log(counter.increase()); // 1
console.log(counter.decrease()); // 0
console.log(counter.decrease()); // -1

```

생성자 함수 Counter는 increase, decrease 메소드를 갖는 인스턴스를 생성한다. 이 메소드들은 모두 자신이 생성됐을 때의 렉시컬 환경인 생성자 함수 Counter의 스코프에 속한 변수 counter를 기억하는 클로저이며 렉시컬 환경을 공유한다. 생성자 함수가 함수가 생성한 객체의 메소드는 객체의 프로퍼티에만 접근할 수 있는 것이 아니며 자신이 기억하는 렉시컬 환경의 변수에도 접근할 수 있다.

이때 생성자 함수 Counter의 변수 counter는 this에 바인딩된 프로퍼티가 아니라 변수다. counter가 this에 바인딩된 프로퍼티라면 생성자 함수 Counter가 생성한 인스턴스를 통해 외부에서 접근이 가능한 public 프로퍼티가 되지만 생성자 함수 Counter 내에서 선언된 변수 counter는 생성자 함수 Counter 외부에서 접근할 수 없다. 하지만 생성자 함수 Counter가 생성한 인스턴스의 메소드인 increase, decrease는 클로저이기 때문에 자신이 생성됐을 때의 렉시컬 환경인 생성자 함수 Counter의 변수 counter에 접근할 수 있다. 이러한 클로저의 특징을 사용해 클래스 기반 언어의 private 키워드를 흉내낼 수 있다.



### 함수형 프로그래밍에서 클로저를 활용하는 간단한 예제

```javascript
// 함수를 인자로 전달받고 함수를 반환하는 고차 함수
// 이 함수가 반환하는 함수는 클로저로서 카운트 상태를 유지하기 위한 자유 변수 counter을 기억한다.
function makeCounter(predicate) {
  // 카운트 상태를 유지하기 위한 자유 변수
  var counter = 0;
  // 클로저를 반환
  return function () {
    counter = predicate(counter);
    return counter;
  };
}

// 보조 함수
function increase(n) {
  return ++n;
}

// 보조 함수
function decrease(n) {
  return --n;
}

// 함수로 함수를 생성한다.
// makeCounter 함수는 보조 함수를 인자로 전달받아 함수를 반환한다
const increaser = makeCounter(increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

// increaser 함수와는 별개의 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동하지 않는다.
const decreaser = makeCounter(decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2
```