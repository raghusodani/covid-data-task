import React, { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
function Request() {
  document.title = 'Request';
  let limit = 0 ;
  let bloodg;
  const [userArray,setUserArray] = useState( [{
    name: '',
    email: '',
    address: '',
    phone: '',
  }] );
  Axios.get('http://localhost:3001/login').then((response) => {
         // console.log(response.data);
          if(response.data.loggedIn==true){
              console.log(response.data.user[0]);
              const tem1 = response.data.user[0].name;
              bloodg = response.data.user[0].bloodgroup;
                console.log(bloodg);
                Axios.post('http://localhost:3001/bloodcount',{bloodgroup: bloodg,}).then((response) => {
                 limit  = (response.data.length);
                 console.log(limit);
                 setUserArray([...userArray , {
                    name: response.data.user[0].name,
                    email: response.data.user[0].email,
                    address: response.data.user[0].address,
                    phone: response.data.user[0].phone,
                 }]);
        });
          }
        } );
      
  return <h1>nahi h maa chuda</h1>;
}

export default Request;
