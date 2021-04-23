import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Axios from 'axios';
import './logStyle.css';
function Login() {
  let history = useHistory();
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[loginStatus,setLoginStatus] = useState("");
 
  let loginDone = false;
  function handleClick(){
    console.log("post gayi");
    Axios.post('http://localhost:3001/login', {
      email: email,
      password : password
    }).then( (response ) => {
      console.log(response);
      if(response.data.message){
        setLoginStatus(response.data.message);
      }
      else{
        loginDone = true;
        history.push("/dashboard");
      }
    });
  }
  return (
    <div class='login-page form'>
      <h1> Login </h1>
      <form class='login-form' onSubmit={ (e) => {e.preventDefault();}}>
        <input type='text' name='email' placeholder='email' 
        onChange = { (e) => {
          setEmail(e.target.value);
          }} />
        <input type='password' name='password' placeholder='Password' 
          onChange={ (e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={handleClick}>Login</button>
        <p>{loginStatus}</p>
=======
      
        <p class='message'>
          Not registered? <a href='/register'>Create an account</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
