import React, { Component } from "react";
// import { IoMdArrowDropdownCircle } from "react-icons/io";

class Input extends Component {
  state = {
    changeClass: false,
  };
  handelChange = () => {
    let changeClass = this.state.changeClass;
    changeClass = !changeClass;
    this.setState({ changeClass });
    console.log(this.state.changeClass);
  };
  render() {
    return <div className="i-input"></div>;
  }
}

export default Input;
