import { beers } from '../../config/JSONBeers'


const initState = {}


const beerReducer = (state = initState, action) => {
    console.log(action)
    switch (action.type) {
        case 'GET_BEERS':
            return {
                ...state,
                beers: action.user
            }
        case 'GET_BEERS_ERROR':
            console.log('Beers fetch error', action.err)
            return state;
        default:
            return state;
    }



}


export default beerReducer