import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { src } from "./cars_index";
import { cardImage } from "./cars_index";

class CarsShow extends Component {
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
                {this.props.car.brand.toUpperCase()} -{" "}
                {this.props.car.model.toUpperCase()}
              </p>
              <p>
                <scan className="car-owner">Owner:</scan> {this.props.car.owner}
              </p>
              <p className="plate">{this.props.car.plate}</p>
            </div>
            <p className="btn-delete">Delete</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find((c) => c.id == id);
  return { car, garage: state.garage };
}

export default connect(mapStateToProps)(CarsShow);
