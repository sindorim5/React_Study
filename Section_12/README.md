# Look Behind the Scenes

## props
- props에서 받은 값은 부모의 state가 다른 state로 바뀔 때 변화
- props 변경, 컨텍스트 변경은 그것을 가진 Component 함수를 다시 실행시킨다
- 부모 컴포넌트가 변경되면 그 자식 컴포넌트 함수까지 재실행된다.
	
### 실제 DOM을 통한 업데이트는 가상 스냅샷 간의 차이점만 반영된다

## React.memo()
`export default React.memo(MyComponent);`
- 불필요한 재실행을 막고 성능을 최적화할 수 있다.
- 해당 컴포넌트의 props가 변화한 경우에만 재실행 된다.
- 어떤 컴포넌트를 최적화하느냐에 따라 컴포넌트를 재평가하는데 필요한 성능 비용과 props를 비교하는 성능 비용을 서로 맞바꿀 수 있다.
	- 이는 props 개수와 컴포넌트 복잡도, 자식 컴포넌트 숫자에 따라 달라진다
	- 자식 컴포넌트가 많아서 컴포넌트 트리가 매우 크면 이런 식의 최적화가 가능하다

`<Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>`
- Button을 React.memo()로 감싸도 재실행된다.
- props.onClick을 이전 값과 비교해서 재평가하기 때문이다. (=== 비교를 통과하면 됨) 
- Component가 다시 실행될 때 toggleParagraphHandler 함수가 재생성된다.
- 재생성된 함수는 내용이 같아도 주소값이 다르기 때문에 js 문법상 다른 것
- 따라서 Button은 재실행된다.
- useCallback()으로 이 문제를 해결할 수 있다.

## useCallback()
- `useCallback(fn, [dependencies])`
- 컴포넌트 실행 전반에 걸쳐 함수를 저장할 수 있게 하는 hook
- React에 함수를 저장하고 매번 실행될 때마다 해당 함수를 재생성할 필요가 없다는 것을 알릴 수 있다.
- JavaScript 함수는 클로저 -> 함수가 정의되면 JavaScript는 그 속에 사용되는 변수를 잠근다. 정확히는 함수 외부에서 사용하는 모든 변수.
- 따라서 dependencies에 추가된 변수가 변화하면 재실행된다.

## useState()의 경우
- React는 useState와 여기 전달된 기본값에 대해서는 한 번만 고려되도록 처리한다.
- 컴포넌트가 처음 렌더링될 때 useState가 실행되면 리액트가 관리하는 새로운 상태 변수를 만들게 된다.
- 그 후, React는 이 변수가 어느 컴포넌트에 속하는지 기억해둔다.
- 그리고 기본값을 사용해서 상태값을 초기화한다.
- 컴포넌트가 재평가될 때, useState가 호출되면 새로운 state가 생성되지 않는다.
- React는 필요할 경우 이 state를 업데이트한다.
- useReducer의 경우에도 동일하다.

## State Scheduling
- 동시에 여러 번의 갱신이 스케줄 될 경우에는 함수 형태로 갱신하는 것이 좋다.

## useMemo
`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`
- useMemo에 전달된 함수는 렌더링 중에 실행된다는 것에 주의
- 의존성이 변경되었을 때, Memoization된 값만 다시 계산한다.