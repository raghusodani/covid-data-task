import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import './dashStyle.css';

function Dash() {
  const [state, setState] = useState({
    isLeftOn: false,
    isRightOn: false,
  });

  document.title = 'dashboard';
  const isLeftOn = state.isLeftOn;
  const isRightOn = state.isRightOn;

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
            console.log('left enter');
            setState({
              isLeftOn: true,
              isRightOn: false,
            });
          }}
          onMouseLeave={() => {
            console.log('left leave');
            setState({
              isLeftOn: false,
              isRightOn: false,
            });
          }}
        >
          <h1>Donate Blood</h1>
          <a href='#' className='btn'>
            CLICK
          </a>
        </div>
        <div
          className='split right'
          onMouseEnter={() => {
            console.log('right enter');
            setState({
              isLeftOn: false,
              isRightOn: true,
            });
          }}
          onMouseLeave={() => {
            console.log('right leave');
            setState({
              isLeftOn: false,
              isRightOn: false,
            });
          }}
        >
          <h1>Request Blood</h1>
          <a href='#' className='btn'>
            CLICK
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dash;
