---
sidebar_position: 16
---

# 16장 프로퍼티 어트리뷰트(Property Attribute)

## 16.1 내부 슬롯과 내부 메서드

내부 슬롯과 내부 메서드는 자바스크립트 엔진의 구현 알고리즘을 설명하기 위해 ECMAScript 사양에서 사용하는 의사 프로퍼티와 의사 메서드입니다. ECMAScript 사양에 등장하는 이중 대괄호(`[[...]]`)로 감싼 이름들이 내부 슬롯과 내부 메서드입니다.

내부 슬롯과 내부 메서드는 ECMAScript 사양에 정의된 대로 구현되어 자바스크립트 엔진에서 실제로 동작.
BUT> 개발자가 직접 접근할 수 있도록 외부로 공개된 객체의 프로퍼티는 아님.
즉, 내부 슬롯과 내부 메서드는 자바스크립트 엔진의 내부 로직이므로 원칙적으로 자바스크립트는 내부 슬롯과 내부 메서드에 직접적으로 접근하거나 호출할 수 있는 방법을 제공하지 않음.
단, 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공하기는 함.

예를 들어 모든 객체는 `[[Prototype]]`이라는 내부 슬롯을 가짐.
내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 원칙적으로 접근할 수 없지만 
`[[Prototype]]` 내부 슬롯의 경우, `__proto__`를 통해 간접적으로 접근할 수 있음.

```jsx
const o = {};

o[[Prototype]]; // Uncaught SyntaxError: Unexpected token '['

o.__proto__; // Object.prototype
```

## 16.2 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체

자바스크립트 엔진은 프로퍼티를 생성할 때
프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의. 
**프로퍼티의 상태:** 프로퍼티의 값, 값의 갱신 가능 여부, 열거 가능 여부, 재정의 가능 여부.

프로퍼티 어트리뷰트:
자바스크립트 엔진이 관리하는 내부 상태 값인 내부 슬롯, `[[Value]]`, `[[Writable]]`, `[[Enumerable]]`, `[[Configurable]]`.
따라서 프로퍼티 어트리뷰터 직접 접근할 수 없지만 `Object.getOwnPropertyDescriptor`메서드를 사용하여 간접적으로 확인할 수는 있음.

```jsx
const person = {
    name: "Lee",
};

console.log(Object.getOwnPropertyDescriptor(person, "name"));
// {value: "Lee", writable: true, enumerable: true, configurable: true}
```

-   `Object.getOwnPropertyDescriptor` 메서드를 호출할 때
    첫 번째 매개변수에는 객체의 참조를 전달하고,
    두 번째 매개변수에는 프로퍼티 키를 문자열로 전달합니다.
-   이때 `Object.getOwnPropertyDescriptor` 메서드는
    프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환.
    만약 ‘존재하지 않는 프로퍼티’나 ‘상속받은 프로퍼티’에 대한 프로퍼티 디스크립터를 요구하면 `undefined`가 반환.

`Object.getOwnPropertyDescriptor` 메서드는 하나의 프로퍼티에 대해 프로퍼티 디스크립터 객체를 반환.

ES8에서 도입된 `Object.getOwnPropertyDescriptor` 메서드는
모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환.

```jsx
const person = {
    name: "Lee",
};

// 프로퍼티 동적 생성
person.age = 20;

console.log(Object.getOwnPropertyDescriptor(person));

/*
{
  name: {value: "Lee", writable: true, enumerable: true, configurable: true},
  age: {value: 20, writable: true, enumerable: true, configurable: true}
}
*/
```

## 16.3 프로퍼티의 구분: 데이터 프로퍼티와 접근자 프로퍼티

-   데이터 프로퍼티키와 값으로 구성된 일반적인 프로퍼티, 지금까지 살펴본 모든 프로퍼티는 데이터 프로퍼티
-   접근자 프로퍼티 자체적으로는 값을 갖지 않고
    다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티

### 16.3.1 데이터 프로퍼티

데이터 프로퍼티는 아래와 같은 프로퍼티 어트리뷰트를 갖음.
이 프로퍼티 어트리뷰트는 자바스크립트 엔진이 프로퍼티를 생성할 때 기본값으로 자동 정의.

-   `[[Value]]`프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값.
    프로퍼티 키를 통해 프로퍼티 값을 변경하면⇒ `[[Value]]`에 값을 재할당.
    프로퍼티가 없으면 프로퍼티를 동적 생성
-   `[[Writable]]`프로퍼티 값의 변경 가능 여부를 나타내며 불리언 값을 갖음
    값이 false인 경우 해당 프로퍼티 `[[Value]]`의 값을 변경할 수 없는 읽기 전용 프로퍼티가 됨
