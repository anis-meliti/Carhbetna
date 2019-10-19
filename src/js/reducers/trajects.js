import { POINT_LOADED, POINT_LOADED_FAILED } from '../constants/actions-types';

const initialState = {
  traject: {
    depPoint: '',
    arrPoint: ''
  },
  loading: true,
  error: ''
};
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case POINT_LOADED:
      return {
        ...state,
        loading: false,
        traject: payload
      };
    case POINT_LOADED_FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
