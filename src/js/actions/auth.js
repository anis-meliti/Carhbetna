import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_FAIL
} from '../constants/actions-types';

//USER LOADER
export const loadUser = () => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);

  try {
    const res = await axios.get('/login');
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (error) {
    console.error(error.msg);
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

export const register = ({
  name,
  lastName,
  mail,
  password,
  avatar
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ name, lastName, mail, password, avatar });
  try {
    const res = await axios.post('/register', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    // console.error('this error from auth.js', err.message);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => console.error(error.msg, 'danger'));
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

export const loginUser = ({ mail, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ mail, password });
  try {
    const res = await axios.post('/login', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    console.error('this error from auth.js', err.message);
  }
  // LOGOUT / clear profile
};
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
