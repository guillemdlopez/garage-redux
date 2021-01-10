import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

// Background image
import { src } from "./cars_index";

//Action
import { addCar } from "../actions";

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.addCar(this.props.garage, values, () => {
      this.props.history.push("/"); // Navigate after submit
    });
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
            <Link to="/" className="navigation-link">
              Back to list
            </Link>
          </div>
        </div>
        <div className="cars-new-background">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <label htmlFor="model">Brand</label>
            <Field label="Title" name="brand" type="text" component="input" />
            <label htmlFor="model">Model</label>
            <Field label="Model" name="model" type="text" component="input" />
            <label htmlFor="owner">Owner</label>
            <Field label="Owner" name="owner" type="text" component="input" />
            <label htmlFor="plate">Plate</label>
            <Field label="Plate" name="plate" type="text" component="input" />
            <button
              className="btn btn-primary"
              type="submit"
              disabled={this.props.pristine || this.props.submitting}
            >
              Park a Car
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage,
  };
}

export default reduxForm({ form: "newCarForm" })(
  connect(mapStateToProps, { addCar })(CarsNew)
);
