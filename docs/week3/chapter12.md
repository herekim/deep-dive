---
sidebar_position: 12
---

# 12장 연산자

## 12.1 함수란?

```jsx
// f(x,y) = x + y
function add(x, y) {
    return x + y;
}

// f(2, 5) = 7
add(2, 5); // 7
```

프로그래밍 언어의 함수는 일련의 과정을 문으로 구현하고 코드 블록으로 감싸서 하나의 실행 단위로 정의한 것이다.
함수는 입력을 받아서 출력을 내보내는데, 함수 내부로 입력을 전달받는 변수를 매개변수(parameter), 입력을 인수(argument), 출력을 반환값(return value) 이라고 한다.
또한 함수는 값이며, 여러 개 존재할 수 있으므로 특정 함수를 구별하기 위해 식별자인 함수 이름을 사용할 수 있다.

```jsx
// 함수 정의
function add(x, y) {
    return x + y;
}
```

함수는 정의를 통해 생성한다.

```jsx
// 함수 호출
var result = add(2, 5);

console.log(result); // 7
```

함수 정의만으로 함수가 실행되는 것은 아니다.
인수를 매개변수를 통해 함수에 전달하면서 함수의 실행을 명시적으로 지시해야 한다. 이를 함수 호출이라고 한다. 함수를 호출하면 코드 블록에 담긴 문들이 일괄적으로 실행되고 실행 결과인 반환값을 반환한다.

## 12.2 함수를 사용하는 이유

-   코드의 재사용성
-   코드의 신뢰성
-   코드의 가독성
-   코드의 유지보수 편의성

## 12.3 함수리터럴

```jsx
// 변수에 함수 리터럴을 할당
var f = function add(x, y) {
    return x + y;
};
```

### 12.3.1 함수리터럴 구성요소

#### 함수이름

-   함수 이름은 식별자이기 때문에 식별자 네이밍 규칙을 준수해야 한다.
-   함수 이름은 함수 몸채 내에서만 참조할 수 있는 식별자다
-   함수 이름은 생략할 수 있다. 이름이 있는 함수를 기명함수, 이름이 없는 함수를 익명함수라 한다.

#### 매개변수(Parameter)목록

-   0개 이상의 매개변수를 소괄호로 감싸고 쉼표로 구분한다.
-   각 매개변수에는 함수를 호출할 때 지정한 인수(argument)가 순서대로 할당된다.
-   매개변수는 함수 몸체 내에서 변수와 동일하게 취급되기 때문에 매개변수도 변수와 마찬가지로 식별자 네이밍 규칙을 준수해야 한다.

#### 함수 몸체

-   함수가 호출되었을 때 일괄적으로 실행될 문들을 하나의 실행단위로 정의한 코드 블록.
-   함수 몸체는 함수 호출에 의해 실행됨.

리터럴은 값을 생성하기 위한 표기법이기 때문에 함수 리터럴도 평가되어 값을 생성하고, 이 값은 객체이다.
하지만 함수는 일반 객체와는 다르다. 일반 객체는 호출할 수 없지만 함수는 호출할 수 있다. 그리고 일반 객체에는 없는 함수 객체만의 고유한 프로퍼티를 갖는다.

## 12.4 함수 정의

함수를 호출하기 이전에
인수(argument)를 전달받을 매개변수(parameter)와 실행할 문들, 그리고 반환할 값(return value)을 지정하는 것을 말한다.

> 변수 선언과 함수 정의변수는 '선언(declaration)'한다고 하지만,
> 함수는 '정의(definition)'한다고 표현한다.

함수 선언문이 평가되면⇒ 식별자가 암묵적으로 생성되고 ⇒함수 객체가 할당된다.
따라서 ECMAScript 사양에서도 변수에는 선언, 함수에는 정의라고 표현한다.

>

### 1.4.1 함수 선언문

