import React from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../../components/User";
import { fetchUsersAction } from "../../redux/actions/actions";

function UsersPage() {

    const dispatch = useDispatch()
    const { users } = useSelector(state => state.usersReducer)

    const getUsers = () => {
        dispatch(fetchUsersAction())
    }

    return (
        <div>
            <button onClick={getUsers}>get user</button>
            {users.map(user => <User userInfo={user} />)}
        </div>
    )
}

export default UsersPage