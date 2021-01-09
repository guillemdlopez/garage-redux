import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

// Actions
import { fetchCars } from "../actions";

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  renderCars = (car) => {
    return (
      <div key={car.id} className="car-card">
        <p>
          {car.brand.toUpperCase()} - {car.model.toUpperCase()}
        </p>
        <p>Owner: {car.owner}</p>
      </div>
    );
  };

  render() {
    const src = "https://lewagon.github.io/chat-redux/assets/images/logo.svg";
    return (
      <div className="app-wrapper">
        <div className="current-garage">
          <div className="background-image"></div>
          <img src={src} className="logo-img" />
          <div className="current-garage-info">
            <h1 style={{ marginTop: "58px", marginBottom: "24px" }}>
              {this.props.garage}
            </h1>
            <p className="garage-description">
              Our garage is the best. Reasonable prices, always on time, we are
              the best (and fictionnal).
            </p>
            <Link to="/cars/new" className="add-car-link">
              Add a car
            </Link>
          </div>
        </div>
        <div className="cars-list" style={{ height: "100%" }}>
          {this.props.cars.map((car) => {
            return this.renderCars(car);
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
