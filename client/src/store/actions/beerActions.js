import axios from 'axios';
import { config } from '../../config/breweryDBconfig'

// export const getBeers = () => {
//     return {
//         type: 'GET_BEERS'

//     }

// }

export const getBeers = () => {
    return (dispatch) => {
        return axios.get(config.URL)
            .then((res) => {
                dispatch({
                    type: 'GET_BEERS',
                    user: res.data
                })
            }).catch((err) => {
                console.log(err)
                dispatch({
                    type: 'GET_BEERS_ERROR',
                    err
                })
            })
    }

}
