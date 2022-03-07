import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

const Protectedroute = (props) => {
  if (localStorage.getItem("userToken")) {
    if (props.loginUser) {
      return (
        <Route path={props.path}>
          <props.component loginUser={props.loginUser} />
        </Route>
      );
    }
    return (
      <Route path={props.path}>
        <props.component />
      </Route>
    );
  } else {
    return <Redirect to="/outlinehome" />;
  }
};

export default Protectedroute;
