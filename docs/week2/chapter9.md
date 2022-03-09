---
sidebar_position: 9
---

# 9장 타입 변환과 단축 평가

## 9.1 타입 변환이란?

---

자바스크립트의 모든 값은 타입이 있다. 값의 타입은 개발자의 의도에 따라 다른 타입으로 변환할 수 있다. 개발자가 의도적으로 값의 타입을 변환하는 것을 **명시적 타입 변환** 또는 **타입 캐스팅**이라 한다.

```javascript
var x = 10;

var str = x.toString();
console.log(typeof str, str); // string 10

```

개발자의 의도와는 상관없이 표현식을 평가하는 도중에 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환한다. 이를 **암묵적 타입 변환** 또는 **타입 강제 변환**이라 한다.

```javascript
var x = 10;

var str = x + '';
console.log( type of str, str); // string 10
```

의도적으로 타입을 변환할 때 toString() 메소드를 사용하지 않고, x + '' 방식을 사용한 적이 꽤 있는데 의도적으로 타입을 변환 했으니 **명시적 타입 변환**의 의미지만 **암묵적 타입 변환**이 된 것이다.
두 방식 모두 잘못된 것은 아니지만 다른 개발자들과의 협업을 생각하면 toString을 사용해 명시적으로 표현하는 것이 더 좋다고 생각한다.

## 9.2 암묵적 타입 변환

---

### 문자열 타입으로 변환

```javascript
1 + '2' // '12'
null + '' // 'null'
undefined + '' // 'undefined'
```

### 숫자 타입으로 변환

```javascript
1 - '1' // 0
1 * '10' // 10
1 / 'one' // NaN
+'' // 0
+'0' // 0
+'1' // 1
+ 'string' // NaN
+true // 1
+false // 0
+null // 0
+undefined // NaN
```

빈 문자열(''), 빈 배열([]), null, false는 0으로 true는 1로 변환된다. 객체와 빈 배열이 아닌 배열 undefined는 변환되지 않아 NaN이 된다는 것에 주의하자.

### 불리언 타입으로 변환

---

자바스크립트 엔진은 조건식의 평가 결과를 불리언 타입으로 암묵적 타입 변환 한다.

이떄 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 평가되는 값) 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다.

```javascript
if('') console.log('1');
if(true) console.log('2');
if(0) console.log('3');
if('str') console.log('4');
if(null) console.log('5');

// 2 4
```

Falsy 값 외의 모든 값을 모두 true로 평가되는 Truthy 값이다.

- Falsy로 평가되는 값 : false, undefined, null, 0, -0, NaN, ''(빈 문자열)


## 9.3 명시적 타입 변환

---

개발자의 의도에 따라 명시적으로 타입을 변경하는 방법은 다양하다. 표준 빌트인  생성자 함수(String, Number, Boolean)를 new 연산자 없이 호출하는 방법과 빌트인 메서드를 사용하는 방법, 그리고 앞에서 살펴 본 암묵적 타입 변환을 이용하는 방법이 있다.

### 문자열 타입으로 변환

---

1. String 생성자 함수를 new 연산자 없이 호출하는 방법
2. Object.prototype.toString 메서드를 사용하는 방법
3. 문자열 연결 연산자를 이용하는 방법

```javascript
String(1); // '1'
String(NaN); // 'NaN'

(1).toStriing(); // '1'
(NaN).toString()l // 'NaN'

1 + ''; // '1'
NaN + ''; // 'NaN'
```

9.1에서 암묵적 타입 변환으로 
```javascript
var x = 10;
var str = x + '';
```
을 예시로 들었는데 여기서는 또 명시적 타입 변환이라고 해서 암묵적인지, 명시적인지 혼란이 생길 것 같다.

### 숫자 타입으로 변환

---

숫자 타입이 아닌 값을 숫자 타입으로 변환하는 방법은 다음과 같다.

1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
2. parseInt, parseFloat 함수를 사용하는 방법
3. + 단항 산술 연산자를 이용하는 방법
4. * 산술 연산자를 이용하는 방법

```javascript
Number('0'); // 0
Number(true); // 1
parseInt('0'); // 0
parseFloat('10.53'); // 10.56
+'0'; // 0
'0' * 1; // 0
'-1' * 1; // 1
```

### 불리언 타입으로 변환

불리언 타입이 아닌 값ㅇ르 불리언 타입으로 변환하는 방법은 다음과 같다.
1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
2. ! 부정 논리 연산자를 두 번 사용하는 방법

```javascript
Boolean('x'); // true
Boolean(''); // false
Boolean('false'); // true
Boolean(0); // false
Boolean(1); // true
Boolean(NaN); // false
Boolean(null); // false
Boolean(undefined); // false

!!'x'; // true
!!''; // false
!!0; // false
!!NaN // false
!!null; // false
!!undefined; // false
```

## 9.4 단축 평가
---

### 논리 연산자를 사용한 단축 평가

```javascript
'Cat' && 'Dog' // 'Dog'
'Cat' || 'Dog' // 'Cat'
```

논리곱 연산자는 두 개의 피연산자 모두 true로 평가될 때 true를 반환한다. 논리곱 연산자는 좌항에서 우항으로 평가가 진행된다. 첫 번째 연산자 'Cat'은 Truthy 값이다. 하지만 이 시점 까지는 위 표현식을 평가할 수 없다. 결국 두 번째 피연산자 'Dog'가 표현식의 평가 결과를 결정한다. 논리곱 연산자는 논리 연산의 결과를 결정하는 두 번째 피연산자, 즉 문자열 'Dog'를 그대로 반환한다. 논리합(||) 연산자도 동일하게 동작한다

논리합 연산자는 논리 연산의 결과를 결정한 첫 번 째 피연산자, 즉 문자열 'Cat'을 그대로 반환한다.

이처럼 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환하는데 이를 단축평가라 한다. 단축 평가는 표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것을 말한다.


