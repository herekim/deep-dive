---
sidebar_position: 38
---

# 37장 Set과 Map

- Set 객체는 중복되지 않는 유일한 값들의 집합
- 배열과 Set 객체

| 구분                                 | 배열 | Set 객체 |
| ------------------------------------ | ---- | -------- |
| 동일한 값을 중복하여 포함할 수 있다. | O    | X        |
| 요소 순서에 의미가 있다.             | O    | X        |
| 인덱스로 요소에 접근할 수 있다.      | O    | X        |

## 37.1 Set 객체의 생성

```js
const set1 = new Set([1, 2, 3, 4]);
console.log(set1); // Set(3) {1, 2, 3}

const set2 = new Set("hello");
console.log(set2); // Set(5) {'h', 'e', 'l', 'l', 'o'}

const set3 = () => [...new Set(array)];
console.log(set3([1, 1, 2, 2, 3, 3])); // [1, 2, 3]
```

## 37.1.2 요소 개수 확인

```js
const { size } = new Set([1, 2, 3, 3]);
console.log(size); // 3
```

## 37.1.3 요소 추가

```js
const set = new Set();
console.log(set); // Set(0) {}

set.add(1);
console.log(set); // Set(1) {1}

set.add(2).add(3);
console.log(set); // Set(3) {1, 2, 3}
```

## 37.1.4 요소 존재 여부 확인

```js
const set = new Set([1, 2, 3]);

console.log(set.has(2)); // true
console.log(set.has(4)); // false
```

## 37.1.5 요소 삭제

```js
const set = new Set([1, 2, 3, 4, 5]);

set.delete(2);
console.log(set); // Set(4) {1, 3, 4, 5}

set.delete(1);
console.log(set); // Set(3) {3, 4, 5}

set.delete(3).delete(4);
console.log(set); // Set(1) {5}
```

## 37.1.6 요소 일괄 삭제

```js
const set = new Set([1, 2, 3]);

set.clear();
console.log(set); // Set(0) {}
```

## 37.1.7 요소 순회

```js
const set = new Set([1, 2, 3]);

set.forEach((v, v2, set)) => console.log(v, v2, set);

/**
* 1 1 Set(3) {1, 2, 3}
* 2 2 Set(3) {1, 2, 3}
* 3 3 Set(3) {1, 2, 3}
*/
```

## 37.1.8 집합 연산

### 교집합

```js
Set.prototype.intersection = function (set) {
  const result = new Set();

  for (const value of set) {
    if (this.has(value)) result.add(value);
  }

  return result;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

console.log(setA.intersection(setB)); // Set(2) {2, 4}
console.log(setB.intersection(setA)); // Set(2) {2, 4}
```

```js
Set.prototype.intersection = function (set) {
  return new Set([...this]).filter((v) => set.has(v));
};

console.log(setA.intersection(setB)); // Set(2) {2, 4}
console.log(setB.intersection(setA)); // Set(2) {2, 4}
```

### 합집합

```js
Set.prototype.union = function (set) {
  const result = new Set(this);

  for (const value of set) {
    result.add(value);
  }

  return result;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

console.log(setA.union(setB)); // Set(4) {1, 2, 3, 4}
console.log(setB.union(setA)); // Set(4) {1, 2, 3, 4}
```

```js
Set.prototype.union = function (set) {
  return new Set([...this, ...set]);
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

console.log(setA.union(setB)); // Set(4) {1, 2, 3, 4}
console.log(setB.union(setA)); // Set(4) {1, 2, 3, 4}
```

### 차집합

```js
Set.prototype.difference = function (set) {
  const result = new Set(this);

  for (const value of set) {
    result.delete(value);
  }

  return result;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

console.log(setA.difference(setB)); // Set(2) {1, 3}
console.log(setB.difference(setA)); // Set(0) {}
```

```js
Set.prototype.difference = function (set) {
  return new Set([...this].filter((v) => !set.has(v)));
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

console.log(setA.difference(setB)); // Set(2) {1, 3}
console.log(setB.difference(setA)); // Set(0) {}
```

