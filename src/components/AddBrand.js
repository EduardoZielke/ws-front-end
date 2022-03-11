import axios from 'axios'
import React, { useState } from 'react'
import Added from './Added'

function AddBrand() {
  const [pronto, setPronto] = useState(false)
  const [value, setValue] = useState()
  const [message, setMessage] = useState()

  function handleChange() {
    let marca_nome = document.getElementById('marca_nome').value

    if(marca_nome) {
      setPronto(true)
      setValue(marca_nome)
    } else {
      setPronto(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.post('/marcas', {marca_nome: value}).then(res=> {
      setMessage(res.data.message)
    })
  } 

  return ( !message ?
    <div className='container add'>
      <form action='/marcas' method='POST' className='shadow formAddBrand' onChange={handleChange}>
      <div className='car-details'>
          <div className='input-box'>
            <span className='details'>Nome da marca</span>
            <input type='text' name='marca_nome' id='marca_nome' placeholder='Digite a marca' required/>
          </div>
        </div>
        <div className='button'>
          {pronto ? (
            <input type='submit' className='btn btn-success' 
            onClick={handleSubmit} value='Adicionar marca'/>
          ) : (
            <input type='submit' className='btn btn-secondary' value='Adicionar marca'/>
          )}
        </div>
      </form>
    </div> : <Added message={message}/>
  )
}

export default AddBrand