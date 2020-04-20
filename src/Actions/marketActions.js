import * as actionTypes from './actionTypes';
import axios from '../axios';

export const getMarketDataSuccess = ( marketData ) => {

    return {
        type: actionTypes.GET_MARKET_DATA_SUCCESS,
        marketData: marketData
    };
};

export const getMarketDataFail = ( error ) => {
    return {
        type: actionTypes.GET_MARKET_DATA_FAIL,
        error: error
    };
};

export const getMarketDataStart = () => {
    return {
        type: actionTypes.GET_MARKET_DATA_REQUEST
    };
};
export const getMarketQuotesSuccess = ( marketQuotes ) => {

    return {
        type: actionTypes.GET_MARKET_QUOTES_SUCCESS,
        marketQuotes: marketQuotes
    };
};

export const getMarketQuotesFail = ( error ) => {
    return {
        type: actionTypes.GET_MARKET_QUOTES_FAIL,
        error: error
    };
};

export const getMarketQuotesStart = () => {
    return {
        type: actionTypes.GET_MARKET_QUOTES_REQUEST
    };
};



export const getMarketData = () => {
    
    return dispatch => {
        dispatch( getMarketDataStart() );
        axios.get( `map`)
            .then( res => {
                
                let marketData = [];
                let marketIds = [];
                const totalNumOfRecords = 10; // Fetch num of records from map call
                
                marketData = res.data.data.slice(0, totalNumOfRecords); 
                const getId = marketData.map(obj => {
                    return marketIds.push(obj.id);
                });
                console.log(getId);
                dispatch(getMarketDataSuccess(marketData));
                dispatch(getMarketQuotes(marketIds));
              
            } )
            .catch( error => {
                dispatch(getMarketDataFail(error));
            } );
    };
};


export const getMarketQuotes = (ids) => {
    
    return dispatch => {
        dispatch( getMarketQuotesStart() );
        axios.get( `/quotes?id=${ids.toString()}`)
            .then( res => {
                
                let markeQuotesData = [];
                markeQuotesData = Object.values(res.data.data);
                dispatch(getMarketQuotesSuccess(markeQuotesData));
              
            } )
            .catch( error => {
                dispatch(getMarketQuotesFail(error));
            } );
    };
};
