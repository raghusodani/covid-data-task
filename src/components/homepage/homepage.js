import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import './homeStyle.css';

function Homepage() {
  const history = useHistory();
  const routeChange1 = () => {
    console.log('yes clicked');
    let path = '/login';
    history.push(path);
  };
  const routeChange2 = () => {
    console.log('yes clicked');
    let path = '/register';
    history.push(path);
  };
  const [isOpen, updateIsOpen] = useState(true);
  if (!isOpen) {
    console.log('yes clicked');
    return <Redirect to='/test' />;
  }
  // eslint-disable-next-line
  function handleClick() {
    updateIsOpen(!isOpen);
  }
  return (
    <div class='home-page'>
      <h1> Home </h1>
      <button onClick={routeChange1}> Login</button>
      <button onClick={routeChange2}> Register</button>
    </div>
  );
}

export default Homepage;
