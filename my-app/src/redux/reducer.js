import { calculate } from './actions';

const initialState = {
  result: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CALCULATE':
      return {
        ...state,
        result: action.payload.result,
        error: null,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
