import React,{Component} from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import '../Css/guyshome.css';
import {  Link } from "react-router-dom";
export default class UndoguysHome extends Component {
    render(){
    return (
        <div className="undoguyshome" >
        <nav className="navbar navbar-expand-sm bg-primary "> {/*nav tag opened  */}

<Link to="/" className="navbar-brand" > {/* navbar-brand started */}
    <img  className="img-responsive bg-transparent " src={require('./Images/Logo.png')} alt="logo" width='100%' height='80'>
 
  </img>
  </Link> {/* navbar-brand closed */}

  <ul className="navbar-nav ml-auto "> {/* nav ul started */}
    <li className="nav-item mr-3"> {/* li 1 started */}
      <Link to="/"  className="nav-link text-white " >My Gigs</Link> 
    </li> {/* li 1 closed */}
    <li className="nav-item mr-3 "> {/* li2 started */}
    <Link to="/" className="nav-link text-white " target="_blank" >Profile</Link >
    </li> {/* li2 closed */}
    <li className="nav-item  mr-3"> {/*  li3 started*/}
      <Link to="/" className="nav-link text-white " >Messages</Link> 

    </li> {/* li3 closed */}
    <li className="nav-item  mr-3"> {/*  li4 started*/}
  <button type="submit"><i class="fa fa-search"></i></button>

    </li> {/* li4 closed */}
    
  </ul>  {/*ul closed  */}
  
  
</nav> 

        </div>
        );
    }
    }
    