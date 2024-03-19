import { ExternalAPIInterface } from "./external-api.types";

class ExternalApiAdapterStub implements ExternalAPIInterface {
  async getTypeOfVehicle(weight: number) {
    return "A";
  }

  async validateVehicleChassis(chassisNumber: string) {
    return true;
  }
}

export default ExternalApiAdapterStub;