-   `[[Enumerable]]`프로퍼티 열거 가능 여부를 나타냄. 불리언 값을 갖음
    값이 false인 경우 해당 프로퍼티는 `for...in`문이나 `Object.key`메서드 등으로 열거할 수 없음
-   `[[Configurable]]`프로퍼티의 재정의 가능 여부를 나타냄. 불리언 값을 갖음
    값이 false인 경우 해당 프로퍼티의 삭제, 프로퍼티 어트리뷰트 값의 변경 금지
    `[[Wirtable]]`이 true인 경우 `[[Value]]`의 변경과 `[[Writable]]`을 false로 변경하는 것은 허용됨

```jsx
const person = {
    name: "Lee",
};

console.log(Object.getOwnPropertyDescriptor(person, "name"));
// {value: "Lee", writabel: true, enumerable: true, configurable: true}
```

프로퍼티가 생성될 때 `[[Value]]`의 값은 프로퍼티 값으로 초기화되며 `[[Writable]]`, `[[Enumerable]]`, `[[Configurable]]`의 값은 `true`로 초기화됩니다. 이것은 프로퍼티를 동적 추가해도 마찬가지 입니다.

```jsx
const person = {
    name: "Lee",
};

person.age = 20;

console.log(Object.getOwnPropertyDescriptor(person));

/*
{
  name: {value: "Lee", writable: true, enumerable: true, configurable: true},
  age: {value: 20, writable: true, enumerable: true, configurable: true}
}
*/
```

### 16.3.2 접근자 프로퍼티

-   `[[Get]]`접근자 프로퍼티 키로 프로퍼티 값에 접근하면 프로퍼티 어트리뷰트 `[[Get]]`의 값이 호출되고 그 결과가 프로퍼티 값으로 반환됨
-   `[[Set]]`접근자 프로퍼티 키로 프로퍼티 값을 저장하면 프로퍼티 어트리뷰트 `[[Set]]`의 값이 호출되고 그 결과 프로퍼티 값으로 저장됨
-   `[[Enumerable]]`데이터 프로퍼티의 `[[Enumerable]]`과 같음
-   `[[Configurable]]`데이터 프로퍼티의 `[[Configurable]]`과 같음

접근자 함수는 getter/setter 함수라고도 부름.

```jsx
const person = {
    // 데이터 프로퍼티
    firstName: "Donald",
    lastName: "Duck",

    // getter 함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // setter 함수
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(" ");
    },
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person.firstName + " " + person.lastName); // Donald Duck

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName값을 저장하면 setter 함수가 호출
person.fullName = "Daisy Duck";
console.log(person); // {firstName: "Daisy", lastName: "Duck"}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출
console.log(person.fullName); // Daisy Duck

// firstName은 데이터 프로퍼티
let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log(descriptor);
// {value:"Daisy", writable: true, enumerable: true, configurable: true}

// fullName은 접근자 프로퍼티
descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
console.log(descriptor);
// {get: f, set: f, enumerable: true, configurable: true}
```

`person`객체의 `firstName`과 `lastName` 프로퍼티는 일반적인 데이터 프로퍼티입니다.
메서드 앞에 `get`, `set`이 붙은 메서드가 있는데 이것들이 바로 `getter`와 `setter`함수이고, 
`getter/setter`함수의 이름 `fullName`이 접근자 프로퍼티

접근자 프로퍼티는 자체적으로 값(프로퍼티 어트리뷰트 [[Value]])를 가지지 않으며
다만 데이터 프로퍼티의 값을 읽거나 저장할 때 관여할 뿐.

접근자 프로퍼티 `fullName`으로 프로퍼티 값에 접근하면
내부적으로 `[[Get]]`내부 메서드가 호출되어 다음과 같이 동작.

1. 프로퍼티 키가 유효한지 확인한다. 프로퍼티 키는 문자열 또는 심벌이어야 한다.
   프로퍼티 키 `fullName`은 문자열이므로 유효한 프로퍼티 키다.
2. 프로토타입 체인에서 프로퍼티를 검색한다.
    `person`객체에 `fullName`프로퍼티가 존재한다.
3. 검색된 `fullName`프로퍼티가 데이터 프로퍼티인지 접근자 프로퍼티인지 확인한다. `fullName`프로퍼티는 접근자 프로퍼티다.
4. 접근자 프로퍼티 `fullName`의 프로퍼티 어트리뷰터 `[[Get]]`의 값, `getter` 함수를 호출하여 그 결과를 반환한다. 프로퍼티 `fullName`의 프로퍼티 어트리뷰트 `[[Get]]`의 값은 `Object.getOwnPropertyDescriptor`메서드가 반환하는 프로퍼티 디스크립터 객체의 `get`프로퍼티 값과 같다.

