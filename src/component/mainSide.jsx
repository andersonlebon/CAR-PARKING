import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import Pagination from "./common/pagination";
import paginater from "./common/paginate";
import Search from "./common/search";
import Car from "./common/car";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

class MainSide extends Component {
  state = {
    changeClass: false,
    data: "",
    sorted: { path: "name", order: "asc" },
  };
  handelSort = (sort) => {
    let sorted = { ...this.state.sorted };
    sorted.path = sort;
    this.setState({ sorted });
  };
  handelChangeClass = () => {
    let changeClass = this.state.changeClass;
    changeClass = !changeClass;
    this.setState({ changeClass });
  };
  handelChangeDrop = (name) => {
    let sorted = { ...this.state.sorted };
    if (sorted.path === name) {
      if (sorted.order === "asc") {
        sorted.order = "desc";
      } else {
        sorted.order = "asc";
      }
      this.setState({ sorted });
      // console.log(this.state.sorted.order);
    } else return null;
  };

  handelMakeSort = (colomn) => {
    return this.state.sorted.path === colomn ? (
      <i>
        {this.state.sorted.order === "asc" ? (
          <IoMdArrowDropdown />
        ) : (
          <IoMdArrowDropup />
        )}
      </i>
    ) : null;
  };
  handelModify = (id) => {
    this.props.history.push(`/home/registerNewcar/${id}`);
  };
  render() {
    const {
      garage,
      pageSize,
      currentPage,
      onDelete,
      onChangePage,
      onShowToMenu,
      onChange,
      data,
    } = this.props;
    const { sorted } = this.state;
    const searchedCar =  garage.filter((car) =>
      car[sorted.path].toLowerCase().startsWith(data.toLowerCase())
    );
    const pageCount = Math.ceil(searchedCar.length / pageSize);
    // if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    const sortedCars = _.orderBy(searchedCar, [sorted.path], [sorted.order]);
    const cars = paginater(sortedCars, currentPage, pageSize);
    return (
      <div className="main-side">
        <div className="side-content">
          <h1>CARS REGISTRED</h1>
          <div className="buttons">
            <Link to="/home/registerNewCar/new" className="add">
              ADD NEW
            </Link>
          </div>
        </div>
        <nav className="navLink">
          <ul>
            <li>
              <Search
                added="search bg"
                id="seach2"
                onChange={onChange}
                data={data}
              />
            </li>
            <li>
                Number of Cars: {garage.length}
            </li>
          </ul>
        </nav>
        <section className="registerd-car">
          <div className="all-table-content">
            <table className="table">
              <thead className="thead-bg">
                <tr>
                  <th scope="col">#</th>
                  <th
                    scope="col"
                    onClick={() => this.handelChangeDrop("name")}
                  >
                    Driver'Name
                    {this.handelMakeSort("name")}
                  </th>
                  <th scope="col" onClick={() => this.handelChangeDrop("carMark")}>
                    Car's Type {this.handelMakeSort("carMark")}
                  </th>
                  <th
                    scope="col"
                    onClick={() => this.handelChangeDrop("plateNumber")}
                  >
                    Plaque {this.handelMakeSort("plateNumber")}
                  </th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Modify Data</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car) => (
                  <Car
                    key={car._id}
                    onModify={this.handelModify}
                    onDelete={onDelete}
                    onShowToMenu={onShowToMenu}
                    carInfo={car}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="paginate">
          {pageCount !== 1 &&
            pages.map((page) => (
              <Pagination
                currentPage={currentPage}
                key={page}
                page={page}
                pageSize={pageCount}
                onChangePage={onChangePage}
              />
            ))}
        </section>
      </div>
    );
  }
}

export default MainSide;