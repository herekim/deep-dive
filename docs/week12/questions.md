---
sidebar_position: 56
---
# Questions

## 1. 아래 예제 끝 console.log(todos)에서 undefined가 출력되는 이유는?

```jsx
let todos;

const get = url => {
    const xhr = new XMLHttpRequest();
    xhr.open(’GET’, url);
    xhr.send();

    xhr.onload = () => {
        if(xhr.status === 200) {
        todos = JSON.parse(xhr.response);
        } else {
            console.error(xhr.status);
        }
    }
}

get('https://jsonplaceholder.typicode.com/posts/1');
console.log(todos); //2. undefined
```

## 2. 아래 예제에서 2 - 3 - 1로 출력되는 이유는 프로미스 후속 처리 메서드의 콜백 함수는 태스크 큐가 아니라 __ ? __에 저장되기 때문이다. ? 에 들어가는 단어는?

```jsx
setTimeout(() = > console.log(1), 0);

Promise.resolve()
    .then(() = > console.log(2))
    .then(() = > console.log(3));

//2
//3
//1
```

## 3. 아래 코드의 단점은?

```jsx
promiseGet('https://...').then(
    res = > console.xxx(res);, 
    err = > console.error(err)
);
```

## 4. 프로미스의 then, catch, finally 후속 처리 메서드와 async/await의 다른 점은?

## 5. 비동기 함수의 콜백 함수를 호출한것은 비동기 함수가 아니기 때문에 ```try…catch``` 문을 사용해 에러를 캐치할 수 없다. 그 이유는 에러는 ? 방향으로 전파하기 때문이다.

## 6. Error 생성자 함수와 new 연산자로 에러 객체를 생성하면 에러가 발생한다. O or X