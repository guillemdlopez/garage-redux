import { FETCH_CARS, DELETE_CAR, FETCH_CAR } from "../actions";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case FETCH_CAR:
      return [action.payload];
    case DELETE_CAR:
      return state.filter((car) => car !== action.payload);
    default:
      return state;
  }
}
