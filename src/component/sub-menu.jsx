import React, { Component } from "react";
import { CgProfile } from "react-icons/cg";

class SubMenu extends Component {
  state = {
    cars: [1, 3, 4, 5],
  };

  render() {
    const { ShowMenu, cars, getSubMenu } = this.props;
    const id = this.props.match.params.id;
    const car = cars.find((acar) => acar._id === parseInt(id)) || {};
    return (
      <div
        className={
          ShowMenu === 0
            ? getSubMenu === true
              ? "sub-menu"
              : "none"
            : ShowMenu === 1
            ? "sub-menu hide-sub"
            : ShowMenu === 2
            ? "sub-menu both"
            : ShowMenu === 3
            ? "sub-menu hide-sub"
            : "sub-menu"
        }
      >
        <div className="driver">
          <div className="c-profile">
            <span>
              <CgProfile />
            </span>
            <p className="text">{car.driver}</p>
            <p className="email">{car.email}</p>
          </div>
          <div className="d-infos">
            <p>Type of Car: {car.type}</p>
            <p>Plaque of the Car: {car.plaque}</p>
            <p>Phone Number : {car.phoneNumber}</p>
          </div>
          <div className="sub-buttons">
            <button className="btn btn-dark">Modify</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SubMenu;
