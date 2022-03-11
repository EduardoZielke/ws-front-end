import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AddCar from './components/AddCar'
import AddBrand from './components/AddBrand'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import searchReducer from './reducers/searchReducer'

const store = createStore(searchReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='adicionar'>
          <Route path='carro' element={<AddCar/>}/>
          <Route path='marca' element={<AddBrand/>}/>
        </Route>
      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);