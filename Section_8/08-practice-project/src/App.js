import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {/* 배열을 props.users에 추가해서 배열로 특정  */}
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
