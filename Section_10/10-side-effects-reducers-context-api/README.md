# 230111

## Effect (Side Effect)

- Main Job: Render UI & React to User Input
- Side Effect: Anything Else
    - Store Data, Send Http Requests...
    - React 컴포넌트가 화면에 렌더링된 이후에
비동기로 처리되어야 하는 부수적인 효과들을 Side Effect라고 한다.
    - React에 의해 state가 변경될 때마다 App.js는 자동으로 실행되므로 http 리퀘스트를 직접 보내게 되면 무한 루프에 빠질 수 있다.

### useEffect(() => {...}, [ dependencies ]);

```javascript
const [isLoggedIn, setIsLoggedIn] = useState(false);

const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

if (storedUserLoggedInInformation === "1") {
  // true로 설정 되면 처음부터 또 다시 실행됨
  // 루프에 빠질 수 있음
  setIsLoggedIn(true);
}
```

```javascript
useEffect(() => {
  const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
  }
}, []);
```
- 앱이 시작될 때 한 번 실행.
- dependency가 바뀐 이후 모든 컴포넌트 재평가 후에 실행.
- 내장 API 함수는 추가할 필요 없다.

### Debouncing

```javascript
useEffect(() => {
  const identifier = setTimeout(() => {
    setFormIsValid(enteredEmail.includes("@") && enteredPassword.trim().length > 6);
  }, 500);

  return () => {
    console.log("CLEAN UP");
    clearTimeout(identifier);
  };
}, [enteredEmail, enteredPassword]);
```
- 클린업 함수는 모든 새로운 side effect 함수가 실행되기 전, 컴포넌트가 제거되기 전에 실행됨
- 첫 번째 side effect 함수가 실행되기 전에는 실행되지 않음, 그 이후에 실행됨
- 위에서는 클린업 함수에서 clearTimeout을 호출하여 해당 Timeout을 지움
- 계속 Timeout을 제거하다가 user input이 멈췄을 때 500ms 뒤 Valid check
