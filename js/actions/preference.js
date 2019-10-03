import axios from 'axios';
import { GET_PREFERENCE, ADD_PREFERENCE } from '../constants/actions-types';

// Get the current user preference

export const getPreference = () => async dispatch => {
  try {
    const res = await axios.get('/preference');
    dispatch({
      type: GET_PREFERENCE,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
  }
};

// Update / create a profile
export const setPreference = (
  { discussion, smoke, music },
  token
) => async dispatch => {
  const config = {
    headers: {
      'x-auth-token': token,
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    discussion,
    smoke,
    music
  });
  try {
    const res = await axios.post('/profile', body, config);
    dispatch({
      type: ADD_PREFERENCE,
      payload: res.data
    });
    dispatch(getPreference());
  } catch (error) {
    console.error(error);
  }
};

//Logout
export const clearProfile = () => dispatch => {
  dispatch({ type: CLEAR_PROFILE });
};
