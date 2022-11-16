import React, { useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Home from "../screens/Home";
import Overview from "../screens/Overview";
import Auth from "../screens/Auth";

const Routes = () => {
  let location = useLocation();

  useEffect(() => {
    //* for ensuring title changes on the title
    switch (location.pathname) {
      case "/overview":
        document.querySelector("title").innerText = "TeamUAV | Overview";
        break;
      case "/recruitments/register":
        document.querySelector("title").innerText = "Recruitments | Register";
        break;
      case "/recruitments/login":
        document.querySelector("title").innerText = "Recruitments | Login";
        break;
      default:
        document.querySelector("title").innerText = "TeamUAV";
    }
  }, [location.pathname]);

  return (
    <Switch>
      <Route path="/overview" component={Overview} />
      <Route path="/recruitments/login" component={Auth} />
      <Route path="/recruitments/register" component={Auth} />
      {/* <Route path="/dashboard" component={Home} /> */}

      {/* added a new route for home page  */}
      <Route path="/recruitments/home" component={Home} />

      <Route path="/recruitments/">
        <Redirect to="recruitments/register" />
      </Route>
      <Route path="/">
        <Redirect to="/overview" />
      </Route>
    </Switch>
  );
};

export default Routes;