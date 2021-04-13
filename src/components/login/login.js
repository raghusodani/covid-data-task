import React from "react";

function Login() {
  return (
    <div>
    <h1> Login </h1> 
    <input 
        type="text" 
        name="name" 
        placeholder="Enter name"
        ></input>
    
    <input
            type="password"
            name="password"
            placeholder="Password"
          />

    </div>
  );
}

export default Login;