import validatePlateSumUsecase from "../../usecase/validate-plate-sum.usecase";
import arrangeTestContext from "./arrange-test-context";

describe("validatePlateSumUsecase", () => {
  const { wrongPlateVehicle, correctPlateVehicle } = arrangeTestContext();
  describe("GIVEN a vehicle with correct plate", () => {
    it("SHOULD pass through validator and returns true", () => {
      const isPlateValid = validatePlateSumUsecase(
        correctPlateVehicle.license_plate
      );
      expect(isPlateValid).toBe(true);
    });
  });

  describe("GIVEN a vehicle with a wrong plate ", () => {
    it("SHOULD NOT pass through validator and returns false", () => {
      const isPlateValid = validatePlateSumUsecase(
        wrongPlateVehicle.license_plate
      );
      expect(isPlateValid).toBe(false);
    });
  });
});
