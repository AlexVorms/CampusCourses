import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

let Preloader = (props) =>{
    return (
        <div className='center'>
            <Spinner animation="border" />
        </div>
    )
}
export default Preloader;