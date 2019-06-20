import React,{Component} from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import '../Css/Home.css';
import {  Link } from "react-router-dom";
import '../Css/Login.css'



export default class Login extends Component {
  constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.displayLogin = this.displayLogin.bind(this);
	}


	displayLogin =async (e) =>
	{
		e.preventDefault();

const data=this.state;
const response= await fetch('http://localhost:4000/backend/login',{
	method:'POST',
	headers:{
		'Content-Type':'application/json',
	},
	body:JSON.stringify({data}),
});
const body = await response.text();
this.setState({response:body});
console.log(data);
	}
  render(){
		console.log(this.state.response);
  return (



<div className="Login" > {/* login div started */}
<nav className="navbar navbar-expand-sm bg-light  "> {/*nav tag opened  */}

<Link to="/" className="navbar-brand" > {/* navbar-brand started */}
    <img  src={require('./Images/Logo.png')} alt="logo" width='100%' height='80'>
 
  </img>
  </Link> {/* navbar-brand closed */}
  
</nav> {/* navbar closed */}

<div className="row  ml-auto">
    <div className=" container col-lg-6" >

   <form  onSubmit={this.displayLogin} > {/* form tag started &  column class for  input groups */}
 
	 <div className="name">
<input type="text"
							placeholder="Username"
							value={this.state.email}
							onChange={e=>this.setState({email:e.target.value})}
							name="email"
className="mb-3 mr-3  form-control "
						/>
</div>
<div className="password">
						<input
							type="password"
							placeholder="Password"
							value={this.state.password}
							onChange={e=>this.setState({password:e.target.value})}
							name="password"
							className="mb-3 mr-3 form-control"
						/>
						</div>
					
        	<input type="submit" value="Login"  className="bg-primary mb-3 mr-3  "/>
        <p className="ml-3" > <span>Not Yet Registered? </span></p>
         
        <Link to="/register">	<button type="submit" value="Signup"  className="ml-3 btn btn btn-primary" >	Sign Up</button></Link>
				</form>
				</div>
		
				<div className="col-lg-6" >

<img src={require('./Images/login.png')} alt="logo"  width="700"height="100%" ></img>
</div>
</div>
</div> 


);
}
}