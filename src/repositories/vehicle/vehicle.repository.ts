import VEHICLES_DATA from "../../fixtures/vehicles-data.fixture";
import { VehicleRepositoryInterface } from "./vehicle.types";
import ExternalApiService from "../../services/external-api/external-api.service";

import Vehicle from "../../models/vehicle";
import validatePlateSumUsecase from "../../usecase/validate-plate-sum.usecase";
import validatePlateStructureUsecase from "../../usecase/validate-plate-structure.usecase";

import VehicleAlreadyExists from "./exceptions/vehicle-already-exists.error";
import VehicleChassisInvalid from "./exceptions/vehicle-chassis-invalid.error";
import VehiclePlateSumInvalid from "./exceptions/vehicle-plate-sum-invalid.error";
import VehiclePlateStructureInvalid from "./exceptions/vehicle-plate-structure-invalid.error";
import VehicleNotFound from "./exceptions/vehicle-not-found.error";

class VehicleRepository implements VehicleRepositoryInterface {
  private state: Vehicle[];

  constructor() {
    this.state = VEHICLES_DATA;
  }


  async _validateVehicle(entity: Vehicle) {
    const hasVehicleWithSameId = this.state.find(
      (vehicle) => vehicle.id == entity.id
    );

    if (hasVehicleWithSameId) throw new VehicleAlreadyExists();

    const vehicleLicensePlate = entity.license_plate;

    const isVehiclePlateStructureValid =
      validatePlateStructureUsecase(vehicleLicensePlate);

    if (!isVehiclePlateStructureValid) {
      throw new VehiclePlateStructureInvalid();
    }

    const isVehiclePlateSumValid = validatePlateSumUsecase(vehicleLicensePlate);

    if (!isVehiclePlateSumValid) {
      throw new VehiclePlateSumInvalid();
    }

    const isVehicleChassisValid =
      await ExternalApiService.validateVehicleChassis(entity.chassis);

    if (!isVehicleChassisValid) {
      throw new VehicleChassisInvalid();
    }

    return true;
  }

  async create(entity: Vehicle) {
    const isVehicleValid = await this._validateVehicle(entity);

    if (isVehicleValid) {
      this.state.push(entity);
      return true;
    }

    return false;
  }

  findById(id: string) {
    return this.state.find((vehicle) => vehicle.id == id) || null;
  }

  update(entity: Vehicle) {
    const hasVehicleWithSameId = this.state.some(
      (vehicle) => vehicle.id == entity.id
    );

    if (!hasVehicleWithSameId) {
      throw new VehicleNotFound();
    }

    this.state = this.state.map((vehicle) => {
      if (vehicle.id == entity.id) {
        return entity;
      }
      return vehicle;
    });

    return this.state.find((vehicle) => vehicle.id == entity.id) || null;
  }

  async validateLicensePlate(plate: string) {
    const regex = /^[0-9]{3}[a-zA-Z]{4}$/;
    return Promise.resolve(regex.test(plate));
  }

}

export default VehicleRepository;
