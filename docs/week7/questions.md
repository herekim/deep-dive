---
sidebar_position: 25.9
---

### 1. ES6 사양에서 함수 foo와 bar는 각각 함수의 어떤 종류에 속하는가? 생성자함수로서 호출 했을 경우 각 함수의 결과는?

```jsx
const obj = {
	x:1,
	foo(){ return this.x}
	bar: function(){return this.x}
}

console.log(obj.foo())  //1      -(a)
console.log(obj.bar())  //1.     -(b)

new obj.foo() // -(c)
new obj.bar() // -(d)
```

### 2. super 키워드의 역할? 및 이를 사용할 수 있는 ES6사양에서 함수는??

### 3. 다음 ES6에서 a와 b의 분류방법은?

```jsx
const base = {
  name: "Seo",
  sayHi() {
    return `Hi! ${this.name}`;
  },
};

const dervied = {
  __proto__: base,
  sayHi() {
    return `${super.work()}. How are you doing?`;
  },
};

console.log(derived.sayHi()); //(a)

const dervied = {
  __proto__: base,
  sayHi: function () {
    return `${super.work()}. How are you doing?`;
  },
};
console.log(derived.sayHi()); //(b)
```

### 3. 다음 함수가 동작하지 않고 있다. 해결방안은?

```jsx
const numbers: number[] = [1, 2, 3, 4, 5, 6];

const test = (info: number[]) => {
  numbers.map((n) => n * 2);
};

test();
```

### 4. const arr = [1,2] 맨뒤에 3을 추가해주세요. (push 사용 제외. 원본배열 훼손하는경우 안하는경우 상관없음)

```jsx
const arr = [1, 2];
```

### 5. delete연산자 vs. splice()

### 6. 배열에서 숫자 2가 있는지 확인하는 방법은?

```jsx
const arr = [1, 2, 2, 3];
```

### 7. 요소가 대단히 많은 배열을 순회할 경우 foreach vs. for 중 어떤 메서드를 사용하는 것이 좋은가? 이유는?

<a href="https://develogger.kro.kr/blog/LKHcoding/66">참고자료: foreach 메서드 vs. for문</a>
<br/>
<a href ="https://velog.io/@zuyonze/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94%EC%97%90-%EB%8C%80%ED%95%9C-%EC%9D%98%EB%AC%B8-glk00t4bxk">참고자료: 자바스크립트-성능-최적화</a>
