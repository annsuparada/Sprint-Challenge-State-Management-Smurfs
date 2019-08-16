import {
    FETCH_SMURFS_DATA_START,
    FETCH_SMURFS_DATA_SUCCESS,
    FETCH_SMURFS_DATA_FAILURE
} from '../actions'

const initialState ={
    smurfs: [],
    test: 'This is Testing',
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
        default: 
            return state;
    }
}