> 프로토타입은 어떤 객체의 상위 객체의 역할을 하는 객체다.
> 프로토타입은 하위 객체에게 자신의 프로퍼티와 메서드를 상속한다.

프로토타입 객체의 프로퍼티나 메서드를 상속받은 하위 객체는
자신의 프로퍼티 또는 메서드인 것처럼 자유롭게 사용할 수 있다.

프로토타입 체인은 프로토타입이 단방향 링크드 리스트 형태로 연결되어 있는 상속 구조를 말한다.

객체의 프로퍼티나 메서드에 접근하려고 할 때
해당 객체에 접근하려는 프로퍼티 또는 메서드가 없다면
프로토타입 체인을 따라 프로토타입의 프로퍼티나 메서드를 차례대로 검색한다

>

```jsx
// 일반 객체의 __proto__는 접근자 프로퍼티
Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
// {get: f, set: f, enumerable: true, configurable: true}

// 함수 객체의 prototype은 데이터 프로퍼티
Object.getOwnPropertyDescriptor(function () {}, "prototype");
// {value: {...}, writable: true, enumerable: false, configurable: false}
```

## 16.4 프로퍼티 정의

**프로퍼티 정의**란
새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나,
기존 프로퍼티 어트리뷰트를 재정의하는 것.

`Object.defineProperty`메서드를 사용⇒ 프로퍼티의 어트리뷰트를 정의.

-   인수: 객체의 참조와 데이터 프로퍼티의 키인 문자열, 프로퍼티 디스크립터 객체를 전달.

```jsx
const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, "firstName", {
    value: "Donald",
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(person, "lastName", {
    value: "Duck",
});

let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log("firstName", descriptor);
// firstName {value: "Donald", writable: true, enumerable: true, configurable: true}

descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
console.log("lastName", descriptor);
// lastName {value: "Duck", writable: false, enumerable: false, configurable: false}

// lastName 프로퍼티는 [[Enumerable]]의 값이 false이므로 열거되지 않음
console.log(Object.keys(person)); // ["firstName"]

// lastName 프로퍼티는 [[Writable]]의 값이 false이므로 값을 변경할 수 없음
// 값을 변경하면 에러는 발생하지 않고 무시됨
person.lastName = "Mouse";

// lastName 프로퍼티는 [[Writable]]의 값이 false이므로 삭제할 수 없음
// 프로퍼티를 삭제하면 에러는 발생하지 않고 무시됨
delete person.lastName;

descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
console.log("lastName", descriptor);
// lastName {vale: "Duck", writable: false, enumerable: false, configurable: false}

// 접근자 프로퍼티 정의
Object.defineProperty(person, "fullName", {
    get() {
        return `${this.firstName} ${this.lastName}`;
    },
    set(name) {
        [this.firstName, this.lastName] = name.split(" ");
    },
    enumerable: true,
    configurable: true,
});
descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
console.log("fullName", descriptor);
// fullName {get: f, set: f, enumerable: true, configurable: true}

person.fullName = "Daisy Duck";
console.log(person); // {firstName: "Daisy", lastName: "Duck"}
```

-   `Object.defineProperty`메서드: 한 번에 하나의 프로퍼티만 정의
-   `Object.defineProperties`메서드: 여러 개의 프로퍼티를 한 번에 정의

```jsx
const person = {};

Object.defineProperties(person, {
    // 데이터 프로퍼티 정의
    firstName: {
        value: "Donald",
        writable: true,
        enumerable: true,
        configurable: true,
    },
    lastName: {
        value: "Duck",
        writable: true,
        enumerable: true,
        configurable: true,
    },
    // 접근자 프로퍼티 정의
    fullName: {
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        set(name) {
            [this.firstName, this.lastName] = name.solit(" ");
        },
        enumerable: true,
        configurable: true,
    },
});

person.fullName = "Daisy Duck";
console.log(person); // {firstName: "Daisy", lastName: "Duck"}
```

## 16.5 객체 변경 방지

객체는 변경 가능한 값이므로 재할당 없이 직접 변경할 수 있습니다. 즉, 프로퍼티를 추가하거나 삭제할 수 있고, 프로퍼티 값을 갱신할 수 있으며, `Object.defineProperty` 또는 `Object.defineProperties`메서드를 사용하여 프로퍼티 어트리뷰트를 재정의할 수도 있습니다.

