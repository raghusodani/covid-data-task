import React, { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { Redirect, useHistory } from 'react-router-dom';
import Axios from 'axios';
import './logStyle.css';

function Login() {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  let loginDone = false;
  Axios.defaults.withCredentials = true;

  function handleClick() {
    document.title = 'login';
    console.log('post gayi');
    Axios.post('http://localhost:3001/login', {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        loginDone = true;
        history.push('/dashboard');
      }
    });
  }

  useEffect(() => {
    Axios.get('http://localhost:3001/login').then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <div className='login-page'>
      <a className='btnHome' href='/'>
        <FaHome />
      </a>
      <div className='form'>
        <h1> Login </h1>
        <form
          className='login-form'
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type='text'
            name='email'
            placeholder='email*'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type='password'
            name='password'
            placeholder='Password*'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p id='required-text'>* Required Fields</p>
          <button onClick={handleClick}>Login</button>
          <p>{loginStatus}</p>
          <p className='message'>
            Not registered? <a href='/register'>Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
