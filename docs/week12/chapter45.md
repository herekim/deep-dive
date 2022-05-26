---
sidebar_position: 51
---

# 45장 프로미스
자바스크립트는 비동기 처리를 위한 하나의 패턴으로 콜백 함수를 사용한다. 전통적인 콜백 패턴은 콜백 헬로 인해 가독성이 나쁘고 에러 처리가 어려우므로 한계가 있다. ES6에서 또다른 패턴으로 프로미스를 도입했다.

## 비동기 처리를 위한 콜백 패턴의 단점

### 콜백 헬

비동기 함수란 내부에 비동기로 동작하는 코드를 포함한 함수를 말한다. 비동기 함수를 호출하면 함수 내부의 비동기로 동작하는 코드가 완료되지 않았다 해도 기다리지 않고 즉시 종료된다. 즉, 비동기 함수 내부의 비동기로 동작하는 코드는 비동기 함수가 종료된 이후에 만료된다. 따라서 비동기 함수 내부의 비동기로 동작하는 코드에서 처리결과를 외부로 반환하거나 상위 스코프의 변수에 할당하면 기대한 대로 동작하지 않는다.

예를 들어, setTimeout 함수는 비동기 함수다. 그 이유는 콜백함수의 호출이 비동기로 동작하기 때문이다. setTimeout 함수를 호출하면 콜백 함수를 호출 스케줄링 한 타임, 타이머 id를 반환하고 즉시 종료된다.  비동기 함수인 setTIme의 비동기 함수는 setTime 함수가 종료된 이후에 호출된다. 내부의 콜백함수 안에서 상위 스코프의 변수에 값을 할당하거나 값을 반환하는것은 의미가 없다.

```jsx
let todos;

const get = url => {
	const xhr = new XMLHttpRequest();
	xhr.open(’GET’, url);
	xhr.send();

	xhr.onload = () => {
		if(xhr.status === 200) {
		//1. 상위 스코프의 변수에 할당
		todos = JSON.parse(xhr.response);
		} else {
			console.error(xhr.status);
		}
	}
}

get('https://jsonplaceholder.typicode.com/posts/1');
console.log(todos); //2. undefined
```

xhr.onload 이벤트 핸들러는 비동기 함수로 동작하므로 언제나 2번의 console.log가 종료한 이후에 호출된다. 따라서 2번의 시점에서는 아직 전역 변수 todos 에 서버의 응답 결과가 할당되기 이전이다. 

즉, xhr.onload 이벤트 핸들러에서 서버의 응답을 상위 스코프의 변수에 할당하면 **처리 순서가 보장되지 않는다.**

서버로부터 응답이 도착하면 xhr 객체에서 load 이벤트가 발생한다. 이때 xhr.onload 핸들러 프로퍼티에 바인딩한 이벤트 핸들러가 즉시 실행 되는것이 아니다. **xhr.onload 이벤트 핸들러는 load 이벤트가 발생하면 일단 태스크 큐에 저장되어 대기하다가, 콜 스택이 비면 그때 이벤트 루프에 의해 콜 스택으로 푸시되어 실행된다.** 이벤트 핸들러도 함수이므로 이벤트 핸들러의 평가 → 이벤트 핸들러의 실행 컨텍스트 생성 → 콜 스택에 푸시 → 이벤트 핸들러 실행 과정을 거친다.

따라서, xhr.onload 이벤트 핸들러가 실행되는 시점에는 콜 스택이 빈 상태여야 하므로 2번의 console.log는 이미 종료된 이후다.

이처럼 비동기 함수는 비동기 처리 결과를 외부에 반환할 수 없고, 상위 스코프의 변수에 할당할 수도 없다. **따라서 비동기 함수의 처리 결과 (서버의 응답 등)에 대한 후속 처리는 비동기 함수 내부에서 수행해야한다.** 이때 비동기 함수를 범용적으로 사용하기 위해 비동기 함수에 비동기 처리 결과에 대한 후속 처리를 수행하는 콜백 함수를 전달하는것이 일반이다.

