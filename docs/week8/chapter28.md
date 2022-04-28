---
sidebar_position: 28
---

# 28장 Number

# 1. Number 생성자 함수

인수를 전달하지 않고 new 연산자와 함께 호출하면 [[NumberData]] 내부 슬롯에 0을 할당한 Number 래퍼 객체를 생성한다.

인수로 숫자가 아닌 값을 전달하면 숫자로 강제 변환되거나 or NaN을 리턴한다.

new 연산자를 사용하지 않고 호출하면 인스턴스가 아닌 숫자를 반환한다.

```jsx
Number(’0’);
```

# 2. Number 프로퍼티

- Number.EPSILON: 부동소수점으로 인해 발생하는 오차 해결
- Number.MAX_VALUE: 가장 큰 양수값
- Number.MIN_VALUE: 가장 작은 양수값
- Number.MAX_SAFE_INTEGER
- Number.MIN_SAFE_INTEGER
- Number.POSITIVE_INFINITY
- Number.NEGATIVE_INFINITY
- Number.NaN

# 3. Number 메서드

- Number.isFinite (숫자로 암묵적 변환 X): 빌트인 전역 함수 isFinite과 다름
- Number.isInteger (숫자로 암묵적 변환 X)
- Number.isNaN (숫자로 암묵적 변환 X)
- Number.isSafeInteger  (숫자로 암묵적 변환 X)
- Number.prototype.toExponential 지수표기법으로 변환하여 문자열로 반환
- Number.prototype.toFixed: 반올림하여 문자열을 반환한다. 소숫점 자릿수를 나타내는 정수값 인수로 전달.
- Number.prototype.toPrecision
- Number.prototype.toString