---
sidebar_position: 55
---

# 49장 Babel과 Webpack을 이용한 ES6+/ES.NEXT 개발 환경 구축

ES6+와 ES 제안 사양 (ES.NEXT) 은 브라우저에 따라 지원율이 제각각이다. 따라서 최신 ECMAScript 사양을 사용하여 프로젝트를 진행하려면 **최신 사양으로 작성된 코드를 경우에 따라 IE를 포함한 구형 브라우저에서 문제없이 동작시키기 위한 개발 환경을 구축하는 것이 필요**하다.

또 대부분의 프로젝트가 모듈을 사용하므로 모듈 로더도 필요한다. ES6 모듈은 대부분의 모던 브라우저에서 사용할 수 있다. 하지만 다음 이유로 별도의 모듈 로더를 사용하는것이 일반적이다.

- IE를 포함 구형 브라우저는 ESM을 지원하지 않는다.
- ESM을 사용하더라도 트랜스파일링이나 번들링이 필요한것은 변함없다.
- ESM이 아직 지원하지 않는 기능 (bare import 등)이 있고 점차 해결되고는 있지만 이슈가 존재한다.

트랜스파일러인 Babel과 모듈 번들러인 Webpack을 이용하여ES6+/ES.NEXT 개발환경을 구축할 수 있다. Webpack을 통해 Babel을 로드하여 최신 사양 소스코드를 IE 같은 구형 브라우저에서도 동작하도록 ES5 사양의 소스코드로 트랜스파일링도 할 수 있다.

## Babel

**Babel은 ES6+/ES.NEXT로 구현된 최신 사양의 소스코드를 IE 같은 구형 브라우저에서도 동작하는 ES5 사양의 소스코드로 변환 (트랜스파일링)** 할 수 있다.

- Babel 프리셋과 ```babel.config.json```

	Babel을 사용하려면 @babel/preset-env 를 설치해야하는데 이는 함께 사용되어야하는 babel 플러그인을 모아둔 것으로 Babel 프리셋이라 부른다. @babel/preset-env는 필요한 플러그인들을 프로젝트 지원 환경에 맞춰 동적으로 결정해 준다. babel.config.json에 @babel/preset-env를 사용하겠다는 명시를 해준다.

- 트랜스파일링
- Babel 플러그인 설치
- 브라우저에서 모듈 로딩 테스트
	Babel을 사용해서 Node.js환경에서 트랜스파일링된 결과를 그대로 브라우저에서 실행하면 에러가 발생한다. Webpack 을 통해 이런 문제를 해결 할 수 있다.

## Webpack

**Webpack은 의존 관계에 있는 자바스크립트, css, 이미지 등의 리소스들을 하나 (또는 여러개)의 파일로 번들링하는 모듈 번들러**다. Webpack을 사용하면 의존 모듈이 하나의 파일로 번들링 되므로 별도의 모듈 로더가 필요 없다. 자바스크립트 파일들도 하나로 번들링 하므로 html 파일에서 script 태그로 여러개의 자바스크립트 파일을 로드해야하는 번거로움도 사라진다.

- Webpack 설치
- babel-loader 설치

	Webpack 이 모듈을 번들링할 때 Babel을 사용하여 ES6+/ES.NEXT 사양의 소스코드를 ES5 사양의 소스코드로 트랜스파일링 하도록 babel-loader를 설치한다. 이후 scripts 에서 Babel 대신 webpack을 사용하도록 설정한다.

- ```webpack.config.js``` 설정

	Webpack이 실행될때 참조하는 설정 파일이다.

- ```babel-polyfill``` 설치

	ES5 사양으로 대체할 수 없는 기능은 트랜스파일링되지 않는다. 따라서 구형 브라우저에서도 Promise, Object.assign, Array.from 과 같은 객체를 사용하려면 @babel/polyfill 을 설치해야한다.

	@babel/polyfill은 개발 환경에서만 사용하는 것이 아니라 실제 운영 환경에서도 사용해야하므로 ```—save-dev``` 옵션을 지정하지 않는다.

	Webpack을 사용하는 경우에는 webpack.config.js 파일의 entry 배열에 추가한다.