import axios from "axios";

import { SET_ERROR, SET_DETAIL, IS_LOADING } from "./actionType";

const setDetail = (payload) => {
  const action = {
    type: SET_DETAIL,
    payload,
  };
  return action;
};

const isLoading = (payload) => {
  const action = {
    type: IS_LOADING,
    payload,
  };
  return action;
};

const setError = (payload) => {
  const action = {
    type: SET_ERROR,
    payload,
  };
  return action;
};

export const fetchDetail = (url) => {
  return async (dispatch, getState) => {
    try {
      dispatch(isLoading(true));
      const { data } = await axios.get(url);
      dispatch(setDetail(data));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(isLoading(false));
    }
  };
};
