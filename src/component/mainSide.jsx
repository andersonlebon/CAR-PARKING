import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import Pagination from "./common/pagination";
import paginater from "./common/paginate";
import Search from "./common/search";
import Car from "./common/car";
import { BsGrid, BsList, BsListTask } from "react-icons/bs";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

class MainSide extends Component {
  state = {
    changeClass: false,
    data: "",
    sorted: { path: "driver", order: "asc" },
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
    console.log("go");
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
    const searchedCar = garage.filter((car) =>
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
            {/* <div className="select">
              <div className="selected">
                <input type="checkbox" className="selected" id="check" />
              </div>
              <button onClick={() => ongetAcar()} className="do">
                t
              </button>
            </div> */}
          </div>
        </div>
        <nav className="navLink">
          <ul>
            <li>
              <Link className="bigIcon" to="#">
                <span>
                  <BsList />
                </span>
              </Link>
            </li>
            <li>
              <Link className="bigIcon" to="#">
                <span>
                  <BsListTask />
                </span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span>
                  <BsGrid />
                </span>
              </Link>
            </li>
            <li>
              <div
                onClick={() => this.handelChangeClass()}
                className="search bg div"
              >
                <p>
                  Oder by: {this.state.sorted.path}{" "}
                  {
                    <i>
                      {this.state.sorted.order === "asc" ? (
                        <IoMdArrowDropdown />
                      ) : (
                        <IoMdArrowDropup />
                      )}
                    </i>
                  }
                </p>
                <div className={this.state.changeClass ? "drop" : "not-drop"}>
                  <ul>
                    <li onClick={() => this.handelSort("driver")}>
                      <Link to="#">Name </Link>
                    </li>
                    <li onClick={() => this.handelSort("type")}>
                      <Link to="#">Type of cars</Link>
                    </li>
                    <li onClick={() => this.handelSort("plaque")}>
                      <Link to="#">Plaque</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Search
                added="search bg"
                id="seach2"
                onChange={onChange}
                data={data}
              />
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
                    onClick={() => this.handelChangeDrop("driver")}
                  >
                    Driver'Name
                    {this.handelMakeSort("driver")}
                  </th>
                  <th scope="col" onClick={() => this.handelChangeDrop("type")}>
                    Car's Type {this.handelMakeSort("type")}
                  </th>
                  <th
                    scope="col"
                    onClick={() => this.handelChangeDrop("plaque")}
                  >
                    Plaque {this.handelMakeSort("plaque")}
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
