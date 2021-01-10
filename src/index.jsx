import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import logger from "redux-logger";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createHistory as history } from "history";
import { reducer as formReducer } from "redux-form";

import "../assets/stylesheets/application.scss";

// Reducers
import carsReducer from "./reducers/cars_reducer.js";

// Components
import CarsIndex from "./containers/cars_index.js";
import CarsNew from "./containers/cars_new.js";
import CarsShow from "./containers/cars_show.js";

const initialState = {
  garage:
    `Garage ${prompt("What is your garage name?")}` ||
    `garage${Math.floor(10 + Math.random() * 90)}`,
  cars: [],
};

const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer,
  form: formReducer,
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={CarsIndex} />
        <Route path="/cars/new" component={CarsNew} />
        <Route path="/cars/:id" exact component={CarsShow} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