```jsx
let todos;

const get = (url, successCallback, failureCallback) => {
	const xhr = new XMLHttpRequest();
	xhr.open(’GET’, url);
	xhr.send();

	xhr.onload = () ⇒ {
		if(xhr.status === 200) {
		// 서버의 응답을 콜백 함수에 인수로 전달하면서 후속 처리
		successCallback(JSON.parse(xhr.response));
		} else {
			//에러 처리
			failureCallback(xhr.status);
		}
	}
}

get('https://jsonplaceholder.typicode.com/posts/1');
console.log(todos); //2. undefined
```
이 때 후속처리를 수행하는 비동기 함수가 비동기 처리 결과를 가지고 또다시 비동기 함수를 호출해야한다면 중첩되어 복잡도가 높아지는 현상이 발생하는데 이를 콜백 헬이라한다.

### 에러 처리의 한계

```jsx
try {
	setTimeout(()= > {throw new Error(’Error!’); }, 1000);
} catch (e) {
	console.error(e);
}
```

위 예제에서 에러가 발생하면 catch 코드 블록에서 캐치되지 않는다.

비동기 함수인 setTimeout 함수가 호출 → 콜백 함수가 호출되는 것을 기다리지 않고 즉시 종료되어 콜스택에서 제거됨 → 타이머 만료 → 콜백 함수 태스크 큐 푸시 → 콜스택 비었을때 콜스택으로 푸시

**즉, 콜백 함수가 실행 될때 setTimeout 함수는 이미 콜스택에서 제거 된 상태다. 이것은 setTimeout 함수의 콜백 함수를 호출한 것이 setTimeout 함수가 아니라는 것을 의미한다.** 호출자 caller가 setTimeout 함수라면 콜스택의 현재 실행 중힌 실행 컨텍스트가 콜백 함수의 실행 컨텍스트일때 그 하위 실행 컨테스트는 setTimeout 함수여야 한다.

**에러는 호출자 방향으로 전파된다.** 따라서 setTimeout 함수의 콜백함수가 발생 시킨 에러는 catch 블록에서 캐치되지 않는다.
이러한 콜백 패턴의 문제들을 극복하기 위해 프로미스가 도입되었다.

## 프로미스의 생성

프로미스 생성자 함수를 new 연산자와 함께 호출해서 프로미스를 생성한다. ECMAScript 사양에 정의된 표준 빌트인  객체다.
Promise 생성자 함수는 비동기 처리를 수행할 콜백함수를 인수로 전달 받는데 이 콜백 함수는 resolve 와 reject 함수를 인수로 전달받는다.

```jsx
const promise = new Promsie((resolve,reject) => {
	if (true) {
		resolve();
	} else {
		reject();
	}
});
```

Promise 생성자 함수가 인수로 전달받은 **콜백 함수 내부에서 비동기 처리를 수행**한다. 이때 비동기 처리가 성공하면 콜백 함수로 전달받은 resolve 를 호출, 실패하면 reject 함수를 호출한다.

```jsx
const promiseGet = url = > {
	return new Promsie ((resolve, reject) = > {
		const xhr = new XMLHttpRequest();
		xhr.open(’GET’, url);
		xhr.send();

		xhr.onload = () = > {
			if (xhr.status === 200) {
				resolve(JSON.parse(xhr.response));
			} else {
				reject(new Error(xhr.status));
			}
		}
	})
};

promiseGet('https://...'); // 프로미스 반환
```

생성된 직후의 프로미스는 기본적으로 pending 상태다. 이후 비동기 처리가 수행되면 비동기 처리 결과에 따라 프로미스의 상태가 fulfilled 또는 rejected 로 변경된다.

- 비동기 처리 성공: resolve 함수 호출해 프로미스를 fulfilled 상태로 변경
- 비동기 처리 실패: reject 함수 호출해 프로미스를 rejected 상태로 변경

즉, 프로미스는 비동기 처리 상태와 처리 결과를 관리하는 객체다.

