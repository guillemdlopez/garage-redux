export const FETCH_CARS = "FETCH_CARS";
export const ADD_CAR = "ADD_CARS";

const BASE_URL = "https://wagon-garage-api.herokuapp.com/";

export function fetchCars(garage) {
  const promise = fetch(`${BASE_URL}${garage}/cars`).then((res) => res.json());

  return {
    type: FETCH_CARS,
    payload: promise,
  };
}

export function addCar(garage, car, callback) {
  const request = fetch(`${BASE_URL}${garage}/cars`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  })
    .then((res) => res.json())
    .then(() => callback());

  return {
    type: ADD_CAR,
    payload: request,
  };
}
