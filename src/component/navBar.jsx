import React, { Component } from "react";
import { BsGrid } from "react-icons/bs";
import { IoIosList, IoIosNotificationsOutline } from "react-icons/io";
import { CgDarkMode, CgProfile } from "react-icons/cg";
import Search from "./common/search";

class Navbar extends Component {
  state = {};
  render() {
    const { onShowMenu } = this.props;
    return (
      <header className="header">
        <div className="sideOne">
          <div className="list">
            <span onClick={() => onShowMenu()}>
              <IoIosList />
            </span>
          </div>
          <Search added="search" />
          <div className="language">EN</div>
        </div>
        <div className="log">
          <h1>GOGO</h1>
        </div>
        <div className="sideTwo">
          <div className="darkMode">
            <span>
              <CgDarkMode />
            </span>
          </div>
          <div className="grid">
            <span>
              <BsGrid />
            </span>
          </div>
          <div className="notification">
            <span>
              <IoIosNotificationsOutline />
            </span>
          </div>
          <div className="logged">
            <span>Moise Rushanika</span>
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
