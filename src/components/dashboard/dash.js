import React, { useState } from 'react';
import Axios from 'axios';
import './dashStyle.css';

function Dash() {
  return (
    <div class='dashboard'>
      <div class='split left'>
        <h1>Donate Blood</h1>
        <a href='#' class='btn'>
          CLICK
        </a>
      </div>
      <div class='split right'>
        <h1>Request Blood</h1>
        <a href='#' class='btn'>
          CLICK
        </a>
      </div>
    </div>
  );
}

export default Dash;
