```javascript
// AddUser.js
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    // Card는 우리가 만든 속성이라 className을 인식하지 못한다.
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

// Card.js
import classes from "./Card.module.css";

const Card = (props) => {
  // props.className을 추가해서 Card에 className을 인식시킨다
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};
```

```javascript
// Button.js
const Button = (props) => {
  return (
  // props.children으로 button의 내용이 나오게 한다.
  // props로 type을 받고 없을 경우엔 일반적인 'button' 타입이 되게 한다.
    <button className={classes.button} type={props.type || "button"} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
```

```javascript
// UsersList.js
const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {/* users가 undefined이기 때문에 정의해주어야 함 */}
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

// App.js
function App() {
  return (
    <div>
      <AddUser />
      {/* 빈 배열을 props.users에 추가해서 배열로 특정  */}
      <UsersList users={[]} />
    </div>
  );
}
```


