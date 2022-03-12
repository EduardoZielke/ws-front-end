import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
import Table from './components/Table';
import {useSelector, useDispatch} from 'react-redux'
import Loading from './components/Loading/index'

function App() {
  const [carros, setCarros] = useState(null)
  const pesquisaState = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(()=>{
    axios.get('https://ws-back-end.herokuapp.com/carros').then(res => {
      setCarros(res.data)
    })
  }, [])

  useEffect(()=>{
    dispatch({type:'CHANGE_BRAND', payload:'TODAS'})
  }, [dispatch])

  return (carros && pesquisaState ?
    <div className="App container">
      <Table carros={carros} pesquisa={pesquisaState}/>
    </div> : <Loading wrapperPx='500' loadingPx='50' borderPx='5'/>
  );
}

export default App;
