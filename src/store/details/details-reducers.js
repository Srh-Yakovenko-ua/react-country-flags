import {clearDetails, SET_COUNTRY, SET_ERROR, SET_LOADING, SET_NEIGHBORS} from './details-actions';

const initialState = {
    currentCountry: null,
    status: 'idle',
    error: null,
    neighbors: []
}

export const detailsRegion = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING :
            return {
                ...state,
                error: null,
                status: 'loading',
            }
        case SET_ERROR :
            return {
                ...state,
                status: 'rejected ',
                error: action.payload,
            }
        case SET_COUNTRY :
            return {
                ...state,
                currentCountry: action.payload,
                status: 'received',
                error: null,
            }
        case SET_NEIGHBORS :
            return {
                ...state,
                neighbors : action.payload
            }
        case clearDetails :
            return initialState;
        default :
            return state
    }
}