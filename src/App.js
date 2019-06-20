import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,Switch
 
} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/register";
import UndoguysHome from "./components/unguyshome";

class App extends Component {
  render() {
    return (
      <Router>


      {/* sethu */}
<Switch>     
  <Route exact path='/' component={Home}></Route>
  <Route  path='/login' component={Login}></Route>
  <Route  path='/register' component={Register}></Route>
  <Route  path='/undoguyshome' component={UndoguysHome}></Route>
</Switch>
      </Router>
    );
  }
}

export default App;
