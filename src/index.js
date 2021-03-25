import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ConfigureStore from './Store/ConfigureStore'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

const store = ConfigureStore()
console.log('state',store.getState())

store.subscribe(()=>{
  console.log('state updated',store.getState())
})
 
ReactDOM.render(
  <Provider store={store} >
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

