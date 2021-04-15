import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/homepage/homepage.js";
import Login from "./components/login/login.js";
import RegisterPage from "./components/register/RegisterPage.js"
function App() {
  return (
    <BrowserRouter >
    <Switch>
      <Route exact path="#" component={Homepage} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={RegisterPage} />
      <Route exact path='/' component={Homepage} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
