import React, { Component } from "react";
import { IoIosList} from "react-icons/io";
import { CgDarkMode, CgProfile } from "react-icons/cg";
import Search from "./common/search";

class Navbar extends Component {
  state = {
    currentUser:{}
  };
  componentDidMount() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser);
    this.setState({currentUser});
  }
  
  render() {
    const { onShowMenu } = this.props;
    const { currentUser } = this.state;
    return (
      <header className="header">
        <div className="sideOne">
          <div className="list">
            <span onClick={() => onShowMenu()}>
              <IoIosList />
            </span>
          </div>
        </div>
        <div className="log">
          <h1>PARKING</h1>
        </div>
        <div className="sideTwo">
          <div className="darkMode">
            <span>
              <CgDarkMode />
            </span>
          </div>
          <div className="logged">
            <span>{currentUser.name}</span>
            <div className="picture">
              <CgProfile />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
