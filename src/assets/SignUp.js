import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

import "./Signup.css";

const SignUp = (props) => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [isSent,SetIsSent] = useState(false);
  const nav=useNavigate();
  function submitHandler(event) {
    SetIsSent(prev=>!prev);
    event.preventDefault();
    const msg = {
      name: name,
      email: email,
      password: password,
    };

    props.onSignUp(msg);

    if(name!=='' && email!=='' && password!==''){
      
      alert('Account Created Successfully');
      nav('/login');
      
    }
    else{
      alert('fill the information')
    }
  };

  return (
    <div className="sign-page">
      <h1>Signup Form</h1>
      <form className="forms" onSubmit={submitHandler}>
        <label>
          <input type="text" placeholder="name"  value={name}required onChange={(e)=>SetName(e.target.value)}></input>
        </label>
        <br />
        <label>
          <input type="email" placeholder="email"  value={email}required onChange={(e)=>SetEmail(e.target.value)}></input>
        </label>
        <br />
        <label>
          <input type="password" placeholder="password"  value={password} required onChange={(e)=>SetPassword(e.target.value)}></input>
        </label>
        <br />
        
          <button type="submit" >Signup</button>
        
      </form>
      <p>Already have a account?</p>
      <span>
        <Link to="/login">login</Link>
      </span>
    </div>
  );
};

export default SignUp;
