import arrangeTestContext from "./arrange-test-context";

import VehicleChassisInvalid from "../../repositories/vehicle/exceptions/vehicle-chassis-invalid.error";
import VehicleNotFound from "../../repositories/vehicle/exceptions/vehicle-not-found.error";

describe("VehicleRepository", () => {
  const {
    existentVehicle,
    vehicleRepository,
    wrongChassisVehicle,
    expectedVehicleData,
  } = arrangeTestContext();

  describe(".create", () => {
    describe("GIVEN a vehicle with correct data ", () => {
      it("SHOULD create a vehicle and return true", async () => {
        expect(await vehicleRepository.create(expectedVehicleData)).toBe(true);
      });
    });

    describe("GIVEN a vehicle with a wrong chassis ", () => {
      it("SHOULD NOT pass through creation and throw VehicleChassisInvalid error", () => {
        expect(async () => {
          await vehicleRepository.create(wrongChassisVehicle);
        }).rejects.toThrow(VehicleChassisInvalid);
      });
    });
  });

  describe(".findById", () => {
    describe("GIVEN a valid vehicle id", () => {
      it("SHOULD find the vehicle and return it", () => {
        expect(vehicleRepository.findById("1")).not.toBe(null);
      });
    });
    describe("GIVEN a invalid vehicle id", () => {
      it("SHOULD NOT find the vehicle and return null", () => {
        expect(vehicleRepository.findById("1123")).toBeNull();
      });
    });
  });
  describe(".update", () => {
    describe("GIVEN an existent vehicle", () => {
      it("SHOULD update the vehicle and return it", () => {
        expect(vehicleRepository.update(existentVehicle)?.id).toBe(
          existentVehicle.id
        );
      });
    });
    describe("GIVEN an unexistent vehicle", () => {
      it("SHOULD not update the vehicle and return VehicleNotFound() error", () => {
        expect(() => vehicleRepository.update(wrongChassisVehicle)).toThrow(
          VehicleNotFound
        );
      });
    });
  });
});
