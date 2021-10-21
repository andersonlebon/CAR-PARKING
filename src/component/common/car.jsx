import React, { Component } from "react";
import { Link } from "react-router-dom";

class Car extends Component {
  render() {
    const { carInfo: car, onModify, onShowToMenu, onDelete } = this.props;
    return (
      <tr>
        <th>{car.index}</th>
        <td onClick={() => onShowToMenu(car.index)}>
          <Link className="nameLink" to={`/home/${car.name}`}>
            {car.name}
          </Link>
        </td>
        <td onClick={() => onShowToMenu(car.index)}>{car.carMark}</td>
        <td onClick={() => onShowToMenu(car.index)}>{car.plateNumber}</td>
        <td onClick={() => onShowToMenu(car.index)}>{car.phoneNumber}</td>

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
