import axios from 'axios';
import {
  GET_PROFILE,
  SET_PROFILE,
  CLEAR_PROFILE
} from '../constants/actions-types';

//  GET the current user Profile

export const getProfile = () => async dispatch => {
  try {
    const res = await axios.get('/profile');
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
  }
};
// Update / create a profile
export const setProfile = (
  { numTel, birthDate, gender, driverLicence, miniBio },
  token
) => async dispatch => {
  const config = {
    headers: {
      'x-auth-token': token,
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    numTel,
    birthDate,
    gender,
    driverLicence,
    miniBio
  });
  try {
    const res = await axios.post('/profile', body, config);
    dispatch({
      type: SET_PROFILE,
      payload: res.data
    });
    dispatch(getProfile());
  } catch (error) {
    console.error(error);
  }
};

//Logout
export const clearProfile = () => dispatch => {
  dispatch({ type: CLEAR_PROFILE });
};
