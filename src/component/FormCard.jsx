import React, { Component } from 'react'

import ThemContext from "../context/them-context";


const them={
  black:[1,2,3]
}

export default class NameCard extends Component{

  constructor(props){
    super(props)
    this.state={
      value:'',
      them:'black'
    }

    //this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

 
  handleSubmit(e){
    alert(this.input.value)
    console.log(this.input)

    e.preventDefault()
  }

  render(){
  
    return(
      <ThemContext.Provider value={them}>
        <form className="p-5" onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label>留言</label>
        <input 
        type="text"
        className="form-control"
        placeholder="输入留言内容"
        ref={(input)=>this.input=input}
        />
      </div>
      <button type="submit" className="btn btn-primary">留言</button>
      </form>
      </ThemContext.Provider>
    )
  }
}