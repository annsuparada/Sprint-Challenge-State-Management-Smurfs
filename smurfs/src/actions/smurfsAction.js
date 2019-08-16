import axios from 'axios'

export const FETCH_SMURFS_DATA_START = 'FETCH_SMURFS_DATA_START';
export const FETCH_SMURFS_DATA_SUCCESS = 'FETCH_SMURFS_DATA_SUCCESS';
export const FETCH_SMURFS_DATA_FAILURE = 'FETCH_SMURFS_DATA_FAILURE';
export const ADD_SMURFS = 'ADD_SMURFS';

export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURFS_DATA_START });
        axios
            .get(`http://localhost:3333/smurfs`)
            .then(res => { 
                console.log('res',res)
                dispatch( { type: FETCH_SMURFS_DATA_SUCCESS, payload: res.data })
                }
            )
            .catch(err => {
                dispatch({ type: FETCH_SMURFS_DATA_FAILURE, payload: err.response })
            })
    }
} 



export const addData =  ({ name, age, height }) => {
    console.log(name)
    return dispatch => {
        axios
            .post(`http://localhost:3333/smurfs`, {
                name,
                age,
                height
            })
            .then(res => {
                console.log('postRes', res)
                dispatch({ type: ADD_SMURFS, payload: res.data })
            })

        
}
}