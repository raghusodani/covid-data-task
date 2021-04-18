import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './regStyle.css';

function RegisterPage() {
  const [name, setName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setNameList(response.data);
    });
  });
  const submitForm = () => {
    console.log('laaya bapu');
    Axios.post('http://localhost:3001/api/insert', {
      name: name,
      bloodGroup: bloodGroup,
    }).then(() => {
      alert('successfully inserted');
    });
  };
  return (
    <div class='register-form'>
      <form class='form'>
        <h1> Register </h1>
        <input
          type='text'
          name='name'
          placeholder='Name'
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          type='text'
          name='email'
          placeholder='Email'
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input type='text' name='address' placeholder='Address'></input>
        <input type='text' name='phone' placeholder='Phone Number'></input>
        <input type='text' name='bloodGroup' placeholder='Blood group'></input>
        <input type='password' name='password' placeholder='Password' />
        <button onClick={submitForm}> Submit </button>
        {/* {nameList.map((val) => {
          return (<h1> Name :{val.name} </h1>);
        })} */}
        <p class='message'>
          Already registered? <a href='/login'>Log In</a>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;
