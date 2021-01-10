import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Images
import { src, cardImage } from "./cars_index";

// Action
import { deleteCar, fetchCar } from "../actions/index";

class CarsShow extends Component {
  componentWillMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  handleClick = () => {
    this.props.deleteCar(this.props.car, () => {
      this.props.history.push("");
    });
  };

  render() {
    const car = this.props.car;
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
            <Link to="/" className="navigation-link">
              Back to list
            </Link>
          </div>
        </div>
        <div className="show-page">
          <div className="car-card-show">
            <img src={cardImage} style={{ width: "200px" }} />
            <div className="car-card-content">
              <p className="car-brand-model">
                {car.brand.toUpperCase()} - {car.model.toUpperCase()}
              </p>
              <p>
                <scan className="car-owner">Owner:</scan>{" "}
                {car.owner[0].toUpperCase() +
                  car.owner.substring(1).toLowerCase()}
              </p>
              <p className="plate">{car.plate.toUpperCase()}</p>
            </div>
            <p className="btn-delete" onClick={this.handleClick}>
              Delete
            </p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id);
  const car = state.cars.find((c) => c.id == id);
  return { car, garage: state.garage };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteCar, fetchCar }, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CarsShow)
);