```jsx
// 함수 선언문
function add(x, y) {
    return x + y;
}

// 함수 참조
console.dir(add); // f add(x, y)

// 함수 호출
console.log(add(2, 5)); // 7
```

함수 선언문은 함수 리터럴과 형태가 동일.
하지만 함수 선언문에서는 함수 이름을 생략할 수 없다.

```jsx
function (x, y) {
  return x + y;
}

// SyntaxError: Function statements require a function name
```

함수 선언문은 [표현식이 아닌 문](https://velog.io/@najiexx/JavaScript-%EB%B3%80%EC%88%98-%ED%91%9C%ED%98%84%EC%8B%9D-%EB%AC%B8#26-%ED%91%9C%ED%98%84%EC%8B%9D%EC%9D%B8-%EB%AC%B8%EA%B3%BC-%ED%91%9C%ED%98%84%EC%8B%9D%EC%9D%B4-%EC%95%84%EB%8B%8C-%EB%AC%B8)이다.
크롬 개발자 도구의 콘솔에서 함수 선언문을 실행하면 완료 값 `undefined`가 출력된다.
함수 선언문이 만약 표현식인 문이라면
완료 값 `undefined` 대신
표현식이 평가되어 생성된 함수가 출력되어야 한다.

```jsx
var add = function add(x, y) {
    return x + y;
};

console.log(add(2, 5)); // 7
```

자바스크립트 엔진은 코드의 문맥에 따라 동일한 함수 리터럴을
표현식이 아닌 문인 함수 선언문으로 해석하는 경우와
표현식인 문인 함수 리터럴 표현식으로 해석하는 경우가 있다.

예를 들어, `{}`은 블록문일 수도 있고 객체 리터럴일 수도 있다. 
`{}`이 단독으로 존재하면 자바스크립트 엔진은 `{}`을 블록문으로 해석한다.
하지만 `{}`이 할당 연산자의 우변에서 피연산자로 사용되면
자바스크립트 엔진은 `{}`을 객체 리터럴로 해석한다.

이처럼 동일한 코드도 코드의 문맥에 따라 해석이 달라질 수 있다.

```jsx
function foo() {
    console.log("foo");
}
foo(); // foo

(function bar() {
    console.log("bar");
});
bar(); // ReferenceError: bar is not defined
```

단독으로 사용된 함수 리터럴(f00)은 함수 선언문으로 해석.
하지만 이를 연산자 `()`내에 있는 함수 리터털(bar)은 함수 선언문으로 해석되지 않고 함수 리터럴 표현식으로 해석.

함수 몸체 외부에서는 함수 이름으로 함수를 참조할 수 없으므로
함수 몸체 외부에서는 함수 이름으로 함수를 호출할 수 없다. 즉, 함수를 가리키는 식별자가 없는 것.
따라서 위 예제에서 `bar` 함수는 함수 몸채내에서만 참소할 수 있는 식별자이므로 호출할 수 없다.

하지만 위 예제에서 함수 선언문으로 정의된 함수는 `foo`라는 이름으로 호출할 수 있다. `foo`는 함수 몸체 내부에서만 유효한 식별자인 함수이름이므로 `foo`로 함수를 호출할 수 없어야 한다. `foo`라는 이름으로 함수를 호출하려면 `foo`는 함수 이름이 아니라 함수 객체를 가리키는 식별자여야 한다.

하지만 자바스크립트 엔진은 함수 선언문을 해석해 함수 객체를 생성한다.
이때 함수 이름은 함수 몸체 내부에서만 유효한 식별자이므로
함수 이름과는 별도로 생성된 함수 객체를 가리키는 식별자가 필요하다.

함수 객체를 가리키는 식별자가 없으면
생성된 함수 객체를 참조할 수 없으므로 호출할 수도 없다.

따라서 자바스크립트 엔진은 생성된 함수를 호출하기 위해
함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고, 거기에 함수 객체를 할당한다.

```jsx
var add = function add(x, y) {
    return x + y;
};

console.log(add(2, 5)); // 7
```

함수는 함수 이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로 호출한다.
즉, 함수 선언문으로 생성한 함수를 호출한 것은 함수 이름 `add`가 아니라
자바스크립트 엔진이 암묵적으로 생성한 식별자 `add`인 것.

### 1.4.2 함수 표현식

자바스크립트의 함수는 값처럼 변수에 할당할 수도 있고 프로퍼티 값이 될 수도 있으며 배열의 요소가 될 수도 있다. 이처럼 값이 성질을 갖는 객체를 **일급 객체**라고 한다.함수는 일급 객체이므로 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있다. 이러한 함수 정의 방식을 **함수 표현식**이라고 한다.

```jsx
// 함수 표현식
// 함수 선언문으로 정의한 `add` 함수를 함수 표현식으로 바꿔서 정의
var add = function (x, y) {
    return x + y;
};

console.log(add(2, 5)); // 7
```

함수 리터럴의 함수 이름은 생략할 수 있다. 이러한 함수를 **익명 함수**라고 한다. 함수 표현식의 함수 리터럴은 함수 이름을 생략하는 것이 일반적.

```jsx
// 기명 함수 표현식
var add = function foo(x, y) {
    return x + y;
};

// 함수 객체를 가리키는 식별자로 호출
console.log(add(2, 5)); // 7

console.log(foo(2, 5)); // ReferenceError: foo is not defined
```

### 1.4.3 함수 생성 시점과 함수 호이스팅

```jsx
// 함수 참조
console.dir(add); // f add(x, y)
console.dir(sub); // undefined

// 함수 호출
console.log(add(2, 5)); // 7
console.log(sub(2, 5)); // TypeError: sub is not a function

// 함수 선언문
function add(x, y) {
    return x + y;
}

// 함수 표현식
var sub = function (x, y) {
    return x - y;
};
```

함수 선언문으로 정의한 함수는 함수 선언문 이전에 호출할 수 있다.
하지만 함수 표현식으로 정의한 함수는 함수 표현식 이전에 호출할 수 없다.
이는 함수 선언문으로 정의한 함수와 함수 표현식으로 정의한 함수의 생성 시점이 다르기 때문.

함수 선언문은 코드가 한 줄씩 순차적으로 실행되는 시점인 런타임 이전에 자바스크립트 엔진에 의해 먼저 실행.
즉, 런타임에는 이미 함수 객체가 생성되어 있고
함수 이름과 동일한 식별자에 할당까지 완료된 상태.
따라서 함수 선언문 이전에 함수를 참조할 수 있으며 호출할 수도 있다.
이처럼 함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트의 고유의 특징을
 **함수 호이스팅**이라고 한다.

함수 표현식은 변수에 할당되는 값이 함수 리터럴인 문.
따라서 함수 표현식은 변수 선언문과 변수 할당문을 한 번에 기술한 축약 표현과 동일하게 동작한다.
변수 선언은 런타임 이전에 실행되어 `undefined`로 초기화되지만
변수 할당문의 값은 할당문이 실행되는 시점, 즉 런타임에 평가되므로
함수 표현식의 함수 리텉럴도 할당문이 실행되는 시점에 평가되어 함수 객체가 .

따라서 함수 표현식으로 함수를 정의하면
함수 호이스팅이 발생하는 것이 아니라 변수 호이스팅이 발생한다.

함수 표현식 이전에 함수를 참조하면 `undefined`로 평가.
따라서 이때 함수를 호출하면 `undefined`를 호출하는 것과 마찬가지이므로 타입 에러가 발생한다.
따라서 함수 표현식으로 정의한 함수는
반드시 함수 표현식 이후에 참조 또는 호출해야 한다.

### 1.4.4 Function 생성자 함수

자바스크립트가 기본 제공하는 빌트인 함수인 `Function`생성자 함수에 매개변수 목록과 함수 몸체를 문자열로 전달하면서 `new` 연산자와 함께 호출하면 함수 객체를 생성해서 반환한다.

```jsx
var add = new Function("x", "y", "return x + y");

console.log(add(2, 5)); // 7
```

`Function` 생성자 함수로 생성한 함수는 함수 선언문이나 함수 표현식으로 생성한 함수와 다르게 동작한다.

```jsx
var add1 = (function () {
    var a = 10;
    return function (x, y) {
        return x + y + a;
    };
})();

console.log(add1(1, 2)); // 13

var add2 = (function () {
    var a = 10;
    return new Function("x", "y", "return x + y + a;");
})();

console.log(add2(1, 2)); // ReferenceError: a is not defined
```

### 1.4.5 화살표 함수

ES6에서 도입된 화살표 함수는 `function`키워드 대신 화살표`=>`를 사용해 좀 더 간략한 방법으로 함수를 선언할 수 있스빈다. 화살표 함수는 항상 익명 함수로 정의한다.

```jsx
const add = (x, y) => x + y;
console.log(add(2, 5)); // 7
```

화살표 함수는 기존의 함수보다 표현만 간략한 것이 아니라 내부 동작 또한 간략화되어 있다. 화살표 함수는 생성자 함수로 사용할 수 없으며, 기존 함수와 this 바인딩 방식이 다르고, prototype 프로퍼티가 없으며 arguments 객체를 생성하지 않음.

## 1.5 함수 호출

함수는 함수를 가리키는 식별자와 한 쌍의 소괄호인 함수 호출 연산자로 호출한다. 함수 호출 연산자 내에는 0개 이상의 인수를 쉼표로 구분해서 나열한다. 함수를 호출하면 현재의 실행 흐름을 중단하고 호출된 함수로 실행 흐름을 옮깁니다. 이때 매개변수에 인수가 순서대로 할당되고 함수 몸체의 문들이 실행되기 시작한다.

### 1.5.1 매개변수와 인수

함수를 실행하기 위해 필요한 값을 함수 외부에서 함수 내부로 전달할 필요가 있는 경우, 매개변수를 통해 인수를 전달한다. 인수는 값으로 평가될 수 있는 표현식이어야 한다. 인수는 함수를 호출할 때 지정하며, 개수와 타입에 제한이 없다.

```jsx
function add(x, y) {
    return x + y;
}

var result = add(1, 2);
```

매개변수는 함수를 정의할 때 선언하며, 함수 몸체 내부에서 변수와 동일하게 취급. 함수가 호출되면 함수 몸채 내에서 암묵적으로 매개변수가 생성되고 일반 변수와 마찬가지로 `undefined`로 초기화된 이후 인수가 순서대로 할당.

```jsx
function add(x, y) {
    console.log(x, y); // 2 5
    return x + y;
}

add(2, 5);

// add 함수의 매개변수 x, y는 함수 몸체 내부에서만 참조할 수 있음
console.log(x, y); // ReferenceError: x is not defined
```

함수는 매개변수의 개수와 인수의 개수가 일치하는지 체크하지 않음. 인수가 부족해서 인수가 할당되지 않은 매개변수의 값은 `undefined`.

```jsx
function add(x, y) {
    return x + y;
}

console.log(add(2)); // NaN
```

매개변수보다 인수가 더 많은 경우 초과된 이수는 무시.

```jsx
function add(x, y) {
    return x + y;
}

console.log(add(2, 5, 10)); // 7
```

### 1.5.2 인수 확인

```jsx
function add(x, y) {
    return x + y;
}
```

위 함수는 코드상으로 어떤 타입의 인수를 전달해야 하는지, 어떤 타입의 값을 반환하는지 명확하지 않음.

```jsx
function add(x, y) {
    return x + y;
}

console.log(add(2)); // NaN
console.log(add("a", "b")); // 'ab'
```

자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않으며, 매개변수의 타입을 사전에 지정할 수 없다.따라서 함수를 정의할 때 적절한 인수가 전달되었는지 확인할 필요가 있다.

```jsx
function add(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        // 매개변수를 통해 전달된 인수의 타입이 부적절한 경우 에러 발생
        throw new TypeError("인수는 모두 숫자 값이어야 한다.");
    }
    return x + y;
}

console.log(add(2)); // TypeError: 인수는 모두 숫자 값이어야 한다.
console.log(add("a", "b")); // TypeError: 인수는 모두 숫자 값이어야 한다.
```

```jsx
function add(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // 3
console.log(add(1)); // 1
console.log(add()); // 0
```

ES6에서 도입된 매개변수 기본값을 사용하면 함수 내에서 수행하던 인수 체크 및 초기화를 간소화할 수 있다. 매개변수 기본값은 매개변수에 인수를 전달하지 않았을 경우와 `undefined`를 전달한 경우에만 유효한다.

```jsx
function add(a = 0, b = 0, c = 0) {
  return a + b + c;
}

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // 3
console.log(add(1)); // 1
console.log(add())); // 0
```

### 1.5.3 매개변수의 최대 개수

ECMAScript 사양에서는 매개변수의 최대 개수에 대해 명시적으로 제한하고 있지 않음.

매개변수는 순서에 의미가 있다. 따라서 매개변수가 많아지면 함수를 호출할 때 전달해야 할 인수의 순서를 고려해야 한다. 이는 함수의 사용법을 이해하기 어렵게 만들고 실수를 발생시킬 가능성을 높. 또한 매개 변수의 개수나 순서가 변경되면 함수의 호출 방법도 바뀌므로 함수를 사용하는 코드 전체가 영향을 받아 유지보수성이 나빠집니다.

이상적인 함수는 한 가지 일만 해야 하며 가급적 작게 만들어야 한다.

### 1.5.4 반환문

함수는 `return`키워드와 표현식으로 이루어진 반환문을 사용해 실행 결과를 함수 외부로 반환(return)할 수 있다.

```jsx
function multiply(x, y) {
    return x * y; // 반환문
}

var result = multiply(3, 5);
console.log(result); // 15
```

`multiply`함수는 두 개의 인수를 전달받아 곱한 결과를 `return`키워드를 사용해 반환한다. 함수는 `return`키워드를 사용해 자바스크립트에서 사용 가능한 모든 값을 반환할 수 있다.

반환문은 두 가지 역할을 한다. 첫째, 반환문은 함수의 실행을 중단하고 함수 몸체를 빠져나갑니다. 따라서 반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시한다.

```jsx
function multiply(x, y) {
    return x * y;
    console.log("실행되지 않는다.");
}

console.log(multiply(3, 5)); // 15
```

둘째, 반환문은 `return` 키워드 뒤에 오는 표현식을 평가해 반환한다. `return` 키워드 뒤에 반환값으로 사용할 표현식을 명시적으로 지정하지 않으면 `undefined`가 반환.

```jsx
function foo() {
    reutn;
}

console.log(foo()); // undefined
```

반환문은 생략할 수 있다. 이때 함수는 함수 몸체의 마지막 문까지 실행한 후 암묵적으로 `undefined`를 반환한다.

```jsx
function foo() {}

console.log(foo()); // undefined
```

`return` 키워드와 반환값으로 사용할 표현식 사이에 줄바꿈이 있으면 세미콜론 자동 삽입 기능에 의해 세미콜론이 추가되어 다음과 같이 의도치 않은 결과가 발생할 수 있다.

```jsx
function multiply(x, y) {
    reutn; // return 키워드와 반환값 사이에 줄바꿈이 있으면 세미콜론 자동 삽입 기능에 의해 세미콜론이 추가됨
    x * y;
}

console.log(multiply(3, 5)); // undefined
```

반환문은 함수 몸체 내부에서만 사용할 수 있다. 전역에서 반환문을 사용하면 문법 에러가 발생한다.

```jsx
<!DOCTYPE html>
<html><body><script>
      return; // SyntaxError: Illegal return statement
    </script></body></html>
```

## 1.6 참조에 의한 전달과 외부 상태의 변경

매개변수는 함수 몸체 내부에서 변수와 동일하게 취급되므로
타입에 따라
값에 의한 전달, 참조에 의한 전달 방식으로 동작한다.

```jsx
// 매개변수 primitive는 원시 값을 전달받고, 매개변수 obj는 객체를 전달받음
function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = "Kim";
}

var num = 100;
var person = { name: "Lee" };

console.log(num); // 100
console.log(person); // {name: 'Lee'}

// 원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달
changeVal(num, person);

console.log(num); // 100

console.log(person); // {name: "Kim"}
```

`changeVal` 함수는 매개변수를 통해 전달받은 원시 타입 인수와 객체 타입 인수를 함수 몸체에서 변경한다.
원시 타입 인수를 전달받은 매개변수 `primitive`의 경우, 원시 값은 변경 불가능한 값이므로 직접 변경할 수 없기 때문에
재할당을 통해 할당된 원시 값을 새로운 원시 값으로 교체했고,
객체는 변경 가능한 값이므로 직접 변경할 수 있기 때문에 재할당 없이 직접 할당된 객체를 변경.

이때 원시 타입 인수는 값 자체가 복사되어 매개변수에 전달되기 때문에 함수 몸체에서 그 값을 변경해도 원본은 훼손되지 않음. 하지만 객체 타입 인수는 참조 값이 복사되어 매개변수에 전달되기 떄문에 함수 몸체에서 참조 값을 통해 객체를 변경할 경우 원본이 훼손.

이처럼 함수 외부 상태(`person`)를 변경하면 상태 변화를 추적하기 어려워지는데, 이는 코드의 복잡성을 증가시키고 가독성을 해치게 됨.

이러한 문제의 해결 방법 중 하나는 객체를 불변 객체로 만들어 사용하는 것. 객체의 복사본을 새롭게 생성하는 비용은 들지만 객체를 마치 원시 값처럼 변경 불가능한 값으로 동작하게 만드는 것. 이를 통해 객체의 상태 변경을 원천봉쇄하고 객체의 상태 변경이 필요한 경우에는 깊은 복사를 통해 새로운 객체를 생성하고 재할당을 통해 교체한다. 이를 통해 외부 상태가 변경되는 부수 효과를 제거할 수 있음.

## 1.7 다양한 함수 형태

### 1.7.1 즉시 실행 함수

함수 정의와 동시에 즉시 호출되는 함수를 **즉시 실행 함수**라고 한다. 즉시 실행 함수는 단 한 번만 호출되며 다시 호출할 수 없다.

```jsx
// 익명 즉시 실행 함수
(function () {
    var a = 3;
    var b = 5;
    return a * b;
})();
```

즉시 실행 함수는 함수 이름이 없는 익명 함수를 사용하는 것이 일반적
그룹 연산자 `(...)` 내의 기명함수는 함수 선언문이 아니라
함수 리터럴로 평가되며 함수 이름은 함수 몸체에서만 참조할 수 있는 식별자이므로
즉시 실행 함수를 다시 호출할 수는 없다.

```jsx
// 기명 즉시 실행 함수
(function foo() {
    var a = 3;
    var b = 5;
    return a * b;
})();

foo(); // ReferenceError: foo is not defined
```

즉시 실행 함수도 일반 함수처럼 값을 반환할 수 도있고, 인수를 전달할 수도 있다.

```jsx
var res = (function () {
    var a = 3;
    var b = 5;
    return a * b;
})();

console.log(res); // 15

res = (function (a, b) {
    return a * b;
})(3, 5);

console.log(res); // 15
```

### 1.7.2 재귀함수

함수가 자기 자신을 호출하는 것을 **재귀 호출**이라고 한다. **재귀 함수**는 자기 자신을 호출하는 행위, 즉 재귀 호출을 수행하는 함수를 말한다. 재귀 함수는 반복되는 처리를 위해 사용한다.

```jsx
function countdown(n) {
    for (var i = n; i >= 0; i--) console.log(i);
}

countdown(10);
```

```jsx
function countdown(n) {
    if (n < 0) return;
    console.log(n);
    countdown(n - 1); // 재귀 호출
}

countdown(10);
```

```jsx
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(0)); // 0! = 1
console.log(factorial(1)); // 1! = 1
console.log(factorial(2)); // 2! = 2 * 1 = 2
console.log(factorial(3)); // 3! = 3 * 2 * 1 = 6
console.log(factorial(4)); // 4! = 4 * 3 * 2 * 1 = 24
console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120
```

`factorial` 함수 내부에서 자기 자신을 호출할 때 사용한 식별자 `factorial`은 함수 이름. 함수 이름은 함수 몸체 내부에서만 유효한다. 따라서 함수 내부에서는 함수 이름을 사용해 자기 자신을 호출할 수 있다. 함수 표현식으로 정의한 함수 내부에서는 함수 이름은 물론 함수를 가리키는 식별자로도 자기 자신을 재귀 호출할 수 있다. 단, 함수 외부에서 함수를 호출할 때는 반드시 함수를 가리키는 식별자로 해야 한다.

```jsx
var factorial = function foo(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);

    // console.log(factorial === foo); // true
    // return n * foo(n - 1);
};

console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120
```

재귀 함수는 자기 자신을 무한 재귀 호출하기 때문에 재귀 함수 내에는 재귀 호출을 멈출 수 있는 탈출 조건을 반드시 만들어야 한다. 탈출 조건이 없으면 함수가 무한 호출되어 스택 오버플로 에러가 발생한다.

### 1.7.3 중첩 함수

함수 내부에 정의된 함수를 **중첩 함수** 또는 **내부 함수**라고 한다. 그리고 중첩 함수를 포함하는 함수는 **외부 함수**라고 한다. 중첩 함수는 외부 함수 내부에서만 호출할 수 있다. 일반적으로 중첩 함수는 자신을 포함하는 외부 함수를 돕는 헬퍼 함수의 역할을 한다.

```jsx
function outer() {
    var x = 1;

    function inner() {
        var y = 2;
        console.log(x + y); // 3
    }

    inner();
}

outer();
```

ES6부터는 `if` 문이나 `for` 문 등의 코드 블록 내에서도 함수를 정의할 수 있다. 단, 호이스팅으로 인해 혼란이 발생할 수 있으므로 `if` 문이나 `for` 문 등의 코드 블록에서 함수 선언문을 통해 함수를 정의하는 것은 바람직하지 않음.

### 1.7.4 콜백 함수

```jsx
function repeat(n) {
    for (var i = 0; i < n; i++) console.log(i);
}
repeat(5); // 0 1 2 3 4
```

`repeat` 함수는 매개변수를 통해 전달받은 숫자만큼 반복하며 `console.log(i)`를 호출한다. 이때 `repeat` 함수는 `console.log(i)` 에 강하게 의존하고 있어 다른 일을 할 수 없다. 따라서 만약 `repeat` 함수의 반복문 내부에서 다른 일을 하고 싶다면 함수를 새롭게 정의해야 한다.

```jsx
function repeat1(n) {
    for (var i = 0; i < n; i++) console.log(i);
}

repeat1(5); // 0 1 2 3 4

function repeat2(n) {
    for (var i = 0; i < n; i++) {
        if (i % 2) console.log(i);
    }
}

repeat2(5); // 1 3
```

위 예제의 함수들은 반복하는 일을 공통적으로 수행하지만 그 내용은 다릅니다. 때문에 함수를 새롭게 정의해야 한다. 이 문제는 함수를 합성하는 것으로 해결할 수 있다. 함수의 변하지 않는 공통 로직은 미리 정의해두고, 경우에 따라 변경되는 로직은 추상화해서 함수 외부에서 함수 내부로 전달하는 것.

```jsx
fucntion repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i); // i를 전달하면서 f를 호출
  }
}

var logAll = function(i) {
  console.log(i);
};

repeat(5, logAll); // 0 1 2 3 4

var logOdds = function(i) {
  if (i % 2) console.log(i);
};

repeat(5, logOdds); // 1 3
```

`repeat` 함수는 경우에 따라 변경되는 일을 함수 `f`로 추상화했고 이를 외부에서 전달받음. 자바스크립트의 함수는 일급 객체이므로 함수의 매개변수를 통해 함수를 전달할 수 있다.

함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 **콜백 함수**라고 하며, 매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수를 **고차 함수**라고 한다.콜백 함수는 고차 함수에 의해 호출되며, 이때 고차 함수는 필요에 따라 콜백 함수에 인수를 전달할 수 있다. 따라서 고차 함수에 콜백 함수를 전달할 떄 콜백 함수를 호출하지 않고 함수 자체를 전달해야 한다.

콜백 함수가 고차 함수 내부에만 호출된다면 콜백 함수를 익명 함수 리터럴로 정의하면서 곧바로 고차 함수에 전달하는 것이 일반적.

```jsx
repeat(5, function (i) {
    if (i % 2) console.lo(i);
}); // 1 3
```

이때 콜백 함수로서 전달된 함수 리터럴은 고차 함수가 호출될 떄마다 평가되어 함수 객체를 생성한다. 따라서 콜백 함수를 다른 곳에서도 호출할 필요가 있거나, 콜백 함수를 전달받는 함수가 자주 호출된다면 함수 외부에서 콜백 함수를 정의한 후 함수 참조를 고차 함수에 전달하는 편이 효율적.

```jsx
var logOdds = function (i) {
    if (i % 2) console.log(i);
};

repeat(5, logOdds); // 1 3
```

위 예제에서 `logOdds` 함수는 단 한 번만 생성. 하지만 콜백 함수를 익명 함수 리터럴로 정의하면서 곧바로 고차 함수에 전달하면 고차 함수가 호출될 때마다 콜백 함수가 생성.

콜백 함수는 비동기 처리에 활용되는 중요한 패턴.

```jsx
document.getEelementById('myButton').addEventListener('click'), function() {
  console.log('button clicked');
});

setTimeout(function() {
  console.log('1초 경과');
}, 1000);
```

콜백 함수는 배열 고차 함수에서도 사용.

```jsx
var res = [1, 2, 3].map(function (item) {
    return item * 2;
});

console.log(res); // [2, 4, 6]

res = [1, 2, 3].filter(function (item) {
    return item % 2;
});

console.log(res); // [1, 3]

res = [1, 2, 3].reduce(function (acc, cur) {
    return acc + cur;
}, 0);

console.log(res); // 6
```

### 1.7.5 순수 함수와 비순수 함수

함수형 프로그래밍에서는 어떤 외부 상태에 의존하지도 않고 변경하지도 않는 함수를 **순수 함수**라고 하고,
외부 상태에 의존하거나 외부 상태를 변경하는 함수를 **비순수 함수**라고 한다.

순수 함수는 동일한 인수가 전달되면 언제나 동일한 값을 반환하며, 함수의 외부 상태를 변경하지 않음.

```jsx
var count = 0;

function increase(n) {
    return ++n;
}

count = increase(count);
console.log(count); // 1

count = increase(count);
console.log(count); // 2
```

비순수 함수는 외부 상태에 따라 반환값이 달라지며, 함수의 외부 상태를 변경하는 부수 효과가 있다.

```jsx
var count = 0;

function increase() {
    return ++count; // 외부 상태에 의존하여 외부 상태를 변경
}

// 비순수 함수는 외부 상태(count)를 변경하므로 상태 변화를 추적하기 어려움
increase();
console.log(count); // 1

increase();
console.log(count); // 2
```
