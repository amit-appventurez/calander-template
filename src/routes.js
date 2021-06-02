import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Calendar from "./pages/calendar/Calendar";
import Util from "./util/path";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={Util.Login} component={Login} />
        <Route exact path={Util.Register} component={Register} />
        <Route exact path={Util.Calendar} component={Calendar} />
        <Redirect from={Util.Home} to={Util.Login} />
      </Switch>
    );
  }
}

export default Routes;
