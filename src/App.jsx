import React, { Component } from "react";
import "./sass/App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch } from "react-router-dom";

import Navbar from "./component/navBar";
import Home from "./component/home";
import Login from "./component/LogIn";

class App extends Component {
  state = {
    showMenu: 0,
  };
  handleShowMenu = () => {
    let showMenu = this.state.showMenu;
    showMenu += 1;
    if (showMenu === 4) showMenu = 0;
    this.setState({ showMenu });
  };

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route
            path="/"
            render={(props) => <Navbar onShowMenu={this.handleShowMenu} />}
          />
        </Switch>
        <Route
          path="/home"
          render={(props) => <Home ShowMenu={this.state.showMenu} {...props} />}
        />
      </div>
    );
  }
}

export default App;
