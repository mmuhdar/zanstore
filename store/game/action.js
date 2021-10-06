import axios from "axios";

import { SET_GAMES, IS_LOADING, SET_ERROR } from "./actionType";

const setGames = (payload) => {
  const action = {
    type: SET_GAMES,
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

export const fetchGame = (url) => {
  return async (dispatch, getState) => {
    try {
      dispatch(isLoading(true));
      const { data } = await axios.get(url);
      dispatch(setGames(data));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(isLoading(false));
    }
  };
};
