---
sidebar_position: 26
---

# ES6 함수의 추가 기능

# 1. 함수의 구분

ES6이전: 사용목적에 따라 함수 구분 안함 ⇒ 호출방식에 특별한 제약 없음. 생성자 함수로 호출되지 않아도 프로토타입 객체를 생성함

```jsx
var foo = function () {
  return 1;
};

// 일반적인 함수로서 호출(callable: 호출할 수 있는 함수객체)
foo(); //1
// 생성자 함수로서 호출(constructor: instance를 생성할 수 있는 함수객체 <->non-constructor)
new foo(); //foo{}

// 메서드로서 호출 (객체에 바인딩됨. callable || constructor)
var obj = {
  x: 10,
  f: function () {
    return this.x;
  },
};

//프로퍼티 f에 바인딩된 함수를 '메서드'로서 호출
obj.f(); //1

//프로퍼티 f에 바인딩된 함수를 '일반함수'로서 호출
var bar = obj.f;
bar();

//프로퍼티 f에 바인딩된 함수를 '생성자함수'로서 호출
new obj.f();
```

객체에 바인딩된 함수를 생성자 함수로 호출하는 경우

1. 문법상 가능다는 것은 문제
2. 성능면 문제

- 객체에 바인딩 된 함수가 constructor
  ⇒ 객체에 바인딩된 함수가 prototype 프로퍼티 가짐
  ⇒ 객체에 바인딩된 함수가 prototype 객체도 생성
  = 함수에 전달되어 보조함수의 역할을 하는 콜백함수도 마찬가지.
  ⇒ 따라서 콜백함수도 constructor이기 때문에 불필요한 prototype 객체 생성
  ( 생성자 함수로 호출되지 않아도 프로토타입 객체를 생성함)

```jsx
//Callback함수를 사용하는 고차함수 map. 콜백함수도 constructor이며 프로토타입을 생성
[1, 2, 3].map(function (item)){
	return item * 2
} //[2, 4, 6]
```

ES6 이후 함수를 사용목적에 따라 구분

| 구분 | constuctor
(인스턴스 생성가능여부) | prototype | super | arguments |
| --- | --- | --- | --- | --- |
| 일반함수(Normal) | O | O | X | O |
| 메서드(Method) | X (non-constructor) | X | O | O |
| 화살표함수(Arrow) | X (non-constructor) | X | X | X |

- 일반함수: 함수 선언문 또는 함수 표현식으로 정의한 함수

# 2. Method

- 객체에 바인딩 된 함수

- ES6 사양에서 Method : 메서드 축약 표현으로 정의된 함수만 의미

```jsx
const obj = {
	 x:1,
	//foo는 메서드다.
	foo(){ return this.x}

	//bar에 바인딩된 함수는 메서드가 아닌 일반함수
	bar: function(){return this.x}
}

new obj.foo() //TypeError: [obj.foo](http://obj.foo) is not a constructor
new obj.bar() //bar{}

//consturtor가 아닌 ES6 메서드 이므로 prototype property가 없다.
obj.foo.hasOwnProperty('property') // false
//consturtor인 일반함수이므로 prototype property가 있다.
obj.bar.hasOwnProperty('property') // true
```

- 표준 빌드인 객체가 제공하는 프로퍼타입 메서드와 정적메서드 모두 non-constructor
  (의미적으로 맞지 않는 constructor 기능 제거)
