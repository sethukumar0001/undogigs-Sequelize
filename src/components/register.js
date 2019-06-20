import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Css/register.css';

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			firstname: '',
			lastname:'',
			email: '',
			mobilenumber:'',
			password: '',
			selectedValue:'',
			msg:''
		};

		this.displayLogin = this.displayLogin.bind(this);
	}
	handleChange=(event)=> {
    console.log(event.target.value);
    this.setState({
      ...this.state,
      selectedValue: event.target.value
    });
  };
 
  change(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit=(event)=>{
    console.log('A name was submitted: ' , this.state);
    event.preventDefault();
  }



	displayLogin =async (e) =>{
		e.preventDefault();

const data=this.state;
const response= await fetch('http://localhost:4000/backend/add',{
	method:'POST',
	headers:{
		'Content-Type':'application/json',
	},
	body:JSON.stringify({data}),
});
const body = await response.text();
this.setState({response:body});
console.log(data);




// fetch('http://localhost:4000/backend/add', {
// 	method: 'POST',
// 	headers: {'Content-Type': 'application/json'},
// 	body: JSON.stringify({data})
// }).then(function(response) {
// 	if (response.status >= 400) {
// 		throw new Error("Bad response from server");
// 	}
// 	return response.json();
// }).then(function(data) {
// 	console.log(data)    
// 	if(data == "success"){
// 		 this.setState({msg : "Thanks for registering"});  
// 	}
// }).catch(function(err) {
// 	console.log(err)
// });



	}
	handleOptionChange(changeEvent) {
		this.setState({
			selectedOption: changeEvent.target.value
		});
	}

	render() {
		console.log(this.state.response);
		return (
			<div className="register">
			<nav className="navbar navbar-expand-sm mb-3 bg-light"> {/*nav tag opened  */}

		<Link to="/" className="navbar-brand" > {/* navbar-brand started */}
    <img  className="img-responsive " src={require('./Images/Logo.png')} alt="logo" width='100%' height='80'>
 
  </img>
  </Link> {/* navbar-brand closed */}
  
  <ul className="navbar-nav ml-auto"> {/* nav ul started */}
    <li className="nav-item "> {/* li 1 started */}
      <p className="nav-link text-dark" >Already registerd?</p> 
    </li> 
	<li className="nav-item "> {/* li 1 started */}
      <Link to="/login"className="nav-link " >Login</Link> 
    </li> 
	</ul>
 
</nav> {/* navbar closed */}
<div className="container ">
<div className="row ml-3 ">
    <div className="col-lg-6" >
	<form onSubmit={this.displayLogin}>
					<div className="form-inline">
						<input
							type="text"
							placeholder="First Name"
							name="firstname"	
							value={this.state.firstname}
							onChange={e=>this.setState({firstname:e.target.value})}
							className="mr-3 form-control"
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastname"
							value={this.state.lastname}
							onChange={e=>this.setState({lastname:e.target.value})}
							className="form-control"
						/>
					</div>
					

					<div className="form-inline">
					<input
							type="text"
							placeholder="Mobile No."
							name="email"
							value={this.state.mobilenumber}
							onChange={e=>this.setState({mobilenumber:e.target.value})}
							className="mr-3 form-control"
						/>
						<input
							type="text"
							placeholder="Email"
							name="email"
							value={this.state.email}
							onChange={e=>this.setState({email:e.target.value})}
							className="mr-3 mb-3 form-control"
						/>
					</div>

					<div className="form-inline">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={e=>this.setState({password:e.target.value})}
							className="mr-3 mb-3 form-control"
						/>
					

				
						<input type="text" placeholder="Confirm Password" name="password1" className="mr-3 mb-3 form-control" />
				
						</div> 
						
						{/* <h5 className="ml-3 mb-3 text-primary">Select your Category</h5>
						<div className="radio-container mt-auto mb-3">
						
						<input type="radio" className="mr-3 "/>
						<label className="mr-3">UndoGigs</label>
						<input type="radio"  />
						<label className="ml-3 ">UndoGuys</label>
						</div> */}
						<div className="container">
  <div className="row">
	<div className="container">
        <form onSubmit={this.handleSubmit} >
    

        <div className="k-form-field" >
            <input type="radio" name="radio" value="UndoGigs" className="k-radio" onChange={this.handleChange}/>
          <label className="k-radio-label">UndoGigs</label>

          <input type="radio" name="radio" value="UndoGuys" className="k-radio" onChange={this.handleChange}/>
          <label className="k-radio-label">UndoGuys</label>
        </div>

        </form>
      </div>
    

    </div>
  </div>


						
							<button type="submit" value="Signup"  className=" btn btn btn-primary mt-auto" >	Sign Up</button>
						</form>
          </div>
    <div className="col-lg-6" >
	<img  src={require('./Images/login.png')} alt="logo" width="700"height="100%" ></img>

      </div>
  </div>
  </div>

  </div>
		);
	}
}

export default Register;