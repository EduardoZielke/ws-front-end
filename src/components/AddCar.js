import axios from 'axios'
import React, { useEffect, useState } from 'react'
import renderBrands from '../utils/renderBrands'
import Added from './Added'
import Loading from './Loading'

function AddCar() {
  const [marcas, setMarcas] = useState(null)
  const [pronto, setPronto] = useState(false)
  const [reqApi, setReqApi] = useState(false)
  const [values, setValues] = useState()
  const [message, setMessage] = useState()

  useEffect(()=>{
    axios.get('https://ws-front-end.herokuapp.com/marcas').then(res => {
      setMarcas(res.data)
    })
  }, [])

  function handleChange() {
   let marca_nome = document.getElementById('marca_nome').value
   let nome_modelo = document.getElementById('nome_modelo').value
   let ano = document.getElementById('ano').value
   let combustivel= document.querySelector('input[name="combustivel"]:checked').value
   let num_portas = document.getElementById('num_portas').value
   let valor_fipe = document.getElementById('valor_fipe').value
   let cor = document.getElementById('cor').value

    if(
      marca_nome !== 'nada' &&
      nome_modelo &&
      ano &&
      num_portas &&
      valor_fipe &&
      cor
      ){
        setPronto(true)
        setValues({
          marca_nome,
          nome_modelo,
          ano,
          combustivel,
          num_portas,
          valor_fipe,
          cor
        })
      } else {
        setPronto(false)
      }
  }

  function handleSubmit(e) {
    e.preventDefault()
    setReqApi(true)
    axios.post('https://ws-back-end.herokuapp.com/carros', values).then((res) => {
      setMessage(res.data.message)
    })
  }

  return (!message ?
      
    <div className='container add'>
      <form action='/carros' method='POST' className='formAddCar shadow' onChange={handleChange}>
        <div className='car-details'>
          <div className='input-box'>
            <span className='details'>Marca do carro</span>
            <select name='marca_nome' id='marca_nome'>
              <option defaultValue value='nada'>Selecione</option>
              {marcas && (
                renderBrands(marcas)
              )}
            </select>
          </div>
          <div className='input-box'>
            <span className='details'>Nome do modelo</span>
            <input type='text' name='nome_modelo' id='nome_modelo' placeholder='Digite o modelo' required/>
          </div>
          <div className='input-box'>
            <span className='details'>Ano do carro</span>
            <input type='number' name='ano' id='ano' placeholder='Digite o ano' required/>
          </div>
          <div className='input-box'>
            <span className='details'>Quantidade de portas</span>
            <input type='number' name='num_portas' id='num_portas' placeholder='N° de portas' required/>
          </div>
          <div className='input-box'>
            <span className='details'>Valor da fipe</span>
            <input type='number' name='valor_fipe' id='valor_fipe' placeholder='Digite o valor da fipe' required/>  
          </div>
          <div className='input-box'>
            <span className='details'>Cor do veículo</span>
            <input type='text' name='cor' id='cor' placeholder='Digite a cor do veículo' required/>
          </div>
        </div>
        <div className='fuel-details'>
          <input type='radio' name='combustivel' value='gasolina' defaultChecked id='dot-1' required/>
          <input type='radio' name='combustivel' value='etanol' id='dot-2' required/>
          <input type='radio' name='combustivel' value='diesel' id='dot-3' required/>
          <span className='fuel-title'>Combustível</span>
          <div className='category'>
            <label htmlFor='dot-1'>
              <span className='dot one'></span>
              <span className='fuel'>Gasolina</span>
            </label>
            <label htmlFor='dot-2'>
              <span className='dot two'></span>
              <span className='fuel'>Etanol</span>
            </label>
            <label htmlFor='dot-3'>
              <span className='dot three'></span>
              <span className='fuel'>Diesel</span>
            </label>
          </div>
        </div>
        <div className='button'>
          {pronto ? (
            <button className='btn btn-success' onClick={handleSubmit}>
              {reqApi ? (
                <Loading loadingPx='30' borderPx='3'/>
              ) : (
                'Adicionar carro'
              )}
            </button>
          ) : (
            <input  className='btn btn-secondary' type='button' 
            onClick={(e)=>{e.preventDefault()}} value='Preencha todos os campos'/>
          )}
        </div>
      </form>
    </div> : <Added message={message}/>


  )
}

export default AddCar
