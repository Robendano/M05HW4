import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserOneInfo } from "../redux/actions/actions";

function User({ userInfo }) {
    const dispatch = useDispatch();
    const userDetails = useSelector(state => state.usersReducer.userDetails);

    const getOneUser = () => {
        dispatch(fetchUserOneInfo(userInfo.id));
    };

    return (
        <ul>
            <li>name: {userInfo.name}</li>
            <li>email: {userInfo.email}</li>
            <li>
                <button onClick={getOneUser}>get more</button>
            </li>
            {userDetails[userInfo.id] && (
                <div>
                    <p>username: {userDetails[userInfo.id].username}</p>
                    <p>address: {userDetails[userInfo.id].address.city}, {userDetails[userInfo.id].address.street}</p>
                </div>
            )}
        </ul>
    );
}

export default User;
