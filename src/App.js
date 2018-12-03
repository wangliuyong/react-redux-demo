import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {connect} from 'react-redux'



// import Button from './component/Button'
// import Show from './component/Show'



import './App.css';

// import ThemContext from './context/them-context'
// import NameCard from './component/FormCard'
// import GetContext from './component/GetContext'









const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>
const Header= (props)=><div className="nav">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about/">About</Link>
                      </li>
                      <li>
                        <Link to="/users/">Users</Link>
                      </li>
                    </ul>
                  </div>
class App extends Component {
  render() {
    return (
      <Router>
    <div>
      <Header store={this.props.store}/>
      <button onClick={this.props.add}>{this.props.n}</button>
      <div className="container">
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </div>
  </Router>
    );
  }
}

//将state映射到props上面，获取部分state
function getPartStore(state){
  return {
    n:state.n
  }
}
//将actions映射到props上面，创建action
const createAction={
  add:()=>{
    return {
      type:'INCREMENT',
      payload:15
    }
  }
}

connect(x,y)(App)

export default connect(getPartStore,createAction)(App);
