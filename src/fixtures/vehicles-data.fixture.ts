import Vehicle from "../models/vehicle";

const VEHICLES_DATA: Vehicle[] = [
  {
    id: "1",
    name: "BMW",
    description: "blue sedan",
    color: "blue",
    chassis: "di139s9a83j2fds",
    license_plate: "EST1234",
    weight: 1500,
    type: "car",
    numberOfDoors: 4
  },

  {
    id: "2",
    name: "BMW",
    description: "red sedan",
    color: "red",
    chassis: "di139s9a83j2fds",
    license_plate: "EST1235",
    weight: 9000,
    type: "truck",
    numberOfDoors: 2
  },

  {
    id: "3",
    name: "BMW",
    description: "green sedan",
    color: "green",
    chassis: "di139s9a83j2fds",
    license_plate: "EST123B",
    weight: 11,
    type: "bicycle",
    numberOfDoors: 0
  },
];

export default VEHICLES_DATA;
