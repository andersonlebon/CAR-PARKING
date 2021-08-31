import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NewCar from "./common/resgisterCar";
import MainMenu from "./mainMenu";
import MainSide from "./mainSide";
import { getCars } from "./fakeCarService";

class Home extends Component {
  state = {
    changeClass: false,
    garage: [],
    currentPage: 1,
    pageSize: 5,
    getSubMenu: false,
    data: "",
  };
  handelChange = (e) => {
    let data = this.state.data;
    let currentPage = this.state.currentPage;
    currentPage = 1;
    data = e.currentTarget.value;
    this.setState({ data, currentPage });
    console.log(this.state.currentPage);
  };
  handelSearch = () => {};
  async componentDidMount() {
    // try {
    //   const promis = await axios.get(
    //     "http://localhost:4000/car-parking.com/api/cars"
    //   );
    this.setState({ garage: getCars() });
    console.log("hello can you see the message?");
    // console.log(promis);
    // } catch (ex) {
    //   console.log("something fail");
    // }
  }
  handleChangePage = (page) => {
    this.setState({ currentPage: page });
    console.log(this.state.currentPage);
  };

  handelReg = () => {
    this.props.history.push("/registerNewCar");
  };
  handelDelete = (_id) => {
    const garage = this.state.garage;
    const car = garage.find((car) => car._id === _id);
    const index = garage.indexOf(car);
    garage.splice(index, 1);
    this.setState({ garage });
  };
  handelShowToMenu = (id) => {
    let getSubMenu = this.state.getSubMenu;
    getSubMenu = true;
    this.setState({ getSubMenu });
    // this.props.history.push(`/home/${id}`);
  };
  render() {
    const { ShowMenu, onShowToMenu } = this.props;
    const { garage, allInput, currentPage, data, pageSize } = this.state;
    console.log(this.state.garage);
    return (
      <div className="home">
        <div className="home-content">
          <MainMenu cars={garage} ShowMenu={ShowMenu} />
          <div className="side">
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => (
                  <MainSide
                    garage={garage}
                    data={data}
                    onChange={this.handelChange}
                    onShowToMenu={this.handelShowToMenu}
                    onChangePage={this.handleChangePage}
                    currentPage={currentPage}
                    onDelete={this.handelDelete}
                    pageSize={pageSize}
                    onSort={this.handleSort}
                    onReg={this.handelReg}
                    {...props}
                  />
                )}
              />
              <Route
                path="/home/registerNewCar/:id"
                render={(props) => (
                  <NewCar
                    onChange={this.handelChange}
                    inputs={allInput}
                    onSubmit={this.handelSubmit}
                    {...props}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
