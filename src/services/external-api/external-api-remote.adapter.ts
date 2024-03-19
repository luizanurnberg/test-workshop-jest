import { ExternalAPIInterface } from "./external-api.types";
const axios = require("axios");

const BASE_URL = "http://localhost:3001";

const ROUTES = {
  VALIDATE_CHASSIS: "/validate-vehicle-chassis/",
  GET_VEHICLE_TYPE: "/get-type-of-vehicle/",
};

class ExternalApiRemoteAdapter implements ExternalAPIInterface {
  async getTypeOfVehicle(vehicleWeight: number) {
    const url = BASE_URL + ROUTES.GET_VEHICLE_TYPE + vehicleWeight;

    const { data: responseBody } = await axios.get(url);

    return responseBody?.vehicleType;
  }

  async validateVehicleChassis(chassisNumber: string) {
    const url = BASE_URL + ROUTES.VALIDATE_CHASSIS + chassisNumber;

    const { data: responseBody } = await axios.get(url);

    return responseBody?.isVehicleValid;
  }
}

export default ExternalApiRemoteAdapter;
