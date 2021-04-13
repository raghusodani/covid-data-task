import React from "react";
import Homepage from "./components/homepage/homepage.js";
import Login from "./components/login/login.js";
import RegisterPage from "./components/register/RegisterPage.js"
function App() {
  return (
    <div>
       
      <RegisterPage />
      <Homepage />
      <Login/>
    </div>
  );
}

export default App;
