# 230112

## useReducer()

` const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);`

- state: State snapshot used in the component
- dispatchFn: A function that can be used to dispatch a new action (like trigger an update of the state)
- reducerFn: A function that is triggered automatically once an action is dispatched (via dispatchFn())
    - It receives the latest state snapshot and should return the new, updated state
- 상태 업데이트 로직을 컴포넌트에서 분리할 수 있다.

```javascript
// Counter.js
// 1. dispatch에서 받아온 action을 reducer로 넘김
// 2. reducer에서 state 업데이트 (number)

import React, { useReducer } from 'react';

const reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const onDecrease = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
```

## useState() vs useReducer()


### useState()
- state가 객체, 배열 같은 것이 아니라면 간단하게 데이터나 상태를 관리할 수 있다.

### useReducer()
- useState() 보다 강력한 도구
- 더 복잡한 state 업데이트 로직을 reducer 함수로 구현할 수 있다.
- 연관된 state 조각들로 구성된 데이터를 다룰 때 (ex. form input)
- state 하나를 변경하는 다른 여러 액션들이 있을 때 유용하다.

## Context API

- Props만 이용해서 데이터를 전달하면 여러 컴포넌트를 거쳐야 하는 문제가 생김
- 어떠한 값을 전역으로 쓸 수 있게 한다.
- `createContext`로 생성
- `<MyContext.Provider value="isValid">` 로 value라는 Props로 설정하면 자식 컴포넌트들은 해당 값에 바로 접근 할 수 있다.
