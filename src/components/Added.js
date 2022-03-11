import React from 'react'
import {Link} from 'react-router-dom'

function Added({message}) {

    function handleClick() {
        window.location.reload()
    }

    return (
    <div className='added container'>
        <div className='added-title'>
        <h1>{message}</h1>
        </div>
        <div className='addedButtons'>
            <button className='btn btn-lg btn-primary' onClick={handleClick}>Adicionar mais</button>
            <Link to='/' className='btn btn-lg btn-success'>Olhar tabela</Link>
        </div>
    </div>
  )
}

export default Added