### 16.5.1 객체 확장 금지

`Object.preventExtensions`메서드는 객체의 확장을 금지합니다.

-   **객체 확장 금지:** 프로퍼티 추가 금지
    . 프로퍼티는 프로퍼티 동적 추가와 `Object.defineProperty`메서드로 추가할 수 있는데,
    이 두가지 추가 방법이 모두 금지.

```jsx
const person = { name: "Lee" };

// person 객체는 확장 가능한 객체
console.log(Object.isExtensible(person)); // true

// person 객체의 확장을 금지하여 프로퍼티 추가를 금지
Object.preventExtensions(person);

person.age = 20; // 무시됨. strict mode에서는 에러 발생
console.log(person); // {name: "Lee"}

// 프로퍼티 삭제는 가능
delete person.name;
console.log(person); // {}

Object.defineProperty(person, "age", { value: 20 });
// TypeError: Cannot define property age, object is not extensible
```

### 16.5.2 객체 밀봉

`Object.seal`메서드: 객체를 밀봉

-   **객체 밀봉:** 프로퍼티 추가 및 삭제와 프로퍼티 어트리뷰트 재정의 금지

```jsx
const person = { name: 'Lee' };

// person 객체는 밀봉되지 않은 객체
console.log(Object.isSealed(person)); // false

// person 객체를 밀봉
Object.seal(person);

console.log(Object.isSealed(person)); // true

console.log(Object.getOwnPropertyDescriptors(person));
/*
{
  name: {value: "Lee", writable: true, enumerable: true, configurable: false},
}
*/

person.age = 20; // 무시, strict mode에서는 에러 발생
console.log(person); // {name: "Lee"}

delete.person.name; // 무시, strict mode에서는 에러 발생
console.log(person); // {name: "Lee"}

person.name = 'Kim';
console.log(person); // {name: "Kim"}

Object.defineProperty(person, 'name', { configurable: true });
// TypeError: Cannot redefine property: name
```

### 16.5.3 객체 동결

`Object.freeze`메서드는 객체를 동결

-   **객체 동결:** 프로퍼티 추가 및 삭제와 프로퍼티 어트리뷰트 재정의 금지, 프로퍼티 값 갱신 금지를 의미합니다.

```jsx
const person = { name: "Lee" };

console.log(Object.isFrozen(person)); // false

Object.freeze(person);
console.log(Object.isFrozen(person)); // true

// 동결된 객체는 writable과 configurable이 false
console.log(Object.getOwnPropertyDescriptors(person));
/*
{
  name: {value: "Lee", writable: false, enumerable: true, configurable: false}
}
*/

person.age = 20; // 무시, strict mode에서는 에러
console.log(person); // {name: "Lee"}

delete person.name; // 무시, strict mode에서는 에러
console.log(person); // {name: "Lee"}

person.name = "Kim"; // 무시, strict mode에서는 에러
console.log(person); // {name: "Lee"}

Object.defineProperty(person, "name", { configurable: true });
// TypeError: Cannot redefine property: name
```

### 16.5.4 불변 객체

앞서 본 변경 방지 메서드들은 얕은 변경 방지.
직속 프로퍼티만 변경이 방지되고
중첩 객체까지는 영향을 주지 못함.
⇒ 따라서 `Object.freeze`메서드로 객체를 동결하여도 중첩 객체까지 동결할 수 없다.

```jsx
const person = {
    name: "Lee",
    address: { city: "Seoul" },
};

Object.freeze(person);
console.log(Object.isFrozen(person)); // true
console.log(Object.isFrozen(person.address)); // false

person.address.city = "Busan";
console.log(person); // {name: "Lee", address: {city: "Busan"}}
```

객체의 중첩 객체까지 동결하여 변경이 불가능한 읽기 전용의 불변 객체를 구현하려면
객체를 값으로 갖는 모든 프로퍼티에 대해
재귀적으로 `Object.freeze`메서드를 호출해함.

```jsx
function deepFreeze(target) {
    if (target && typeof target === "object" && !Object.isFrozen(target)) {
        Object.freeze(target);
        Object.keys(target).forEach((key) => deepFreeze(target[key]));
    }
    return target;
}
const person = {
    name: "Lee",
    address: { city: "Seoul" },
};

deepFreeze(person);
console.log(Object.isFrozen(person)); // true
console.log(Object.isFrozen(person.address)); //true

person.address.city = "Busan";
console.log(person); // {name: "Lee", address: {city: "Seoul"}}
```
