import React from 'react';
import './logStyle.css';

function Login() {
  return (
    <div class='login-page form'>
      <h1> Login </h1>
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
        <p class='message'>
          Not registered? <a href='/register'>Create an account</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
