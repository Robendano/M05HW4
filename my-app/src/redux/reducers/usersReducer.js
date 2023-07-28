import { types } from "../types";

const initialState = {
    users: [],
    userDetails: {} 
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_USERS:
            return { ...state, users: action.payload };
        case types.GET_USER_DETAILS:
            const { id, ...userDetails } = action.payload;
            return { ...state, userDetails: { ...state.userDetails, [id]: userDetails } };
        default:
            return state;
    }
}
