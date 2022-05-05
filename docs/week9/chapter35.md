---
sidebar_position: 36
---

# 35장 스프레드 문법

- ES6에서 도입된 문법. 하나로 뭉쳐 있는 여러 값들의 집합을 펼쳐서 개별적인 값의 목록으로 나열한다.
- Array, String, Map, Set, DOM 컬렉션, arguments와 같이 이터러블에 한정된다.

## 35.1 함수 호출문의 인수 목록에서 사용되는 경우

> 예제 : Math.max 함수 호출문의 인수 목록

```js
let arr = [1, 2, 3];

// 기존 방법 : apply 메소드 사용
let max = Math.max.apply(null, arr); // 3

// 스프레드 연산자 사용
let max2 = Math.max(...arr); // 3
```

## 35.2 배열 리터럴 내부에서 사용되는 경우

> 예제1 : concat의 대체

```js
// concat
let arr = [1, 2].concat([3, 4]);

console.log(arr); // [1, 2, 3, 4]

// ES6
let arr2 = [...[1, 2], ...[3, 4]];

console.log(arr2); // [1, 2, 3, 4]
```

> 예제2 : splice의 대체

```js
// splice
let arr1 = [1, 4];
let arr2 = [2, 3];

Array.prototype.splice.apply(arr1, [1, 0].concat(arr2));
console.log(arr1); // [1, 2, 3, 4]

// ES6
arr1.splice(1, 0, ...arr2);
console.log(arr1); // [1, 2, 3, 4]
```

> 예제3 : slice 대체

```js
let origin = [1, 2];

// slice
let copy = origin.slice();
console.log(copy); // [1, 2]

// ES6
let copy2 = [...origin];
console.log(copy2); // [1, 2]
```

> 예제4 : 이터러블을 배열로 변환

```js
function sum() {
  return [...arguments].reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3)); // 6
```

## 35.3 객체 리터럴 내부에서 사용하는 경우

> 예제

```js
const merged = { ...{ x: 1, y: 2 }, ...{ y: 10, z: 3 } };
console.log(merged); // {x: 1, y: 10, z: 3}

const changed = { ...{ x: 1, y: 2 }, y: 100 };
console.log(changed); // {x: 1, y: 100};

const added = { ...{ x: 1, y: 2 }, z: 0 };
console.log(added); // {x: 1, y: 2, z: 0};
```
