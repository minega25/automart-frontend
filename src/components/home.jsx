import React, { Component } from 'react';
import CarCard from './common/carCard';
import carService from '../services/carService';

class Home extends Component {
  state = { cars: [] };

  async componentDidMount() {
    try {
      const { data } = await carService.getCars();
      this.setState({ cars: data.data });
    } catch (error) {
      console.log('Error', error);
    }
  }

  render() {
    return (
      <>
        <div className="row home-page-intro">
          <div className="column-5">
            <h3>Fast, safe and easy to buy and sell vehicles locally</h3>
          </div>
        </div>
        <div className="row shadow-effect">
          <form className="row or-x" action="" method="get">
            <div className="row centered ">
              <select className="form-select column-1" id="">
                <option value="">Manufacturer</option>
                <option value="dog">one</option>
                <option value="cat">two</option>
                <option value="hamster">three</option>
                <option value="parrot">four</option>
                <option value="spider">five</option>
              </select>
            </div>
            <div className="row centered column-1">
              <select className="form-select" id="">
                <option value="">Model</option>
                <option value="dog">one</option>
                <option value="cat">two</option>
                <option value="hamster">three</option>
                <option value="parrot">four</option>
                <option value="spider">five</option>
              </select>
            </div>
            <div className="row centered column-1">
              <select className="form-select" id="">
                <option value="">Body Type</option>
                <option value="dog">one</option>
                <option value="cat">two</option>
                <option value="hamster">three</option>
                <option value="parrot">four</option>
                <option value="spider">five</option>
              </select>
            </div>
            <div className="row centered column-1">
              <select className="form-select" id="">
                <option value="">State</option>
                <option value="dog">Used</option>
              </select>
            </div>
            <div className="row centered column-1">
              <input type="submit" className="button" name="" value="Search" />
            </div>
          </form>
        </div>
        <div className="row">
          <h1>Most Recently advertized cars</h1>
        </div>
        <div className="row or-x">
          {this.state.cars.map(car => (
            <CarCard
              key={car.id}
              price={car.price}
              manufacturer={car.manufacturer}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Home;
