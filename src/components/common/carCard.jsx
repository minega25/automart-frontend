import React from 'react';
import image from '../../assets/images/tesla.jpg';

const CarCard = ({ price, manufacturer }) => (
  <>
    <a className="row" href="/AutoMart/UI/pages/car-detail.html" title="">
      <div className="column-1 shadow-effect">
        <div className="row">
          <img src={image} height="120px" alt="really" />
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
                <td>
                  {price}
                </td>
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
