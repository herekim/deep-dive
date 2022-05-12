---
sidebar_position: 34
---

# 34장 이터러블

# 1. 이터레이션 프로토콜

es6에서 도입된 이터레이션 프로토콜은 순회 가능한 데이터 컬렉션 (자료구조)을 만들기위해 ECMAScript 사양에 정의하여 미리 약속한 규칙이다.

그전에는 배열, 문자열, 유사 배열객체, dom 컬렉션 등 순회가능한 데이터 컬렉션들은 통일된 규약없이 각자 나름의 구조를 가지고있었다.

es6에서 이터레이션 프로토콜을 준수하는 이터러블로 통일하여, for...of 문, 스프레드 문법, 배열 디스트럭처링 할당의 대상으로 사용할 수 있도록 일원화했다.

- 이터러블 프로토콜

```Symbol.iterator```를 프로퍼티 키로 사용한 메서드를 직접 구현하거나 프로토타입 체인을 통해 상속받은 ```Symbol.iterator``` 메서드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터 반환한다. 이런 규약을 이터러블 프로토콜이라 하고, 이터러블 프로토콜을 준수한 객체를 이터러블이라 한다.

for...of, 스프레드 문법, 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.

- 이터레이터 프로토콜

 Symbol.iterator 메서드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터 반환. 이터레이터는 next 메서드를 소유하며 호출되면 이터러블을 순회하며 value, done 프로퍼티를 갖는 이터레이터 리절트 객체를 반환. 이런 규약이 이터레이터 프로토콜이라 하며, 이터레이터 프로토콜을 준수한 객체를 이터레이터라한다. 이터러블의 요소를 탐색하기위한 포인터 역할을 한다.

- 이터러블

Symbol.iterator를 프로퍼티 키로 사용한 메서드를 직접 구현하거나 프로토타입 체인을 통해 상속받은객체.

예) 배열은 Array.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다.

- 이터레이터

이터러블의 Symbol.iterator 메서드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터를 반환한다.

이 이터레이터는 next 메서드를 갖는다.

next 메서드는 이터러블의 각 요소를 순회하기 위한 포인터의 역할을 한다. 즉, next 메서드를 호출하면 이터러블을 순차적으로 한단계씩 순회하며 순회 결과를 나타내는 이터레이터 리절트 객체를 반환한다.

이터레이터 리절트 객체는 value, done을 프로퍼티로 갖는다.

# 2. 빌트인 이터러블

Array, String, Map, Set, TypedArray, arguments, DOM 컬렉션

# 3. for...of 문

이터러블을 순회하면서 이터러블의 요소를 변수에 할당한다

```jsx 
for( 변수선언문 of 이터러블 ) {...}
```

객체의 프로토타입 체인상에 존재하는 모든 프로토타입의 프로퍼티중에서 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 true 인 프로퍼티를 순회하며 열거, 프로퍼티 키가 심벌인 프로퍼티는 열거하지 않는다.

내부적으로 이터레이터의 next 메서드를 호출, 이터레이터 리절트 객체의 value 프로퍼티 값을 for...of 문의 변수에 할당한다.

# 4. 이터러블과 유사 배열 객체

마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고 length 프로퍼티를 갖는 객체를 말한다. 이터러블이 아니기 때문에 for...of 문으로 순회할수없다.

단, arguments, NodeList, HTMLCollection은 유사 배열 객체이면서 이터러블이다.

es6에서 도입된 Array.from 메서드를 사용해서 배열로 간단히 변환할수있다. 이 메서드는 유사배열 객체또는 이터러블을 인수로 전달 받는다.

# 5. 이터레이션 프로토콜의 필요성

이터러블은 for ... of 문, 스프레드 문법, 배열 디스트럭처링 할당과 같은 데이터 소비자 (data consumer)에 의해 사용되므로 데이터 공급자 (data provider)의 역할을 한다고 할 수 있다.

데이터 공급자가 이터레이션 프로토콜을 준수하도록 규정하면 데이터 소비자는 이터레이션 프로토콜만 지원하도록 구현하면 된다.

이터레이션 프로토콜은 **다양한 데이터 공급자가 하나의 순회 방식을 갖도록 규정하여 데이터 소비자가 효율적으로 공급자를 사용할 수 있도록 데이터 소비자와 데이터 공급자를 연결하는 인터페이스의 역할을 한다.**

# 6. 사용자 정의 이터러블

- 사용자 정의 이터러블 구현:
이터레이션 프로토콜을 준수하지 않는 일반 객체로 준수하도록 구현하면 사용자 정의 이터러블이 된다.

- 이터러블을 생성하는 함수
- 이터러블이면서 이터레이터인 객체를 생성하는 함수
- 무한 이터러블과 지연 평가 :
지연평가란 데이터가 필요한 시점 이전까지는 미리 데이터를 생성하지 않다가 데이터가 필요한 시점이 되면 그때야 비로소 데이터를 생성하는 기범. 평가 결과가 필요할때까지 평가를 늦추는 기법이다.