- super 키워드 사용 가능
  : ES6 메서드는 자신을 바인딩한 객체를 가리키는 내부슬롯 [[HomeObject]]를 갖는다.
  super참조는 내부슬롯 [[HomeObject]을 사용하여 수퍼클래스의 메서드를 참조한다.
  따라서 super 키워드 사용가능.

- super keyword: 자신을 바인딩하는 객체의 prototype에 접근하기 위한 식별자

```jsx
class Base {
  method() {
    return "hello";
  }
}

class Derived extends Base {
  //constructor의 내부슬롯 [HomeObject]가 가리키는 대상: 자신을 감싸고 있는 객체. Derived.prototye
  constructor() {
    //super키워드는 HomeObject가 내포하고 있는 내부슬롯 [[prototype]] 에 할당된 내용
    super();
  }
}
console.log(new Derived().method()); //hello
//class Derived가 평가되는 시점에서 생성되는 Derived.prototype 객체에는
// constructor라는 프로퍼티가 존재하고
// 여기에 해당 constructor가 들어간다.

//constructor에는 보이지않는 내부슬롯 [HomeObject]가 존재하고,
// 이것은 현재 Derived.prototype을 가리키고 있다.

//여기에서 Derived.prototype의 [[prototype]]슬롯에 있는 존재는,
//놀랍게도 처음 클래스들이 평가가 되는 순간에 extends 키워드로 인해 서로 연결되어 있던
// Base의 prototype 객체

//prototype 객체에는 constructor가 존재하고,
//super을 호출하는 순간 자바스크립트 엔진은 자동으로 constructor의 유무를 확인하여
//이 객체가 constructable 한지를 파악한 뒤, 가능하다면 생성자 함수로서 이용한다.
//따라서, constructor을 실행시키는 것과 같다.

//이것이 바로 super을 호출하면 인스턴스의 생성이 수퍼클래스(부모클래스)에게 넘어간다고 하는 것
```

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

//dervided.sayHi는 ES6의 메서드이다. ES6 메서드는 내부슬롯 [[HomeObject]]를 갖는다.
// dervided.sayHi의 [[HomeObject]]는 dervided.sayHi가 바인딩된 객체인 derived를 가리키고
// super는 dervided.sayHi의 [[HomeObject]]의 프로토타입인 base를 가리킨다.

console.log(derived.sayHi());

const dervied = {
  __proto__: base,
  sayHi: function () {
    return `${super.work()}. How are you doing?`;
  },
};

//SyntaxError: 'super' is only allowed in object methods and classes.
//이때 sayHi는 메서드가 아니다. 따라서 내부슬롯 [[HomeObject]]을 가지지 않는다.
//Q: 이떄 sayHi의 성질은? 프로퍼타 sayHi에 바인딩된 함수. 일반함수 성질
```

# 3. 화살표 함수(Arrow function)

- ‘function 키워드’대신 화살표(=>, fat arrow)를 사용하여
  기존의 함수정의 방식보다 간략하게 함수를 정의
- 내부 동작도 기존의 함수보다 간략.
- 콜백함수 내부에서 this가 전역 객체를 가리키는 문제를 해결하기 위한 대안.

## 3.1 화살표 함수 정의 ⇒ 콜백함수로서 정의할 때 유용하다.

### 함수 정의

- 함수 선언문으로 정의 불가.
- 함수 표현식으로 정의.
- 호출방식은 기존 함수와 동일

```jsx
const multi = (x, y) => x * y;

console.log(multi(2, 3)); //6
```

### 매개변수 선언

- 매개 변수가 여러개인 경우 소괄호( )안에 매개변수를 선언.
- 매개 변수가 한 개 인 경우 소괄호 생략
- 매개 변수가 없는 경우 소괄호 생략 불가.

```jsx
const test = (x, y)=>{ ... }
const test = x =>{ ... }
const test = ()=>{ ... }
```

### 함수 몸체 정의

- 하나의 문으로 구성된 경우: 함수 몸체를 감싸는 중괄호 { } 생략
- 함수 몸체 내부의 문이 ‘값으로 평가될 수 있는 표현식인 문’인 경우 ⇒ 암묵적 반환됨.
  ’표현식이 아닌 문’은 반환 할 수 없음. 따라서 이때 중괄호를 생략할 경우 에러 발생
- 객체 리터럴을 반환하는 경우: 객체 리터럴을 소괄호( )로 감싸주어야함.
  객체 리터럴의 중괄호{ }를 함수 몸체를 감싸는 중괄호{ }로 잘못 해석하기 때문

```jsx
const multi = (x, y)=> x* y //값으로 평가될 수 있는 표현식인 문

const test = () => const x = 1 //SyntaxError: Unexpected token 'const'

const create =(id, content) => ({ id, content})
create(1,"JavaScript") //{ id: 1, content: 'JavaScript' }

const create =(id, content) => {return { id, content}}
```

- 화살표함수도 즉시 실행 함수로 사용 가능.

```jsx
const person = ((name) => ({
  sayHi() {
    return `hi,${name}`;
  },
}))("Seo");

person.sayHi(); //hi, Seo
```

- 화살표함수도 일급객체이다.
  : 따라서 Array.prototype.map, Array.prototype.filter, Array.prototype.reduce같은 고차함수(Higher-Order Funtion, HOF)에 인수로 전달할 수 있다.

```jsx
const numbers = [1, 2, 3];

//ES5
numbers.map(function (v) {
  return v * 2;
});
//ES6
numbers.map((v) => v * 2); //[2, 4, 6]
```

## 3.2 화살표 함수와 일반 함수의 차이

### 화살표 함수는 인스턴스를 생성할 수 없는 non-constructor다.

따라서 생성자 함수로서 호출할 수 없다.⇒ prototype property도 없고 prototype도 생성하지 않는다.

### 중복된 매개변수 이름을 선언할 수 없다.

일반함수는 중복된 매개변수 이름을 선언해도 에러나지 않음.
(단, strict mode에서 중복된 매개변수 이름을 선언하면 에러발생)

```jsx
function normal(a, a) {
  return a + a;
}

console.log(normal(1, 2)); //3

("strict mode");
function normal(a, a) {
  return a + a;
}
//SyntaxError: Duplicate parameter name no allowed in this context

const arrow = (a, a) => a + a;
//SyntaxError: Argument name clash.
```

### 화살표 함수는 함수 자체의 this, arguments, super, [new.target](http://new.target) 바인딩을 갖지 않는다.

따라서 화살표 함수 내에서 this, arguments, super, [new.target](http://new.target) 을 참조하면?
⇒ 스코프 체인을 통해 상위 스코프의 this, arguments, super, [new.target](http://new.target) 을 참조

화살표 함수가 중첩되어있을 경우?
⇒ 스코프 체인상 가장 가까운 상위함수 중에서도 화살표 함수가 아닌 함수의 this, arguments, super, [new.target](http://new.target) 을 참조

## 3.3 this ✨

- 화살표 함수는 다른함수의 인수로 전달되어 콜백함수로 사용되는 경우가 많다.
- 콜백 함수 내부의 this가 외부함수의 this와 다르기 때문에 발생하는 문제를 해결.

- this 바인딩
  : 함수가 어떻게 호출되었는가에 따라 this에 바인딩할 객체가 동적을 결정된다. - 주의!! ‘일반 함수로서 호출되는 콜백함수'의 경우
  고차함수의 인수로 전달되어 고차함수 내부에서 호출되는 콜백함수도 ‘중첩함수’라고 할수 있음.

```jsx
class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }
  //add method
  add(arr) {
    //프로토타입 메서드 내부
    return arr.map(function (item) {
      // map의 인수로 전달한 '일반함수로서 호출되는' 콜백함수 내부.
      return this.prefix + item;
    });
  }
}

