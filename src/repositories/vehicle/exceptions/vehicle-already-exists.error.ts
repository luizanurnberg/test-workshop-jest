class VehicleAlreadyExists extends Error {
  constructor() {
    super("Vehicle already exists");
  }
}

export default VehicleAlreadyExists;
