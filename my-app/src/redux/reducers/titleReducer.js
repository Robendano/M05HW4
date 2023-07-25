import { types } from "../types"

const initialState = {
   title: 'old title'
}

export default function titleReducer(state = initialState, action) {
   switch(action.type) {
      case types.CHANGE_TITLE:
         return {...state, title: 'new title'}
      case types.WITH_PARAMS: 
         return {...state,title: action.payload}
      default: return state
   }
}