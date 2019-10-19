import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';
import trajects from './trajects';

export default combineReducers({
  profile,
  auth,
  trajects
});
