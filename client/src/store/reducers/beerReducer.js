import { beers } from '../../config/JSONBeers'


const initState = beers


const beerReducer = (state = initState, action) => {
    console.log(state)
    switch (action.type) {
        case 'GET_BEERS':
            return {
                ...state,
                beers: action
            }
        case 'GET_BEERS_ERROR':
            console.log('Beers fetch error', action.err)
            return state;
        default:
            return state;
    }



}


export default beerReducer