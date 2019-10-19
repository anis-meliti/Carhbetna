import axios from 'axios';
import { POINT_LOADED, POINT_LOADED_FAILED } from '../constants/actions-types';

// Get Point From map

export const getPoint = point => async dispatch => {
  console.log('TCL: point', point);
  try {
    const res = await axios.get(
      ` https://api.mapbox.com/geocoding/v5/mapbox.places/${point.depPoint}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
    );
    console.log('TCL: res', res);
    dispatch({
      type: POINT_LOADED,
      payload: res.data
    });
    console.log('TCL: res.data.features', res.data.features);
  } catch (error) {
    dispatch({
      type: POINT_LOADED_FAILED,
      payload: error
    });
  }
};
