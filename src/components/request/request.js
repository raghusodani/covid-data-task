import React, { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

function Request() {
  document.title = 'Request';
  let limit = 0;
  let bloodg;
  const [userArray, setUserArray] = useState([
    {
      name: '',
      email: '',
      address: '',
      phone: '',
    },
  ]);

  Axios.get('http://localhost:3001/login').then((response) => {
    // console.log(response.data);
    if (response.data.loggedIn == true) {
      console.log(response.data.user[0]);
      const tem1 = response.data.user[0].name;
      bloodg = response.data.user[0].bloodgroup;
      console.log(bloodg);
      Axios.post('http://localhost:3001/bloodcount', {
        bloodgroup: bloodg,
      }).then((response) => {
        limit = response.data.length;
        console.log(response.data.length);
        
        for(let i =0 ; i<response.data.length ;i++){
          const newUser = {
            name: response.data[i].name,
            email: response.data[i].email,
            address: response.data[i].address,
             phone: response.data[i].phone,
          };
          console.log(newUser);
          setUserArray([
               ...userArray,newUser]);
        }
      //  console.log(userArray);
        // setUserArray([
        //   ...userArray,
        //   {
        //     name: response.data.user[0].name,
        //     email: response.data.user[0].email,
        //     address: response.data.user[0].address,
        //     phone: response.data.user[0].phone,
        //   },
        // ]);
      });
    }
  });

  return (
    <div className='donate-request'>
      <a className='btnHome' href='/'>
        <FaHome />
      </a>
      <div className='topbar'>
        <h1>
          Hope you get the blood you need!
          <span>Below are the details...</span>
        </h1>
      </div>

      <div className='form'>
      {userArray.map((value) => {
        
          <div>
            <h1>{value.name}</h1>
            <h1>{value.email}</h1>
            <h1>{value.phone}</h1>
            <h1>{value.address}</h1>
          </div>
          
        
      })}
      </div>
    </div>
  );
}

export default Request;
