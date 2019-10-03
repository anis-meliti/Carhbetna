import { GET_PROFILE, CLEAR_PROFILE } from '../constants/actions-types';

const initialState = {
  profile: {
    birthDate: '',
    numTel: '',
    miniBio: '',
    gender: '',
    driverLicence: ''
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
      return {
        ...state,
        profile: {
          birthDate: '',
          numTel: '',
          miniBio: '',
          gender: '',
          driverLicence: ''
        },
        loading: false
      };

    default:
      return state;
  }
};