const prefixer = new Prefixer("test");
const numbers = [1, 2, 3];

console.log(prefixer.add(numbers));
//TypeError: Cannot read property 'prefix' of undefined
//서로 다른 값을 가리키기 때문에 TypeError 발생
```

- 일반함수로서 호출되는 모든 함수 내부의 this는 전역객체를 가리킨다.
- 클래스 내부의 모든 코드에는 strict mode가 암묵적으로 적용된다.
- [Array.prototype.map](http://Array.prototype.map) 메서드의 콜백함수에도 strict mode가 적용된다.
- strict mode에서 ‘일반 함수로서 호출된 모든 함수 내부의 this’dpsms
  전역객체가 아닌 ‘undefined’가 바인딩 된다.
  ⇒ ‘콜백함수 내부의 this’가 외부함수의 this와 다르기 때문에 발생하는  
  (서로 다른 값을 가리키기 때문에 TypeError 발생)
  ’콜백함수 내부의 this문제’가 발생한다.

### ES6 이전 ’콜백함수 내부의 this문제’ 해결방법

(1) add method를 호출한 prefixer객체를 가리키는 this를 일단 회피시킨 후에 콜백함수 내부에서 사용

(2) [Array.prototype.map](http://Array.prototype.map)의 두번째 인수로 add method를 호출한 prefixer객체를 가리키는 this를 전달

— ES5에 도입된 [Array.prototype.map](http://Array.prototype.map)은 두번째 인수로
콜백함수 내부에서 this로 사용할 객체 전달 가능.

(3) Function.prototype.bind 메서드를 사용하여
add 메서드를 호출한 prefixer객체를 가리키는 this를 바인딩한다.

```jsx
//회피
class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }
  //add method
  add(arr) {
    //회피
    const that = this;
    return arr.map(function (item) {
      // this 대신 that을 참조
      return that.prefix + item;
    });
  }
}

const prefixer = new Prefixer("test");
const numbers = [1, 2, 3];

console.log(prefixer.add(numbers)); //[ 'test1', 'test2', 'test3' ]

//두번째 인수
class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }
  //add method
  add(arr) {
    return arr.map(function (item) {
      //map의 인수로 전달한 '일반함수로서 호출되는' 콜백함수 내부.
      return this.prefix + item;
    }, this); //this에 바인딩된 값이 콜백함수 내부의 this에 바인딩된다.
  }
}

