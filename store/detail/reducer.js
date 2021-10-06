import { SET_DETAIL, IS_LOADING, SET_ERROR } from "./actionType";

const initialState = {
  detail: {},
  isLoading: false,
  error: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
