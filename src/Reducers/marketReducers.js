import * as actionTypes from '../Actions/actionTypes';

const initialState = {
   marketData : [],
   marketQuotes: []

};

const getMarketDataStart = ( state, action ) => {
    return state;
};
const getMarketDataSuccess = ( state, action ) => {
    return ( state, {
        marketData: action.marketData,
        loading: false
    } );
};
const getMarketDataFail = ( state, action ) => {
    return ( state, { loading: false, error: action.error } );
};

const getMarketQuotesStart = ( state, action ) => {
    return state;
};
const getMarketQuotesSuccess = ( state, action ) => {
    return ( state, {
        marketQuotes: action.marketQuotes,
        loading: false
    } );
};
const getMarketQuotesFail = ( state, action ) => {
    return ( state, { loading: false, error: action.error } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case actionTypes.GET_MARKET_DATA_REQUEST: return getMarketDataStart( state, action );
        case actionTypes.GET_MARKET_DATA_SUCCESS: return getMarketDataSuccess( state, action );
        case actionTypes.GET_MARKET_DATA_FAIL: return getMarketDataFail( state, action );

        case actionTypes.GET_MARKET_QUOTES_REQUEST: return getMarketQuotesStart( state, action );
        case actionTypes.GET_MARKET_QUOTES_SUCCESS: return getMarketQuotesSuccess( state, action );
        case actionTypes.GET_MARKET_QUOTES_FAIL: return getMarketQuotesFail( state, action );
        
        default: return state;
    }
};

export default reducer;