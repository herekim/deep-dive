---
sidebar_position: 35
---

# Questions

## 1 - 3. 다음 정규 표현식은 무엇을 의미하는가?


```jsx
//1.
/^https?ㅣ\/\//.test(url);

//2.
/^\d+$/.test(target); 

//3.
(/[^A-Za-z0-9]/gi).test(taret);
```

## 4. 이터레이션 프로토콜은 왜 필요한가?

## 5. 날짜 관련 코딩 문제

2016년 1월 1일은 금요일입니다 (실제로 금요일). 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

**제한 조건**

2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

예)

```jsx
solution(5, 24); // 'TUE'
```