---
sidebar_position: 30
---

# 30장 Date

표준 빌트인 객체 Date는 날짜와 시간을 위한 메서드를 제공하는 빌트인 객체이면서 생성자 함수이다.

UTC는 협정 세계시 (국제표준시) or GMT (그리니치 평균시)를 말하고, KST는 표준시보다 9시간 빠르다.

# 1. Date 생성자 함수

내부적 정수값 24h * 60m * 60s * 1000ms (밀리초) 로 나타낸다.

- new Date(); 현재 날짜 date객체 반환
- new Date(milliseconds)
- new Date(dateString)
- new Date(year, month [, day, hour, minute, second, millisecond])

# 2. Date 메서드

- Date.now
- Date.parse
- Date.UTC
- Date.prototype.getFullYear
- Date.prototype.setFullYear
- Date.prototype.getMonth
- Date.prototype.setMonth
- Date.prototype.getDate
- Date.prototype.setDate
- Date.prototype.getDay
- Date.prototype.setDay
- Date.prototype.getHours
- Date.prototype.setHours
- Date.prototype.getMinutes
- Date.prototype.setMinutes
그 밖의 ... Seconds, Milliseconds 등

- Date.prototype.getTime (ms)
- Date.prototype.setTime
- Date.prototype.getTimezoneOffset: UTC와 로캘 시간과의 차이를 분단위로 반환
- Date.prototype.toDateString
- Date.prototype.toTimeString
- Date.prototype.toISOString
- Date.prototype.toLocaleString
- Date.prototype.toLocaleTimeString
