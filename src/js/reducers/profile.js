import {
  GET_PROFILE,
  CLEAR_PROFILE,
  PROFILE_FAIL,
  SET_PROFILE
} from '../constants/actions-types';

const initialState = {
  profile: {
    birthDate: '',
    numTel: '',
    miniBio: '',
    gender: '',
    driverLicence: '',
    discussion: '',
    smoke: '',
    ponctuality: '',
    music: '',
    car_modele: '',
    car_plateNum: ''
  },
  loading: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case CLEAR_PROFILE:
    case PROFILE_FAIL:
      return {
        ...state,
        profile: {
          birthDate: '',
          numTel: '',
          miniBio: '',
          gender: '',
          driverLicence: '',
          discussion: '',
          smoke: '',
          ponctuality: '',
          music: '',
          car_modele: '',
          car_plateNum: ''
        },
        loading: false
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    default:
      return state;
  }
};
