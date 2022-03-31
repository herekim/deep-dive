---
sidebar_position: 20
---

1. stric mode에서 함수를 일반 함수로 호출하면 무엇이 바인딩될까?

```js
function foo() {
  console.log(this); // ?
}

foo();
```

2. 다음 코드에서 원시값인 변수 str이 length 프로퍼티와 toUpperCase() 메소드를 사용할 수 있는 이유는 무엇일까?

```js
const str = "hello";

console.log(str.length); //5
console.log(str.toUpperCase()); //HELLO
```

3. 각 경우의 this는 무엇일까?

```js
function one() {
  console.log(this); // (1)
}
one();

const object = {
  two() {
    console.log(this); // (2)
  },
};
object.two();

function three() {
  console.log(this); // (3)
}

const newThree = new three();
newThree;
```

4. 아래 상황에서 console.log()의 값은 무엇일까?

```js
var x = 1;
const y = 2;

function foo(a) {
  var x = 3;
  const y = 4;

  function bar(b) {
    const z = 5;
    console.log(a + b + x + y + z);
  }

  bar(10);
}

foo(20);
```
