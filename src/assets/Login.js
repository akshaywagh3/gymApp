import "./Login.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  const [logname, SetLogname] = useState("");
  const [logemail, SetLogEmail] = useState("");
  const [logpassword, SetLogPassword] = useState("")
  const [result,SetResult]=useState(true);
  const nav =useNavigate();
  
  const loadcred=[];
  const loginData=async ()=>{
    const response=await fetch('https://gymapp-8aa5e-default-rtdb.firebaseio.com/signup.json')

    if(!response.ok){
      throw new Error('something went wrong')
    }
    const data=await response.json();
    
    for(const key in data){
      loadcred.push({
        id:key,
        email:data[key].email,
        password:data[key].password
      })
      
    }

  }
  function loginHandler(event) {
    event.preventDefault();
    for(let i = 0; i < loadcred.length; i++){
      if(logemail===loadcred[i].email && logpassword===loadcred[i].password) {
        
        SetResult(true);
        break;
      }
      else {
        SetResult(false);
      }
      
      
    }
    if(result===false){
      alert('invalid credentials.try again.');
    }
    if(result===true){
      alert(`logged in successfully, welcome ${logname}to gym app`)
      nav('/');
    }
    
    
    
    
  };


  return (
    <div className="log-page">
      <h1>Login Form</h1>
      <form className="forms" onSubmit={loginHandler}>
        <label>
          <input type="email" placeholder="E-mail Address"name="email" autoComplete="on" value={logemail}required onChange={(e)=>SetLogEmail(e.target.value)}></input>
        </label>
        <br />
        <label>
          <input type="password" placeholder="password" name='password' autoComplete="on"value={logpassword} required onChange={(e)=>SetLogPassword(e.target.value)}></input>
        </label>
        <br />
        {/* <Link to="/reset">Forgot Password</Link> */}
        
        <button type="submit">Login</button> 
       
      </form>
      <p>Not a member?</p>
      <span>
        <Link to="/signup">SignUp now</Link>
      </span>
    </div>
  );
};

export default Login;
