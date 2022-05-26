---
sidebar_position: 52
---

# 46장 제너레이터와 async/await

## 제너레이터란?

ES6에서 도입된 ```generator```는 코드 블록의 실행을 일시 중지했다가 필요한 시점에 재개할 수 있는 특수한 함수다.

1. 제너레이터 함수는 함수 호출자에게 함수 실행의 제어권을 양도할 수 있다. 함수 제어권을 함수가 독점하는 것이 아니라 함수 호출자에게 양도할 수 있다는것을 의미.
2. 제너레이터 함수는 함수 호출자와 함수의 상태를 주고받을 수 있다. 
3. 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다. 일반 함수처럼 함수 코드를 실행하는 것이 아니라 **이터러블이면서 동시에 이터레이터인 제너레이터 객체를 반환한다.**

46.2 제너레이터 함수의 정의

```function*``` 키워드로 선언한다. 그리고 하나 이상의 yield 표현식을 포함한다. 나머지는 일반 함수 정의하는 방법과 같다.

```jsx
function* genDecFunc() {
	yield 1;
}
```
화살표 함수로는 정의할 수 없다. new 연산자와 함께 생성자 함수로 호출할 수 없다.

## 제너레이터 객체

제너레이터 함수를 호출하면 일반 함수처럼 함수 코드 블록을 실행하는 것이 아니라 제너레이터 객체를 생성해 반환한다. 제너레이터 함수가 반환한 제너레이터 객체는 이터러블이면서 동시에 이터레이터다.

즉, Symbol.iterator 메서드를 상속받는 이터러블이면서 value, done 프로퍼티를 갖는 이터레이터 리절트 객체를 반환하는 next 메서드를 소유하는 이터레이터다.

제너레이터 객체는 next 메서드와 return, throw 메서드를 갖는다.

- ```next``` 메서드 호출하면 제너레이터 함수의 **yield 표현식까지 코드블록을 실행**하고 yield 된 값을 value 프로퍼티 값으로, false를 done 프로퍼티 값으로 갖는 이터레이터 리절트 객체를 반환
- ```reutrn``` 메서드를 호출하면 인수로 전달받은 값을 value 프로퍼티 값으로, true를 done 값으로 갖는 이터레이터 리절트 객체를 반환
- ```throw``` 메서드를 호출하면 인수로 전달받은 에러를 발생시키고 undefined를 value 값으로, true를 done 값으로 갖는 이터레이터 리절트 객체를 반환

```jsx
function* genDecFunc() {
	try {
		yield 1;
		yield 2;
		yield 3;
	} catch(e) {
		console.error(e)
	}
}

console.log(generator.next());// {value:1, done: false}
console.log(generator.return('END'); // {value: 'END', done: true}
console.log(generator.throw('error')); // {value: undefined, done: true}
```

## 제너레이터의 일시 중지와 재개

제너레이터는 ```yield``` 키워드와 ```next``` 메서드를 통해 실행을 일시 중지 했다가 필요한 시점에 다시 재개할 수 있다.
제너레이터는 함수 호출자에게 제어권을 양도하여 필요한 시점에 함수 실행을 재개할 수 있다.

제너레이터 객체의 next 메서드를 호출하면 제너레이터 함수의 코드블록을 실행한다. 단, 일반함수처럼 한번에 **코드 블록의 모든 코드를 일괄 실행하는 것이 아니라 yield 표현식까지만 실행**한다. yield 키워드는 제너레이터 함수의 실행을 일시 중지시키거나 yield 키워드 뒤에 오는 표현식의 평가 결과를 제너레이터 함수 호출자에게 반환한다.

```jsx
function* genDecFunc() {
	try {
		yield 1;
		yield 2;
		yield 3;
	} catch(e) {
		console.error(e)
	}
}

//제너레이터 객체 반환
const generator = getDecFunc();

//value 프로퍼티: 첫 번째 yield 표현식에서 yield 된 값 1이 할당
//done 프로퍼티: 제너레이터 함수가 끝까지 실행되었는지를 나타내는 false가 할당
console.log(generator.next()); // {value: 1, done: false}

//다시 next 메서드를 호출하면 두번째 yield 표현식까지 실행되고 일시 중지

//남은 yield 표현식이 없을때 제너레이터 함수의 마지막까지 실행 - {value:undefined, done: true} 반환
```

제너레이터 객체의 next 메서드를 호출하면 yield 표현식까지 실행되고 일시 중지된다. 이때 함수의 제어권이 호출자로 양도 yield 된다.

마지막 yield 표현식까지 실행되고 더이상 없을때 next 메서드가 호출되면 제너레이터 함수의 반환값이 value 프로퍼티에 할당되고 done 프로퍼티는 true가 할당된다.

제너레이터 객체의 next 메서드에 전달한 인수는 제너레이터 함수의 yield 표현식을 할당받는 변수에 할당된다. **yield 표현식을 할당받는 변수에 yield 표현식의 평가 결과가 할당되지 않는것에 주의해야한다.**

