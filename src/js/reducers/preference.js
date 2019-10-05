import {
  GET_PREFERENCE,
  // ADD_PREFERENCE,
  CLEAR_PREFERENCE
} from '../constants/actions-types';

const initialState = {
  preference: {
    discussion: '',
    smoke: '',
    music: ''
  },
  loading: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PREFERENCE:
      return {
        ...state,
        preference: payload,
        loading: false
      };
    case CLEAR_PREFERENCE:
      return {
        ...state,
        preference: {
          discussion: '',
          smoke: '',
          music: ''
        },
        loading: false
      };

    default:
      return state;
  }
};
