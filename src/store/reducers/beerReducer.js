const initState = {
    "data": [
        {
            "id": "c4f2KE",
            "name": "'Murican Pilsner",
            "nameDisplay": "'Murican Pilsner",
            "abv": "5.5",
            "glasswareId": 4,
            "styleId": 98,
            "isOrganic": "N",
            "isRetired": "N",
        },
        {
            "id": "c4f2KE",
            "name": "'Murican Pilsner",
            "nameDisplay": "'Murican Pilsner",
            "abv": "5.5",
            "glasswareId": 4,
            "styleId": 98,
            "isOrganic": "N",
            "isRetired": "N",
        }
    ]
}


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