import axios from 'axios'

export const FETCH_SMURFS_DATA_START = 'FETCH_SMURFS_DATA_START';
export const FETCH_SMURFS_DATA_SUCCESS = 'FETCH_SMURFS_DATA_SUCCESS';
export const FETCH_SMURFS_DATA_FAILURE = 'FETCH_SMURFS_DATA_FAILURE';

export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURFS_DATA_START })
    }
} 