const prefixer = new Prefixer("test");
const numbers = [1, 2, 3];

console.log(prefixer.add(numbers)); //[ 'test1', 'test2', 'test3' ]

//바인딩
class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }
  //add method
  add(arr) {
    return arr.map(
      function (item) {
        //map의 인수로 전달한 '일반함수로서 호출되는' 콜백함수 내부.
        return this.prefix + item;
      }.bind(this)
    ); //this에 바인딩된 값이 콜백함수내부의 this에 바인딩된다.
  }
}

const prefixer = new Prefixer("test");
const numbers = [1, 2, 3];

console.log(prefixer.add(numbers));
```

### ES6 이후 ’콜백함수 내부의 this문제’ 해결방법: 화살표 함수

- Lexical this:
  - 화살표함수는 함수 자체의 this 바인딩을 갖지 않음 (cf. 화살표 함수를 제외한 모든 함수에는 this바인딩이 반드시 존재함)
    ⇒ 일반적인 식별자처럼 스코프체인을 통해 상위 스코프에서 this를 탐색
    ⇒ 화살표함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 참조.
    ⇒ Function.prototype.call, Function.prototype.apply, Function.prototype.bind 메서드를 사용해도 화살표 함수 내부의 this를 교체할 수 없다.
    (위 메서드들을 호출할 수 없다는 의미가 아님)
  - 화살표 함수의 this가 함수가 정의된 위치에 의해 결정됨 (렉시컬 스코프처럼)
  - 화살표함수가 전역함수인 경우? 화살표함수의 this는 전역객체를 가리킨다.
  - Property에 할당한 화살표 함수? 스코프 체인상 가장 가까운 상위함수중 화살표함수가 아닌 함수의 this를 참조

```jsx
class Prefixer {
	constructor
}

//arrow function
class Prefixer {
	constructor(prefix){
    this.prefix = prefix
  }
  //add method
  add(arr){
    //프로토타입 메서드 내부
    return arr.map((item)=>{
      // map의 인수로 전달한 콜백함수 내부
      return this.prefix +item

    })
  }
}

const prefixer = new Prefixer('test')
const numbers = [1,2,3]

console.log(prefixer.add(numbers))
//[ 'test1', 'test2', 'test3' ]

/* Function.prototype.bind를 사용하여 표현한 Arrow function */

//화살표 함수는 상위 스코프의 this를 참조한다.
()=>this.x

//익명함수에 상위스코프 this를 주입한다. 위 화살표 함수와 동일하게 작동함.
(function(){ return this.x}).bind(this)

//화살표함수가 전역함수인경우
const foo = () =>console.log(this)
foo() //windo

// 프로퍼티에 할당한 화살표 함수
const counter = {
  num:1,
  increase: ()=> ++this.num
}

console.log(counter.increase()) //NaN

//Function.prototype.call, Function.prototype.apply, Function.prototype.bind 메서드를 사용해도
// 화살표 함수 내부의 this를 교체할 수 없다.(위 메서드들을 호출할 수 없다는 의미가 아님)
// 언제나 상위스코프의 this를 참조.
window.x =1

const normal = function(){
  return this.x
}

const arrow =()=> this.x

console.log(normal.call({x:10})) //10
console.log(arrow.call({x:10})) //1

```

### 일반적인 의미의 메서드를 화살표함수로 정의하는 것은 피해야 한다. (ES6 메서드 아니라)

메서드를 정의할 때는 ES6메서드를 사용하는 것이 좋다

```jsx
/* Bad: Arrow function */
const person = {
  name: "Seo",
  sayHi: () => console.log(`hi, ${this.name}`),
};

person.sayHi(); //'hi, '

// 화살표함수의 this는 상위스코프인 전역의 this를 가리킨다
// 전역객체 window에는 빌트인 프로퍼티 name이 존재한다.
// 따라서, 이때 빈 문자열은 전역객체 this가 가리키는 window.name이다.

/* Good: ES6 method */
const person = {
  name: "Seo",
  sayHi() {
    console.log(`hi, ${this.name}`);
  },
};

person.sayHi(); //'hi, Seo'
```

- 프로토타입 객체의 프로퍼티에 화살표함수를 할당하는경우도 동일한 문제가 발생한다.
  프로퍼티를 동적추가할 때는 ES6메서드 정의를 사용할 수 없으므로 일반함수를 할당한다.
- ES6메서드를 동적추가 하고 싶은경우?
  객체 리터럴을 바인딩하고 프로토타입의 constructor 프로퍼티와 생성자 함수간의 연결을 재설정.

```jsx
function Person(name) {
  this.name = name;
}

