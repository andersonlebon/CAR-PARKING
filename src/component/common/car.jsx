import React, { Component } from "react";
import { Link } from "react-router-dom";

class Car extends Component {
  render() {
    const { carInfo: car, onModify, onShowToMenu, onDelete } = this.props;
    return (
      <tr>
        <th>{car._id}</th>
        <td onClick={() => onShowToMenu(car._id)}>
          <Link className="nameLink" to={`/home/${car._id}`}>
            {car.driver}
          </Link>
        </td>
        <td onClick={() => onShowToMenu(car._id)}>{car.type}</td>
        <td onClick={() => onShowToMenu(car._id)}>{car.plaque}</td>
        <td onClick={() => onShowToMenu(car._id)}>{car.phoneNumber}</td>

        <td>
          <button
            onClick={() => onModify(car._id)}
            style={{ fontSize: "13px", zIndex: 999 }}
            className="btn btn-dark"
          >
            Modify
          </button>
        </td>
        <td>
          <button onClick={() => onDelete(car._id)} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
export default Car;
