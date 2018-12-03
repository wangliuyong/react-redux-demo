import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
//import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/index'

const store =createStore(reducer)
console.log('store',store)
render()
store.subscribe(() => {
  console.log(store.getState())
  render()
})

function render(){
  ReactDOM.render(
    <Provider store={store}>
      <App store={store}/>
    </Provider>
  ,
   document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
//redux 可以创造一个顶层的全局属性，可以一直往下传
