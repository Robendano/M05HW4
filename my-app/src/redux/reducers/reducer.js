import { combineReducers } from "redux";
import titleReducer from "./titleReducer";
import usersReducer from "./usersReducer";


export const rootReducer = combineReducers({
   titleReducer,
   usersReducer
})