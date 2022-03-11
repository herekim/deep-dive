---
sidebar_position: 8
---

# 8장 제어문

제어문은 조건에 따라 코드 블록을 실행(조건문)하거나 반복 실행(반복문)할 때 사용한다.

## 8.1 블록문

---

블록문은 0개 이상의 문을 중괄호로 묶은 것으로, 코드 블록 또는 블록이라고 부른다. 문의 끝에는 세미콜론(;)을 붙이는 것이 일반적이다. 하지만 블록문은 언제나 문의 종료를 의미하는 자체 종경성을 갖기 때문에 블록문의 끝에는 세미콜론을 붙이지 않는다.

```javascript
// 블록문
{
  var foo = 10;
}

//제어문
var x = 1;
if (x < 10) {
  x++;
}

// 함수 선언문
function sum(a, b) {
  return a + b;
}
```

## 8.2 조건문

---

조건문은 주어진 조건식의 평가 결과에 따라 코드 블록의 실행을 결정한다. 조건식은 불리언 값으로 평가될 수 있는 표현식이다.

### if...else 문

```javascript
// if... else 문
if(조건식) {
  // 조건식이 참이면 실행
} else {
  // 조건식이 거짓이면 실행
}

//if... else if 문
if(조건식1) {
  // 조건식 1이 참이면 실행
} else if(조건식2) {
  // 조건식 2이 참이면 실행
} else {
  // 조건식 1, 2가 거짓이면 실행
}
```

if...else 문은 삼항 연산자로 바꿔 쓸 수 있다.
```javascript
// if... else 문
if(조건식) {
  // 조건식이 참이면 실행
} else {
  // 조건식이 거짓이면 실행
}

// 삼항 연산자
// 조건식 ? 참이면 실행 : 거짓이면 실행
var kind = 1;
var numType = "";

var kind = 1 ? numType = "양수" : numType = "음수";
```

### switch 문

---

switch 문은 주어진 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case 문으로 실행 흐름을 옮긴다.

```javascript
switch (표현식) {
    case 표현식1:
      switch 문의 표현식과 표현식1이 일치하면 실행될 문;
      break;
    case 표현식2:
      switch 문의 표현식과 표현식2가 일치하면 실행될 문;
      break;
    default:
      switch 문의 표현식과 일치하는 case 문이 없을 때 실행될 문;  
}
```

if...else 문으로 해결할 수 있다면 if...else문을 사용하는 편이 더 좋다. 하지만 조건이 너무 많아 switch 문을 사용했을 때 가독성이 더 좋다면 switch 문을 사용하는 편이 좋다.


## 반복문

---

반복문은 조건식의 평가 결과가 참인 경우 코드 블록을 실행한다. 그 후 조건식을 다시 평가하여 여전히 참인 경우 코드 블록을 다시 실행한다. 조건이 거짓일 때까지 반복한다.

### for 문

---

for 문은 조건식이 거짓으로 평가될 때까지 코드 블록을 반복 실행한다.
```javascript
for (var i = 0; i < 2; i++) {
  console.log(i)
}
// 0
// 1
```

어떤 식도 선언하지 않은 for 문은 무한루프가 된다.

```javascript
for (;;) {...}
```

for 문 내에 for 문을 사용해 중첩 for 중첩 for 문을 만들 수 있다. 하지만 데이터를 처리해야하는 양이 많을 때(반복의 횟수가 많은 경우)에는 처리 속도가 오래 걸릴 수 있다.

실제 업무를 진행하며 jQuery를 사용해 dom을 직접 필터링하는 작업이 있었는데 중첩 for 문을 사용하여 속도가 매우 느렸던 적이 있다. 다른 방식을 통해 개선했지만 중첩 for 문을 지양하게 되는 계기가 되었다.

```javascript
for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    console.log(i, j)
  }
}
```

### while 문

---

while 문은 주어진 조건식의 평가 결과가 참이면 코드 블록을 계속해서 발복 실행한다. for문은 반복 횟수가 명확할 때 주로 사용하고 while 문은 방복 횟수가 불명확할 때 주로 사용한다.

```javascript
var count = 0;

while (count < 3) {
  console.log(count); // 0 1 2
  count++;
}
```

조건식의 평가가 언제나 참이면 무한루프된다. 무한루프에서 탈출하기 위해서는 if 문으로 탈출 조건을 만들고 break 문으로 코드 블록을 탈출한다.

```javascript

// 무한루프
while(true) {...}

var count = 0;
// 무한루프 탈출
while(true) {
  count++;

  if(count === 2) {
    break;
  }
}
```

### do... while 문

---

do...while 문은 코드 블록을 먼저 실행하고 조건식을 평가한다. 따라서 코드 블록은 무조건 한 번 이상 실행된다.

```javascript
var count = 0;
do {
  console.log(count); // 0 1 2
  count++;
} while (count < 3);

```

### break 문

---

break 문은 코드 블록을 탈출한다. 레이블 문, 반복문, switch 문의 코드 블록 외에 break 문을 사용하면 SyntaxError(문법 에러)가 발생한다.
- 레이블 문 : 식별자가 붙은 문

```javascript
foo : console.log('foo');
```

### continue 문

---

continue 문은 반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 실행 흐름을 이동시킨다. break 문처럼 반복문을 탈출하지는 않는다.

```javascript
var string = 'Hello World.';
var search = 'l';
var count = 0;

for (var i = 0; i < string.length; i++) {
  // 'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
  if(string[i] !== search) continue;
  count++; // continue 문이 실행되면 이 문은 실행되지 않는다.
}

console.log(count); // 3
```




