import React, { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

function Donate() {
    document.title = 'Donate';
    Axios.defaults.withCredentials = true;
    const [username,setUsername] = useState("");
    const [message,setMessage] = useState("");
    let limit=0;
    let bloodg;
    useEffect(() => {
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
                 if(limit< 10 ){
                    console.log("10 m aaya");
                    setMessage("Your welcum");
                }
                else{
                    setMessage("bheed cum");
                }
        });
          }
        } 
        );
        
  
      }, []);
     

    return (
        <div>
        <p> hey ya {username}</p>
    <h1>tera bloodgroup ye h {message}</h1>
    </div>);
}

export default Donate;
