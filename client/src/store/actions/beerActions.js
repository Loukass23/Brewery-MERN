import axios from 'axios';
import { config } from '../../config/breweryDBConfig';


// export const getBeers = () => {
//     return {
//         type: 'GET_BEERS'

//     }

// }

export const getBeers = () => {
  return dispatch => {
    return axios
      .get(config.beers_URL)
      .then(res => {
        dispatch({
          type: 'GET_BEERS',
          user: res.data
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: 'GET_BEERS_ERROR',
          err
        });
      });
  };
};
export const getBreweries = () => {
  return dispatch => {
    return axios
      .get(config.breweries_URL)
      .then(res => {
        dispatch({
          type: 'GET_BREWERIES',
          user: res.data
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: 'GET_BREWERIES_ERROR',
          err
        });
      });
  };
};
