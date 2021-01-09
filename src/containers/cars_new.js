import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";

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
      <div>
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
