import Vehicle from "../../models/vehicle";

export default function arrangeTestContext() {
  const wrongPlateVehicle = new Vehicle(
    "1",
    "BMW",
    "white sedan",
    "blue",
    "di139s9a83j2fds",
    "ST4444",
    1231
  );

  const correctPlateVehicle = new Vehicle(
    "1",
    "BMW",
    "white sedan",
    "blue",
    "di139s9a83j2fds",
    "EST6600",
    1231
  );

  return {
    wrongPlateVehicle,
    correctPlateVehicle,
  };
}
