import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
export const src =
  "https://lewagon.github.io/chat-redux/assets/images/logo.svg";
export const cardImage =
  "https://media-exp1.licdn.com/dms/image/C560BAQFlSIIgaxHSlg/company-logo_200_200/0/1593706425420?e=2159024400&v=beta&t=ZTzq5hY5T4LN8MwCPH751e-gnnibHdzMI7JDN1W9rxQ";

// Actions
import { fetchCars } from "../actions";

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  renderCars = (car) => {
    return (
      <Link to={`/cars/${car.id}`} key={car.id}>
        <div className="car-card">
          <img src={cardImage} style={{ width: "110px" }} />
          <div className="car-card-content">
            <p className="car-brand-model">
              {car.brand.toUpperCase()} - {car.model.toUpperCase()}
            </p>
            <p>
              <scan className="car-owner">Owner:</scan> {car.owner}
            </p>
          </div>
        </div>
      </Link>
    );
  };

  render() {
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
            <Link to="/cars/new" className="navigation-link">
              Add a car
            </Link>
          </div>
        </div>
        <div className="cars-list" style={{ height: "100%" }}>
          {this.props.cars.map((car) => this.renderCars(car))}
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
