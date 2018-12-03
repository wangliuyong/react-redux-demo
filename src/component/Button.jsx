import React, { Component } from 'react'


class Button extends Component{
  mnius(){
    //this.props.store.dispatch({type:'DECREMENT',payload:45})
  }
  render(){
    return(
      <button onClick={this.mnius.bind(this)}>acton</button>
    )
  }
}

export default Button