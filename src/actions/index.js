export const FETCH_CARS = "FETCH_CARS";
export const ADD_CAR = "ADD_CAR";
export const DELETE_CAR = "DELETE_CAR";
export const FETCH_CAR = "FETCH_CAR";

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

// ONLY ONE POST! //
export function fetchCar(id) {
  const promise = fetch(`${BASE_URL}cars/${id}`).then((res) => res.json());

  return {
    type: FETCH_CAR,
    payload: promise,
  };
}

export function deleteCar(car, callback) {
  fetch(`${BASE_URL}/cars/${car.id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(callback);

  return {
    type: DELETE_CAR,
    payload: car,
  };
}