## 프로미스의 후속 처리 메서드

프로미스의 비동기 처리 상태가 변화하면 이에 따른 후속 처리를 해야한다. 이를 위해 프로미스는 후속 메서드 then, catch, finally를 제공한다.
프로미스의 비동기 처리 상태가 변화하면 후속 처리 메서드에 인수로 전달한 콜백함수가 선택적으로 호출된다. 이때 후속 처리 메서드의 콜백함수에 프로미스의 처리 결과가 인수로 전달된다. 모든 후속 처리 메서드는 프로미스를 반환하며, 비동기로 동작한다.

### Promise.prototype.then

then 메서드는 두개의 콜백 함수를 인수로 전달받는다.

1. 프로미스가 fulfilled 상태가 되면 호출 (resolve 함수가 호출된상태)
2. 프로미스가 rejected 상태가 되면 호출 (reject 함수가 호출된상태)

### Promise.prototype.catch

catch 메서드는 한개의 콜백함수를 인수로 전달 받는다. rejected 상태인 경우만 호출된다. then(undefined, onRejected)과 동일하게 동작.

### Promise.prototype.finally

한개의 콜백 함수를 인수로 전달받는다. finally 메서드의 콜백함수는 프로미스의 성공 또는 실패와 상관없이 무조건 한번 호출된다.
프로미스의 상태와 상관없이 공통적으로 수행해야할 처리내용이 있을때 유용하다.

```jsx
const promiseGet = url = > {
	return new Promsie ((resolve, reject) = > {
		const xhr = new XMLHttpRequest();
		xhr.open(’GET’, url);
		xhr.send();

		xhr.onload = () = > {
			if (xhr.status === 200) {
				resolve(JSON.parse(xhr.response));
			} else {
				reject(new Error(xhr.status));
			}
		}
	})
};
// 프로미스 반환
promiseGet('https://...')
.then(res => console.log(res))
.catch(err => console.error(err))
.finally(() => console.log('bye')); 
```

# 프로미스의 에러 처리

비동기 처리에서 발생한 에러는 then이나 catch에서 처리할수있다.
단, then 메서드의 **두번째 콜백 함수는 첫 번째 콜백 함수에서 발생한 에러를 캐치하지 못하고 코드가 복잡**해져서 가독성이 좋지않다.

```jsx
promiseGet('https://...').then(
	res = > console.xxx(res);, 
	err = > console.error(err)
); //두번째 콜백함수는 첫번째 콜백 함수에서 발생한 에러를 캐치할수없다.

promiseGet(’https://’)
.then(res => console.xxx(res))
.catch(err=> console.error(err)) 
//비동기 처리에서 발생한 에러 뿐 아니라 then 메서드 내부에서 발생한 에러까지 모두 캐치할 수 있다.
```
따라서 catch 메서드를 권장한다.

# 프로미스 체이닝

콜백 패턴의 콜백 헬 문제를 프로미스의 후속 처리 메서드 catch, then, finally로 해결할수있다.
후속 처리 메서드는 언제나 프로미스를 반환하므로 연속적으로 호출할 수 있다. 이를 **프로미스 체이닝**이라한다.

후속 처리 메서드의 콜백 함수가 프로미스가 아닌 값을 반환하더라도 **암묵적으로 resolve 또는 reject 하여 프로미스를 생성해 반환**한다.

다만 프로미스도 콜백 패턴을 사용하므로 콜백 함수를 사용하지 않는것은 아니다. 이 문제는 es8에서 도입된 async,await을 통해 해결할 수 있다. **async, await은 프로미스의 후속 처리 메서드 없이 마치 동기 처리처럼 프로미스가 처리 결과를 반환하도록 구현할 수 있다.**

## 프로미스의 정적 메서드

### Promise.resolve / Promise.reject

이미 존재하는 값을 래핑하여 프로미스를 생성하기 위해 사용한다.

```promise.resolve``` 메서드는 인수로 전달받은 값을 resolve하는 프로미스를 생성

