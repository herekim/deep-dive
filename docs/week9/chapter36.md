---
sidebar_position: 37
---

# 36장 디스트럭처링 할당

- 구조 분해 할당 혹은 비구조화 할당
- 구조화된 배열과 같은 이터러블 또는 객체를 비구조화하여 1개 이상의 변수에 개별적으로 할당하는 것

## 36.1 배열 디스트럭처링 할당

> 예제 : 배열 스트럭처링 할당

```js
let arr = [1, 2, 3];

// ES5
let one = arr[0];
let two = arr[1];
let three = arr[2];

console.log(one, two, three); // 1 2 3

// ES6
const [one, two, three] = arr;

console.log(one, two, three); // 1 2 3
```

## 36.2 객체 디스트럭처링 할당

> 예제 : 객체 디스트럭처링 할당

```js
const user = { firstName: "heeyeol", lastName: "kim" };

const { lastName, firstName } = user;
const { lastName: ln, firstName: fn } = user;
const { length } = user;

console.log(lastName, firstName); // kim heeyeol
console.log(ln, fn); // kim heeyeol
console.log(length); // 2
```
