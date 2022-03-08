import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import jwtDecode from "jwt-decode";
import Movies from "./components/Movies/Movies";
import Protectedroute from "./components/ProtectedRoute/ProtectedRoute";
import Series from "./components/Series/Series";
import { Redirect } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NotLoggedHome from "./components/NotLoggedHome/NotLoggedHome";

export default function App() {
  const [loginUser, setLoginUser] = useState(null);

  function getUserInfo() {
    let encodedToken = localStorage.getItem("userToken");
    let userData = jwtDecode(encodedToken);
    setLoginUser(userData);
  }

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      getUserInfo();
    }
  }, []);

  let history = useHistory();

  function logOut() {
    localStorage.removeItem("userToken");
    setLoginUser(null);
    history.push("/login");
  }

  return (
    <>
      <Navbar loginUser={loginUser} logout={logOut} />
      {!loginUser && (
        <Route path="/outlinehome" render={() => <NotLoggedHome />} />
      )}
      <div className="container">
        <Switch>
          <Protectedroute path="/movies" component={Movies} />
          <Protectedroute path="/series" component={Series} />
          <Protectedroute path="/home" component={Home} loginUser={loginUser} />
          <Route path="/register" render={(props) => <Register {...props} />} />
          <Route
            path="/login"
            render={(props) => <Login {...props} getUserInfo={getUserInfo} />}
          />
        </Switch>
      </div>
      <Footer />
      <Redirect from="/" to="/outlinehome" />
    </>
  );
}
