import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaRegUser, FaCar } from "react-icons/fa";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { MdContactPhone } from "react-icons/md";
import { addCar, getCars } from "../fakeCarService";

class NewCar extends Component {
  state = {
    allInput: {
      driver: "",
      email: "",
      type: "",
      plaque: "",
      phoneNumber: "",
    },
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    const allInput = { ...this.state.allInput };
    const cars = getCars();
    if (id !== "new") {
      const car = cars.filter((car) => car._id === parseInt(id));
      allInput._id = null;
      this.setState({ allInput: car[0] });
    } else {
      this.setState({ allInput });
    }
  }
  handelChange = ({ currentTarget: input }) => {
    const allInput = { ...this.state.allInput };
    allInput[input.name] = input.value;
    this.setState({ allInput });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    addCar(this.state.allInput);
    // this.props.history.push("/home/list");
  };
  render() {
    const { handelChange, handelSubmit } = this;
    const { driver, plaque, email, type, phoneNumber } = this.state.allInput;
    console.log(this.props.match.params.id);
    return (
      <div className="register">
        <h1>REGISTER A CAR</h1>
        <form onSubmit={handelSubmit}>
          <label htmlFor="driver">
            <p>Driver's name</p>
            <div className="input-content">
              <input
                id="driver"
                name="driver"
                value={driver}
                type="text"
                placeholder="Driver's name"
                onChange={handelChange}
                required
              />
              <span>
                <FaRegUser />
              </span>
            </div>
          </label>
          <label htmlFor="email">
            <p>Email Adress</p>
            <div className="input-content">
              <input
                id="email"
                name="email"
                type="text"
                value={email}
                placeholder="Enter Adress mail"
                onChange={handelChange}
              />
              <span>
                <AiOutlineMail />
              </span>
            </div>
          </label>
          <label htmlFor="type">
            <p>Type of Car</p>
            <div className="input-content">
              <input
                id="type"
                name="type"
                type="text"
                value={type}
                placeholder="your car's type please"
                onChange={handelChange}
              />
              <span>
                <FaCar />
              </span>
            </div>
          </label>
          <label htmlFor="plaque">
            <p>Car's plaque</p>
            <div className="input-content">
              <input
                id="plaque"
                type="text"
                name="plaque"
                value={plaque}
                onChange={handelChange}
                placeholder="Enter Car'plaque"
              />
              <span>
                <FaCar />
              </span>
            </div>
          </label>
          <label htmlFor="number">
            <p>Number</p>
            <div className="input-content">
              <input
                id="number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handelChange}
                type="text"
                placeholder="+250..."
              />
              <span>
                <MdContactPhone />
              </span>
            </div>
          </label>
          <div className="go-to">
            <button className="btne">
              <RiArrowRightSLine />
            </button>
            <Link to="/home/list" className="btne">
              <RiArrowLeftSLine />
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default NewCar;
