# 230110

## 문제점 1
```javascript
// Wrong!!!
return (
  <h2>Hi there!</h2>
  <p>This does not work :(</p>
);

// OK
return (
  <div>
	<h2>Hi there!</h2>
	<p>This does not work :(</p>
  </div>
);
```
- You can't return more than one "root" JSX element
(you also can't store more than one "root" JSX element in a variable)

- Doesn't have to be a `<div>` - ANY element will do the trick.

### "\<div\> soup"
- In bigger apps, you can easily end up with tons of unnecessary `<div>`s
which add no semantic meaning or structure to the page but are only there because of React's JSX requirement.

## 해결책 1
1. props.children을 return하는 Wrapper로 감싸기
    ```javascript
    // Wrapper.js
    const Wrapper = (props) => {
      return props.children;
    };
    
    export default Wrapper;
    ```
2. <React.Fragment>, <> 사용하기
    ```javascript
    return (
      <React.Fragment>
        <h2>Hi there!</h2>
    	<p>This does not work :(</p>
      </React.Fragment>
    );
    
    // if Build Workflow supports
    return (
    	<>
    		<h2>Hi there!</h2>
    		<p>This does not work :(</p>
    	</>
    );
    ```
- Empty wrapper component: It doesn't render any real HTML element to the DOM.
- But it fulfills React's JSX requirement.

## 문제점 2
```javascript
// Works But not Ideal
return (
  <React.Fragment>
    <MyModal />
    <MyInputForm />
  </React.Fragment>
);

// Rendered
<section>
  <h2>Some other content</h2>
    <div class="my-modal">
      <h2>A Modal Title!</h2>
    </div>
  <form>
    <label>Username</label>
    <input type="text"/>
  </form>
</section>
```
- Having this nested modal isn't ideal. 
- It is an overlay to the entire page after all (that's similar for side-drawers, other dialogs...)
- React-Dom is kind of adapter for react to the browser.

## 해결책 2
```javascript
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

// index.html
...
    <div id="backdrop-root"></div>
    <div id="overlay-root"></div>
    <div id="root"></div>
...
```

- `ReactDOM.createPortal(children: ReactNode, container: Element | DocumentFragment, key?: null | string)`
- Portal을 이용해서 원하는 위치에 렌더할 수 있다.

## useRef
```javascript
import React, { useRef } from "react";

const AddUser = (props) => {
  const nameInputRef = useRef();
  ...
  return (
    ...
    <input
        id="username"
        type="text"
        ref={nameInputRef}
    />
  );
};
```
- ref에는 실제 DOM 노드가 저장된다.
- DOM은 React에 의해서만 조작되어야 하므로 건드리지 않는게 좋다.
- 값만 읽어올 때는 state보다 ref를 사용하는 것이 코드를 더 줄일 수 있다.
- state로 값을 접근하는 경우에는 `<input />`은 controlled component (제어 컴포넌트)라 한다.
    - onChange에서 변화를 감지하고 value에 다시 값을 주입한다. 
- ref로 값을 접근하는 경우에는 `<input />`은 uncontrolled component (비제어 컴포넌트)라 한다.
