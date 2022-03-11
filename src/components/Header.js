import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import renderBrands from '../utils/renderBrands'
import {Link, useLocation} from 'react-router-dom'

function Header() {
  const [marcas, setMarcas] = useState(null)
  const dispatch = useDispatch()
  const location = useLocation()

  const handleChange = ({target}) => {
      dispatch({type:'CHANGE_BRAND', payload: target.value})
  }

  useEffect(()=>{
    axios.get('/marcas').then(res => {
      setMarcas(res.data)
    })
  }, [location.pathname])

  return (
    <header>
      {location.pathname == '/'? (
        <label>Escolha a marca:
          <select className="form-select" aria-label="Default select example" onChange={handleChange}>
            <option value='TODAS'>TODAS</option>
            {marcas && (
              renderBrands(marcas)
            )}
          </select>
        </label>
      ) : (
        <Link to='/' className='btn btn-info'>Pagina inicial</Link>
      )}
        <div className='addButtons'>
            <Link to='/adicionar/carro' 
            className={`btn btnAdd ${location.pathname === '/adicionar/carro' ? 'btn-secondary border' : 'btn-primary'}`}>
              Adicionar carro
            </Link>

            <Link to='/adicionar/marca' 
            className={`btn btnAdd ${location.pathname === '/adicionar/marca' ? 'btn-secondary border' : 'btn-primary'}`}>
              Adicionar marca
            </Link>

        </div>
    </header>
  )
}

export default Header