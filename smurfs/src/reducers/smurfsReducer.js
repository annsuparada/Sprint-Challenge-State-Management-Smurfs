import {
    FETCH_SMURFS_DATA_START,
    FETCH_SMURFS_DATA_SUCCESS,
    FETCH_SMURFS_DATA_FAILURE
} from '../actions'

const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_SMURFS_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            } 
        case FETCH_SMURFS_DATA_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: ''
            }
        case FETCH_SMURFS_DATA_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    error: 'The API is down. Please try again later'
                }
        default: 
            return state;
    }
}