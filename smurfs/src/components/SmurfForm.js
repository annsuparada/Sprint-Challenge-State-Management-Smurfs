import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { addData } from '../actions'

const SmurfsForm = props => {

    const name = useRef(null)
    const age = useRef(null)
    const height = useRef(null)


    const submit = (e) => {
        e.preventDefault()
        console.log(name.current.value)
        props.addData({
            name: name.current.value, 
            age: age.current.value, 
            height: height.current.value})
    }

    return (
        <>
            <form onSubmit={submit}>
                <label>Name</label> <br/>
                <input type="text" ref={name} /> <br/>
                
                <label>Age</label> <br/>
                <input type="text"  ref={age} /> <br/>
                
                <label>Height</label> <br/>
                <input type="text"  ref={height} /> <br/>

                <button className="form-btn" onClick={submit}>Add</button>
            </form>
           
        
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
    { addData }
    )(SmurfsForm);