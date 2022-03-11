import React from 'react'
import {Link} from 'react-router-dom'

function Added({message}) {

    return (
    <div className='added container'>
        <div className='added-title'>
        <h1>{message}</h1>
        </div>
        <div className='addedButtons'>
            <Link to='/' className='btn btn-lg btn-success'>Listar veículos</Link>
        </div>
    </div>
  )
}

export default Added