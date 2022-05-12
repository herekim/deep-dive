---
sidebar_position: 43
---

### 1. 요소 노드, 어트리뷰트 노드, 텍스트 노드
### 2. 정답
  - XSS공격에 취약점이 있기 때문에 사용자로 부터 입력받은 콘텐츠(untrusted data: 댓글, 사용자 이름 등)를 추가할 때 주의하여야 한다.
  - 해당 요소의 내용을 덮어 쓴다. 즉, HTML을 다시 파싱한다. 
### 3. 복수
### 4. 단수. 복수로 선택된 경우 가장 첫번째 요소 반환
### 5.  textContent, DOM 조작 방식
  - 이유 : innerHTML과 insertAdjacentHTML()은 크로스 스크립팅 공격(XSS: Cross-Site Scripting Attacks)에 취약하다. 따라서 untrusted data의 경우, 주의하여야 한다. 텍스트를 추가 또는 변경시에는 textContent, 새로운 요소의 추가 또는 삭제시에는 DOM 조작 방식을 사용하도록 한다.
