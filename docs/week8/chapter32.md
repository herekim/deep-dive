---
sidebar_position: 32
---

# 32장 String

# 1. String 생성자 함수

생성자 함수 객체이므로 new 연산자와 함께 호출할 수 있고, 인수를 전달하지 않으면 [[StringData]] 내부 슬롯에 빈 문자열을 할당한 string 래퍼 객체를 생성한다.

String 래퍼 객체: length 프로퍼티, 인덱스는 프로퍼티 키, 문자를 프로퍼타 값으로 갖는 유사 배열 객체면서 이터러블이다. 인덱스로 문자에 접근할 수 있다. 문자열은 원시 값으므로 변경할 수 없다. (에러 발생 X)

인수로 문자열이 아닌 값을 전달하면 문자열로 강제 변환한 후 생성한다.

new 연산자 없이 사용하면 인스턴스가 아닌 문자열을 반환한다.

# 2. length 프로퍼티

# 3. String 메서드

String 메서드는 언제나 새로운 문자열을 반환한다.

문자열은 변경 불가능한 원시 값이기 때문에 String 객체도 읽기 전용 객체로 제공된다.

- String.prototype.indexOf
- String.prototype.search - 인수로 정규 표현식을 전달
- String.prototype.includes
- String.prototype.endsWith
- String.prototype.chartAt - 인수는 인덱스
- String.prototype.substring
- String.prototype.slice
- String.prototype.toUpperCase
- String.prototype.toLowerCase
- String.prototype.trim
- String.prototype.repeat - 인수 숫자만큼 문자열 반복
- String.prototype.replace - 두번째 인수로 치환 함수 전달할 수 있음. 첫번째 인수로 전달한 문자열 또는 정규 표현식에 매치한 결과를 두번째 인수로 전달한 치환 함수의 인수로 전달
- String.prototype.split