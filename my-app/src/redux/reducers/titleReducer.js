import { types } from "../types";

const initialState = {
    title: ''
}

export default function titleReducer (state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_TITLE:
            return {...state, title: 'Hello'}
            
        default: return state
    }
}