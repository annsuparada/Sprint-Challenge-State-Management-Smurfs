import React from 'react'
import { connect } from 'react-redux'

import Smurf from './Smurf'

const SmurfsList = props => {
    return (
        <>
        <Smurf />
        <h1>{props.test}</h1>
        <button>Click</button>
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
    {}
    )(SmurfsList);