### 부분 집합과 상위 집합

```js
Set.prototype.isSuperset = function (subset) {
  for (const value of subset) {
    if (!this.has(value)) return false;
  }

  return true;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

console.log(setA.isSuperset(setB)); // true
console.log(setB.isSuperset(setA)); // false
```

```js
Set.prototype.isSuperset = function (subset) {
  const supersetArr = [...this];
  return [...subset].every((v) => supersetArr.includes(v));
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

console.log(setA.isSuperset(setB)); // true
console.log(setB.isSuperset(setA)); // false
```

## 37.2 Map

- Map 객체는 키와 쌍으로 이루어진 컬렉션.
- 객체와 Map 객체

| 구분                   | 배열                    | Set 객체              |
| ---------------------- | ----------------------- | --------------------- |
| 키로 사용할 수 있는 값 | 문자열 또는 심벌값      | 객체를 포함한 모든 값 |
| 이터러블               | X                       | O                     |
| 요소 개수 확인         | Object.keys(obj).length | map.size              |

### 37.2.1 Map 객체의 생성

```js
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

console.log(map); // Map(2) {"key1" => "value1", "key2" => "value2"}
console.log(map2) = new Map([1, 2]) // TypeError: Iterator value 1 is not an entry object
```

### 37.2.2 요소 개수 확인

```js
const { size } = new map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

console.log(size); // 2
```

### 37.2.3 요소 추가

```js
const map = new Map();
console.log(map); // Map(0) {}

map.set("key1", "value1");
console.log(map); // Map(1) {"key1" => "value1"}

map.set("key2", "value2").set("key3", "value3");
console.log(map); // Map(3) {"key1" => "value1", "key2" => "value2", "key3" => "value3",}
```

### 37.2.4 요소 취득

```js
const map = new Map();

const lee = { name: "Lee" };
const kim = { name: "Kim" };

map.set(lee, "developer").set(kim, "designer");

console.log(map.get(lee)); // developer
console.log(map.get(kim)); // designner
```

### 37.2.5 요소 존재 여부 확인

```js
const map = new Map();

const lee = { name: "Lee" };
const kim = { name: "Kim" };

map.set(lee, "developer").set(kim, "designer");

console.log(map.has(lee)); // true
console.log(map.has("key")); // false
```

### 37.2.7 요소 일괄 삭제

```js
const map = new Map();

const lee = { name: "Lee" };
const kim = { name: "Kim" };

map.set(lee, "developer").set(kim, "designer");
map.clear();

console.log(map); // Map(0) {}
```

### 37.2.8 요소 순회

```js
const lee = { name: "Lee" };
const kim = { name: "Kim" };

const map = new Map([
  [lee, "developer"],
  [kim, "designer"],
]);

map.forEach((v, k, map) => console.log(v, k, map));

/*
developer {name: 'Lee'} Map(2) {
  {name: 'Lee'} => 'developer',
  {name: 'Kim'} => 'designer'
}

designer {name: 'Kim'} Map(2) {
  {name: 'Lee'} => 'developer',
  {name: 'Kim'} => 'designer'
}
*/
```

| Map 메서드            | 배열                                                              |
| --------------------- | ----------------------------------------------------------------- |
| Map.prototype.keys    | Map 객체에서 요소키를 갖는 이터러블, 이터레이터 객체 반환         |
| Map.prototype.values  | Map 객체에서 요소값을 갖는 이터러블, 이터레이터 객체 반환         |
| Map.prototype.entries | Map 객체에서 요소키, 요소값을 갖는 이터러블, 이터레이터 객체 반환 |

```js
const lee = { name: "Lee" };
const kim = { name: "Kim" };

const map = new Map([
  [lee, "developer"],
  [kim, "designer"],
]);

for (const key of map.keys()) {
  console.log(key); // {name: "Lee"} {name: "Kim"}
}

for (const value of map.values()) {
  console.log(value); // developer designer
}

for (const entry of map.entries()) {
  console.log(entry); // [{name: "Lee"}, "developer"] [{name: "Kim"}, "designer"]
}
```