```jsx
function* genFunc() {
	const x = yield 1;
	const y = yield (x + 10);
	return x + y;
}

const generator = genFunc(0);
let res = generator.next(); //처음 next 메서드에는 인수 X

//두번째 next 메서드에 인수로 전달한 10은 x변수에 할당
//이터레이터 리절트 객체의 value 프로퍼티에 두번째 yield된 값 20 할당
res = generator.next(10);
console.log(res); // {value: 20, done: false}

//세번째 next 메서드에 인수로 전달한 20은 y 변수에 할당
//value 프로퍼티에 제너레이터 함수의 반환값 30 할당
res = generator.next(20);
console.log(res);
```

함수 호출자는 next 메서드를 통해 yield 표현식까지 함수를 실행시켜 제너레이터 객체가 관리하는 상태를 꺼내올 수 있고, next 메서드에 인수를 전달해서 제너레이터 객체에 상태 (yield표현식을 할당받는 변수)를 밀어넣을 수 있다. 이러한 특징을 이용하여 비동기 처리를 동기 처리처럼 구현할 수 있다.

## 제너레이터의 활용

### 이터러블의 구현

제너레이터 함수의 ```next```, ```yield```의 특성을 사용하면 비동기 처리를 동기 처리처럼 구현할 수 있다.

```jsx
const async = generatorFunc => {
	const generator = generatorFunc(); //2
	
	const onResolved = arg => {
		const result = generator.next(arg); //5

		return result.done
			? result.value //9
			: result.value.then(res => onResolved(res)); //7
	}

	return onResolved; //3
}

(async (function* fetchTodo() { // 1
	const url = 'https://...';

	const response = yield fetch(url); //6
	const todo = yield response.json(); //8
	console.log(todo);
})()); //4
```
## async/await

ES8에서는 제너레이터보다 간단하고 가독성 좋게 비동기 처리를 동기 처리처럼 동작하도록 구현할 수 있는 ```async/await``` 가 도입되었다.

```async/await``` 는 프로미스를 기반으로 동작한다. ```async/await```를 사용하면 프로미스의 then, catch, finally 후속 처리 메서드에 콜백함수를 전달해서 비동기 처리 결과를 후속 처리할 필요 없이 **마치 동기 처리처럼 프로미스를 사용할 수 있다.**

즉, 프로미스의 후속 처리 메서드 없이 마치 동기 처리처럼 프로미스가 처리 결과를 반환하도록 구현할 수 있다.

- async 함수

**await 키워드는 반드시 async 함수 내부에서 사용**해야한다. async 함수는 async 키워드를 사용해 정의하며 **언제나 프로미스를 반환**한다. 명시적으로 프로미스를 반환하지 않더라고 암묵적으로 반환값을 resolve하는 프로미스를 반환한다.

클래스의 constructor 메서드는 인스턴스를 반환해야 하기때문에 async 메서드가 될 수 없다.

- await 키워드

await 키워드는 프로미스가 settled 상태 (비동기처리가 수행된 상태)가 될때까지 대기하다가 **settled 상태가 되면 프로미스가 resolve한 처리 결과를 반환**한다. 반드시 프로미스 앞에서 사용해야한다.

```jsx
const getGithubUserName = async (id) => {
	
	//1. fetch함수가 http 요청에 대한 응답이 도착해서 반환한 프로미스가 settled 상태가 될때까지 대기
	//이후 프로미스가 settled 상태가 되면 resolve한 처리 결과가 res 변수에 할당
	const res = await fetch(`https://…${id}`); 

	//2.
	const { name } = await res.json(); 
	console.log(name);
};

getGithubUserName(’ungmo2’);

```

여러개의 비동기 처리가 서로 연관이 없이 개별적으로 수행된다면 await 키워드를 사용할 필요가 없다. 순서가 보장되어야 할때 사용하도록 한다.

### 에러 처리

에러는 호출자 방향으로 전파된다. 비동기 함수의 콜백 함수를 호출한것은 비동기 함수가 아니기 때문에 ```try…catch``` 문을 사용해 에러를 캐치할 수 없다.

```jsx
try {
	setTimeout(() = > {throw new Error(’error’); }, 1000);
} catch (e) {
	//에러를 캐치하지 못한다.
	console.error(’캐치한 에러', e);
}
```

**```async/await```에서 에러 처리는 ```try…catch``` 문을 사용할 수 있다.** 콜백 함수를 인수로 전달받는 비동기 함수와는 달리 프로미스를 반환하는 비동기 함수는 명시적으로 호출할 수 있기 때문에 호출자가 명확하다.

```jsx
const foo = async () => {
	try {
		const response = await fetch(wrongUrl);
		const data = await response.json();
	} catch(e) {
		console.error(’캐치한 에러', e);
	}
}

```

위에서 ```catch``` 문은 **http 통신에서 발생한 네트워크 에러뿐 아니라 try 코드 블록 내의 모든 문에서 발생한 일반적인 에러까지 모두 캐치**한다.

async 함수내에서 catch 문을 사용해서 에러 처리를 하지 않으면 async 함수는 발생한 에러를 reject 하는 프로미스를 반환한다. 따라서 async 함수를 호출하고 catch 후속 처리 메서드를 사용해 에러를 캐치할 수도 있다.