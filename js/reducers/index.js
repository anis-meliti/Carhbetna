import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';
import preference from './preference';

export default combineReducers({
  preference,
  profile,
  auth
});
