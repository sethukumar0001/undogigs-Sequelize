import React, { Component } from 'react';
import  UndoguysHeader from './UndoGuyHeader';
import '../Css/profile.css';
import AuthHelperMethods from '../Authentication/AuthHelperMethods';
import withAuth from '../Authentication/withAuth';

import "bootstrap/dist/css/bootstrap.min.css";
class Profile extends Component {

  Auth = new AuthHelperMethods();

  _handleLogout = () => {
    this.Auth.logout()
    this.props.history.replace('/login');
  }

  constructor(props){
    super(props)
      this.state={
        skills:'',
        experience:'',
        qualification:'',
		location:'',
	
      }
      this.displayLogin = this.displayLogin.bind(this);    
  }

  displayLogin =async (e) =>{
		e.preventDefault();
		const data=this.state;

fetch('http://localhost:4000/backend/profile', {
	method: 'POST',
	headers: {'Content-Type':'application/json'},
	body: JSON.stringify({data})
}).then(function(response) {
	if (response.status >= 400) {
		throw new Error("Bad response from server");
	}
	return response.json();
}).then((data) =>{
	console.log(data);
		 alert("profile updated");     
	if(data){
	
		 this.props.history.replace('/undoguyshome');
	}

}).catch(function(err) {
	console.log(err)
});
}

    render() {
		
      return (
		  
		  
			
          <div className="ProfileOne">  {/* profileone div started */}
          
          <UndoguysHeader></UndoguysHeader>
          <div className="fluid-container ">{/* first container div started */} 
          
          <div className="row"> {/*  row div started */} 
          <div className="col-lg-6" >
    <img  src={require('./Images/Group 15.png')} alt="logo" width="100%"height="100%" /> 

      </div>{/* first col  div ended */} 
      <div className="col-lg-6 "> {/* 2nd col div started */} 
      <div className="card profile-box m-3"> {/*card div started */} 
      <div className="card-body"> {/*card body div ended */} 
      <div className="row">
      <div className="col-sm-3">
      <p className="text-primary font-weight-bold ml-3 mt-3" >Sethu </p>
      <p className="font-weight-bold ml-3">993840276</p>
      </div>
      <div className="col-sm-3 ml-auto">
      <img  src={require('./Images/undraw_profile_pic_ic5t.png')} alt="profilepic" width='100%' height='100'></img>
      </div>
      </div>
      <form onSubmit={this.displayLogin}>
				
					<input 
							type="text"
							placeholder="skills"
							name="skills"	
							value={this.state.skills}
							onChange={e=>this.setState({skills:e.target.value})}
							className="mr-3 form-control"
						/>
						<input
							type="text"
							placeholder="qualification"
							name="qualification"
							value={this.state.qualification}
							onChange={e=>this.setState({qualification:e.target.value})}
							className="form-control"
						/>

            <input
							type="text"
							placeholder="experience"
							name="experience"
							value={this.state.experience}
							onChange={e=>this.setState({experience:e.target.value})}
							className="form-control"
						/>  
            <input
							type="text"
							placeholder="location"
							name="location"
							value={this.state.location}
							onChange={e=>this.setState({location:e.target.value})}
							className="form-control"
						/>
				
					
 <p className="text-success ml-3">Completed projects  :  2</p>

 <button type="submit" className="btn btn-primary profile-button ml-3 ">submit</button>
 </form>
      </div> {/*card body div ended */} 
      </div> {/*card  div ended */} 
      </div> {/* 2nd col div endted */} 
      </div> {/*  row div ended */} 
      </div> {/*  container div ended */} 
        
          </div>
      );
    }
}

export default withAuth(Profile);