import Vehicle from "../models/vehicle";

function validateVehicleWeightUseCase(vehicle: Vehicle): boolean {
  if (vehicle.type == "car") {
    if (vehicle.weight >= 900 && vehicle.weight <= 2000) {
      return true;
    }
  } else if (vehicle.type == "truck") {
    if (vehicle.weight >= 6000 && vehicle.weight <= 14000) {
      return true;
    }
  } else if (vehicle.type == "bicycle") {
    if (vehicle.weight === 11) {
      return true;
    }
  } else if (vehicle.type == "motorcycle") {
    if (vehicle.weight === 120) {
      return true;
    }
  }
  return false
}


export default validateVehicleWeightUseCase;