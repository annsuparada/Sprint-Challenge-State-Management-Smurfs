import React from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions'
import Loader from 'react-loader-spinner'

import Smurf from './Smurf'

const SmurfsList = props => {
    return (
        <>
        <button className="btn" onClick={props.getData}>
            {props.isLoading ? (
                <Loader
                type="TailSpin"
                color="#00BFFF"
                height="100"
                width="100" />
            ) : (
                'Click'
            )}
        </button>
        <Smurf />
        <h1>{props.test}</h1>
        
        </>
    )
}

const mapStateToProps = state => {
    return{
        test: state.test,
        isLoading: state.isLoading,
        smurfs: state.smurfs
    }
}

export default connect(
    mapStateToProps, 
    {getData}
    )(SmurfsList);
