import React, { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import {  useHistory } from 'react-router-dom';
import Axios from 'axios';
import './dashStyle.css';

function Dash() {
  let history = useHistory();
  const [user, setUser] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    bloodGroup: '',
   
  });
  Axios.defaults.withCredentials = true;
  useEffect( () => {
    Axios.get("http://localhost:3001/login").then( (response) => {
      console.log(response.data);
      
    });
  },[]);
  const [state, setState] = useState({
    isLeftOn: false,
    isRightOn: false,
  });

  document.title = 'Dashboard';
  const isLeftOn = state.isLeftOn;
  const isRightOn = state.isRightOn;
  const donate  = () =>{
    history.push("/donateblood");
  }
  const request = () => {
    history.push("/requestblood");
  }

  return (
    <div className='dashboard'>
      <div
        className={
          'container' +
          (isLeftOn ? ' hover-left' : '') +
          (isRightOn ? ' hover-right' : '')
        }
      >
        <div
          className='split left'
          onMouseEnter={() => {
            
            setState({
              isLeftOn: true,
              isRightOn: false,
            });
          }}
          onMouseLeave={() => {
            
            setState({
              isLeftOn: false,
              isRightOn: false,
            });
          }}
        >
          <h1>Donate Blood</h1>
          <a href='#' onClick = {donate} className='btn'>
            CLICK
          </a>
        </div>
        <div
          className='split right'
          onMouseEnter={() => {
            // console.log('right enter');
            setState({
              isLeftOn: false,
              isRightOn: true,
            });
          }}
          onMouseLeave={() => {
            // console.log('right leave');
            setState({
              isLeftOn: false,
              isRightOn: false,
            });
          }}
        >
          <h1>Request Blood</h1>
          <a onClick = {request} className='btn'>
            CLICK
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dash;