```promise.reject``` 메서드는 인수로 전달받은 값을 reject하는 프로미스를 생성

### Promise.all

여러개의 비동기처리를 모두 병렬 처리할때 사용한다.

프로미스를 요소로 갖는 배열등의 이터러블을 인수로 전달받는다. 그리고 전달받은 모든 프로미스가 모두 fulfilled 상태가 되면 모든 처리 결과를 배열에 저장해 새로운 프로미스를 반환한다. **모든 프로미스가 fulfilled 상태가 되면 resolve 된 처리 결과를 모두 배열에 저장해 새로운 프로미스를 반환한다.** 이때 **처리 순서가 보장**된다. (첫번째 프로미스가 가장 나중에 fulfilled 상태가 되어도 첫 번째 프로미스부터 배열에 저장) 하나라도 rejected 상태가 되면 나머지 프로미스를 기다리지 않고 즉시 종료한다.

### Promise.race

Promise.all 메서드와 동일하게 프로미스를 요소로 갖는 배열등의 이터러블을 인수로 전달 받는다. 가장 먼저 fulfilled 상태가 된 프로미스의 처리 결과를 resolve 하는 새로운 프로미스를 반환한다. 하나라도 rejected 상태가 되면 에러를 reject 하는 새로운 프로미스를 즉시 반환한다.

### Promise.allSettled

프로미스를 요소로 갖는 배열등의 이터러블을 인수로 전달받는다. 모두 settled 상태가 되면 처리결과를 배열로 반환한다.

## 마이크로 태스크 큐

```jsx
setTimeout(() = > console.log(1), 0);

Promise.resolve()
	.then(() = > console.log(2))
	.then(() = > console.log(3));

//2
//3
//1
```

2 - 3 - 1 순으로 출력 되는 이유는 프로미스의 후속 처리 메서드의 콜백 함수는 태스크 큐가 아니라 **마이크로 태스크 큐**에 저장되기 때문이다.
마이크로 태스크 큐는 태스크 큐와는 별도의 큐다. 프로미스의 후속 처리 메서드의 콜백 함수 외에 비동기 함수의 콜백 함수나 이벤트 핸들러는 태스크 큐에 일시저장된다.
**마이크로 태스크 큐는 태스크 큐보다 우선순위가 높다.**

## fetch

```fetch``` 함수는 XMLHttpRequest 객체와 마찬가지로 HTTP 요청 전송 기능을 제공하는 클라이언트 사이드 Web API다. fetch 함수는 XMLHttpRequest 객체보다 사용법이 간단하고 프로미스를 지원하기때문에 비동기 처리를 위한 콜백 패턴의 단점에서 자유롭다.

fetch 함수에는 HTTP 요청을 전송한 url 과 http 요청 메서드, 헤더, 페이로드등을 설정한 객체를 전달한다.

fetch 함수는 **HTTP 응답을 나타내는 response 객체를 래핑한 promise 객체를 반환**한다. 그러므로 후속 처리 메서드 ```then``` 을 통해 프로미스가 resolve한 response 객체를 전달받을 수 있다.

fetch 함수가 반환하는 프로미스는 기본적으로 404 not found나 500 internal server error와 같은 HTTP에러가 발생해도 에러를 reject 하지 않고 불리언 타입의 ok 상태를 false 로 설정한 response 객체를 resolve 한다. 오프라인등의 네트워크 장애나 cors 에러에 의해 요청이 완료되지 못한 경우에만 reject 한다.

따라서 ***불리언 타입의 ok 상태를 확인해 명시적으로 에러를 처리할 필요가 있다.***

```jsx
fetch (wrongUrl)
	.then(res = > {
		if(!res.ok) throw new Error(response.statusText);
		return response.json();
})
```

참고로 ```axios```는 모든 HTTP 에러를 reject하는 프로미스를 반환한다. 따라서 모든 에러를 catch 에서 처리할 수 있어 편리하다. 또 인터셉터, 요청 설정등 더 다양한 기능을 지원한다.