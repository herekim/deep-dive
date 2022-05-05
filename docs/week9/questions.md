---
sidebar_position: 40
---

# Questions

## 1. 다음 코드에서 console.log()의 결과값은?

```js
const arr = [1, 2, 3];

const arr1 = [...arr];

console.log(arr1); // 1-1

function func(...rest) {
  console.log(rest); // 1-2
}

func(...arr);
```

## 2. 다음 코드에서 console.log()의 결과값은?

```js
const user = {
  name: "kim",
  address: {
    zipCode: "03068",
    city: "busan",
  },
};

const {
  address: { city },
} = user;

console.log(city);
```

## 3. 다음은 Set 객체를 사용해서 교집합을 구하는 코드이다. 빈칸에 들어갈 코드는?

```js
Set.prototype.intersection = function (set) {
  const result = new Set();

  for (const value of set) {
    //문제👇
    if(___?___) (result.add(value))
  }

  return result;
}

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4, 6]);

console.log(setA.intersection(setB)); // Set(2) {2, 4}
```

## 4. 다음 상황에서의 해결책을 2가지 이상 쓰세요.

아래 코드에서 body 태그의 li 태그가 너무 늦게 뜨는 현상이 발생했다. script 태그와 관련해서 어떻게 이 문제를 해결할 수 있을까?

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="style.css" />
    <script src="app.js"></script>
  </head>
  <body>
    <ul>
      <li id="apple">Apple</li>
      <li id="banana">Banana</li>
      <li id="orange">Orange</li>
    </ul>
  </body>
</html>
```
