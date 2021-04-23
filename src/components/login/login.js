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
<<<<<<< HEAD
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
      <form class='login-form'>
        <input type='text' name='name' placeholder='Name*' />
        {/* TODO: add validation logic */}
        <p class='valid'>username is required</p>
        <input type='password' name='password' placeholder='Password*' />
        <p class='valid'>password is required</p>
        <p id='required-text'>* Required Fields</p>
        <button>login</button>
        {/* {nameList.map((val) => {
          return (<h1> Name :{val.name} </h1>);
        })} */}
>>>>>>> c50b9d63e023b462a3e77cc90f8a173282b30cd8
        <p class='message'>
          Not registered? <a href='/register'>Create an account</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
