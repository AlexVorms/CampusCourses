import React from 'react'
import preloader from './wait.gif'

let Preloader = (props) =>{
    return (
        <div className='justify-content-md-center'>
            <img src = {preloader}></img>
        </div>
    )
}
export default Preloader;