Person.prototype = {
  //constructor 프로퍼티와 생성자 함수간의 연결을 재설정
  constructor: Person,
  sayHi() {
    console.log(`hi,${this.name}`);
    //{ constructor: ƒ Person(), sayHi: ƒ sayHi() }
  },
};

const person = new Person("Seo"); //'hi,Seo'
person.sayHi();
```

- 클래스 필드 정의 제안: 클래스 필드에 화살표함수 할당
  - 클래스필드에 할당한 화살표함수 === 인스턴스 메서드 (프로토타입메서드가 아님)
  - 따라서 메서드 정의시 ES6메서드를 사용하는 것이 좋음.

\*\*클래스 필드( 필드 또는 맴버 변수)
: 클래스 기반 객체지향 언어에서 클래스가 생성할 인스턴스의 프로퍼티를 가리키는 용어.
클래스 기반 객체지향 언어인 자바의 클래스 정의를 살펴보자, 자바의 클래스 필드는 마치 클래스 내부에서 변수처럼 사용됨.

```jsx
class Person {
  constructor() {
    this.name = "Seo";
    // 클래스가 생성한 인스턴스(this)의 sayHi 프로퍼티에 화살표함수를 할당.
    // 따라서 sayHi의 프로퍼티는 인스턴스 프로퍼티.

    this.sayHi = () => console.log(`Hi, ${this.name}`);
  }
}
```

## 3.4 super

- 화살표 함수는 함수 자체의 super 바인딩을 갖지 않는다.
  ⇒ 화살표 함수 내부에서 super를 참조하면 this와 마찬가지로 상위 스코프의 super를 참조
- super는 `[[HomeObject]]`를 갖는 ES6 메서드 내에서만 사용할 수 있는 키워드.
- hello 클래스 필드에 할당한 화살표 함수는
  ES6 메서드는 아니지만, 함수자체의 super 바인딩을 갖지 않으므로
  super를 참조해도 에러가 발생하지 않고 상위 스코프인 constructor의 super바인딩을 참조.

```jsx
class Base {
  constructor(name) {
    this.name = name;
  }

  hello() {
    return `hello ${this.name}`;
  }
}

class Derived extends Base {
  // 화살표 함수 super는 상위 스코프인 constructor의 super를 가리킨다.
  hello = () => `${super.hello()} how are you doing`;
}

const derived = new Derived("lee");
console.log(derived.hello()); // hello lee how are you doing
```

## 3.5 arguments

- 화살표 함수는 함수 자체의 arguments 바인딩을 갖지 않는다
  ⇒ 화살표 함수 내부에서 arguments를 참조하면 this와 마찬가지로
  상위 스코프인 arguments를 참조

```jsx
(function () {
  const foo = () => console.log(arguments); // [Arguments] { '0': 1, '1': 2 }
  foo(3, 4);
})(1, 2);
```

상위 arguments를 호출하는 것을 알 수 있다.

# 4 Rest Parmeter(나머지 매개변수)

- 매개변수 이름 앞에 `...` 을 붙여서 정의한 매개변수.
- **함수에 전달된 인수들의 목록을 배열로 전달받는다**, C언어의 가변 인수와도 같음.

```jsx
function foo(...rest) {
  console.log(rest);
}
foo(1, 2, 3, 4, 5); // [ 1, 2, 3, 4, 5 ]
```

- Rest 파라미터와 일반 파라미터를 사용할 때? Rest 인자를 맨 뒤에 둔다.

```jsx
function foo(param, ...rest) {
  console.log(rest);
}
foo("hello", 1, 2, 3, 4, 5); // [ 1, 2, 3, 4, 5 ]
```

# 5 매개변수 기본값

- 인수가 전달되지 않은 매개변수의 값: undefined
  그러나 이를 방치하면 좋지 않은 결과가 나올 수 있으므로 초기값을 넣어주는 것이 좋음

```jsx
function sum(x = 0, y = 0) {
  return x + y;
}

console.log(sum(1, 2)); // 3
console.log(sum(1)); // 1
console.log(sum()); // 0
console.log(sum(undefined)); // 0
console.log(sum(1, null)); // 0
```

- 함수 인자에 undefined를 넣은경우 ? 아무것도 안넣어준 것과 같다.
  null은 ‘의도한 값’ 이므로 ⇒ 매개변수 기본값으로 사용되지 않는다.

단, Rest 파라미터에는 기본값을 넣어줄 수는 없다.
