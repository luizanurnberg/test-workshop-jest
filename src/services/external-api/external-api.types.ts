export interface ExternalAPIInterface {
  validateVehicleChassis: (chassisNumber: string) => Promise<boolean>;
  getTypeOfVehicle: (vehicleWeight: number) => Promise<string>;
}
