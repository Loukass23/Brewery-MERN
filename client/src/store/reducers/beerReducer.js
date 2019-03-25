const initState = {};

const beerReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_BEERS':
      return {
        ...state,
        beers: action.user
      };
    case 'GET_BEERS_ERROR':
      console.log('Beers fetch error', action.err);
      return state;
    case 'GET_BREWERIES':
      return {
        ...state,
        brewery: action.user
      };
    case 'GET_BREWERIES_ERROR':
      console.log('Brewery fetch error', action.err);
      return state;
    default:
      return state;
  }
};

export default beerReducer;
