import React from 'react'

const Smurf = props => {
    return (
        <>
            <h1>{props.smurf.name}</h1>
            <h3>Age: {props.smurf.age}</h3>
            <h3>Height: {props.smurf.height}</h3>
        </>
    )
}

export default Smurf;