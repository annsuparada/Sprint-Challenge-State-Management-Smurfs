import React from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions'
import Loader from 'react-loader-spinner'

import Smurf from './Smurf'

const SmurfsList = props => {
    console.log("props",props)
    console.log(`props.smurfs`,props.smurfs)
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
                    'NOCK NOCK NOCK...'
                )}
            </button>

            {props.smurfs && props.smurfs.map(item => 
                <Smurf key={item.name} smurf={item} /> 
            )}
            
            
            <h1>{props.test}</h1>
        
        </>
    )
}

const mapStateToProps = state => {
    return{
        isLoading: state.isLoading,
        smurfs: state.smurfs,
        
    }
}

export default connect(
    mapStateToProps, 
    { getData }
    )(SmurfsList);
