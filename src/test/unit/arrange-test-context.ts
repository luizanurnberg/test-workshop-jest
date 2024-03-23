import Vehicle from "../../models/vehicle";

export default function arrangeTestContext() {
  const wrongPlateVehicle = new Vehicle(
    "1",
    "BMW",
    "white sedan",
    "blue",
    "di139s9a83j2fds",
    "ST4444",
    1231,
    "car",
    4
  );

  const correctPlateVehicle = new Vehicle(
    "1",
    "BMW",
    "white sedan",
    "blue",
    "di139s9a83j2fds",
    "EST6600",
    1231,
    "truck",
    2
  );

  const wrongColorVehicle = new Vehicle(
    "1",
    "BMW",
    "blue sedan",
    "blue",
    "di139s9a83j2fds",
    "ST4444",
    245,
    "motorcycle",
    0
  );

  const correctColorVehicle = new Vehicle(
    "1",
    "BMW",
    "pink sedan",
    "pink",
    "di139s9a83j2fds",
    "EST6600",
    678,
    "bicycle",
    0
  );

  const wrongWeightVehicle = new Vehicle(
    "1",
    "BMW",
    "blue sedan",
    "blue",
    "di139s9a83j2fds",
    "ST4444",
    245,
    "motorcycle",
    0
  );
 
  const correctWeightVehicle = new Vehicle(
    "1",
    "BMW",
    "pink sedan",
    "pink",
    "di139s9a83j2fds",
    "EST6600",
    6780,
    "truck",
    2
  );

  const wrongNumbersOfDoorsVehicle = new Vehicle(
    "1",
    "BMW",
    "blue sedan",
    "blue",
    "di139s9a83j2fds",
    "ST4444",
    245,
    "motorcycle",
    2
  );
 
  const correctNumbersOfDoorsVehicle = new Vehicle(
    "1",
    "BMW",
    "pink sedan",
    "pink",
    "di139s9a83j2fds",
    "EST6600",
    6780,
    "truck",
    2
  );

  return {
    wrongPlateVehicle,
    correctPlateVehicle,
    wrongColorVehicle,
    correctColorVehicle,
    wrongWeightVehicle,
    correctWeightVehicle,
    wrongNumbersOfDoorsVehicle,
    correctNumbersOfDoorsVehicle
  };
}
