import React, { Component } from 'react'

import ThemContext from "../context/them-context";

class GetContext extends Component{

  render(){
    return(
      <ThemContext.Consumer>
      {
        (them)=>{console.log(them)}
      }
      </ThemContext.Consumer>
    )
  }
}



export default GetContext


