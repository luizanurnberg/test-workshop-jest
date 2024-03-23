import Vehicle from "../models/vehicle";

function validateVehicleDoorsUseCase(vehicle: Vehicle): boolean {
  if (vehicle.type == "car") {
    if (vehicle.numberOfDoors >= 2 && vehicle.numberOfDoors <= 4) {
      return true;
    }
  } else if (vehicle.type == "truck") {
    if (vehicle.numberOfDoors >= 2 && vehicle.numberOfDoors <= 4) {
      return true;
    }
  } else if (vehicle.type == "bicycle") {
    if (vehicle.numberOfDoors === 0) {
      return true;
    }
  } else if (vehicle.type == "motorcycle") {
    if (vehicle.numberOfDoors === 0) {
      return true;
    }
  }
  return false
}


export default validateVehicleDoorsUseCase;