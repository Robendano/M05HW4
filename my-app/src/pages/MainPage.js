import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "../../components/User";
import { addUserAction, changeInputAction, deleteAllUsersAction } from "../../redux/actions";

function UsersPage() {
  const [localValue, setLocalValue] = useState("");

  const users = useSelector((state) => state.usersReducer.users);

  const dispatch = useDispatch();

  const changeInput = (event) => {
    const value = event.target.value;
    dispatch(changeInputAction(value));
    setLocalValue(value);
  };

  const addUser = () => {
    dispatch(addUserAction(localValue));
  };

  const deleteAllUsers = () => {
    dispatch(deleteAllUsersAction());
    setLocalValue("");
  };

  return (
    <div>
      <h1>{localValue}</h1>
      <input type="text" placeholder="name" value={localValue} onChange={changeInput} />
      <button onClick={addUser}>add</button>
      <button onClick={deleteAllUsers}>delete all</button>

      {users.map((user, idx) => (
        <User key={idx} userName={user} />
      ))}
    </div>
  );
}

export default UsersPage;
