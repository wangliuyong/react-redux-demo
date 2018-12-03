import React, { Component } from 'react'

 
class Show extends Component{
  render(){
    return(
      <div>{this.props.store.getState()}</div>
    )
  }
}


export default Show