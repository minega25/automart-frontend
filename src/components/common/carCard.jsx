import React from "react";
import { Link } from "react-router-dom";
import carImage from "../../../src/assets/images/tesla.jpg";

const CarCard = ({ price, manufacturer }) => (
  <>
    <a className="row" href="/AutoMart/UI/pages/car-detail.html" title="">
      <div className="column-1 shadow-effect">
        <div className="row">
          <img src={carImage} height="120px" />
        </div>
        <div className="row">
          <h4>{manufacturer}</h4>
        </div>
        <div className="row shadow-effect">
          <table className="column-5 or-x">
            <thead className="">
              <tr className="align-left or-x">
                <th>Price</th>

                <th>Brand</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="or-x">
                <td>${price}</td>

                <td>{manufacturer}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </a>
  </>
);

export default CarCard;
