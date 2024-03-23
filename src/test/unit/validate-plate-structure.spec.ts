import validatePlateStructureUsecase from "../../usecase/validate-plate-structure.usecase";
import arrangeTestContext from "./arrange-test-context";
describe("validatePlateStructureUsecase", () => {
  const { wrongPlateVehicle, correctPlateVehicle } = arrangeTestContext();

  describe("GIVEN a vehicle with correct plate", () => {
    it("SHOULD pass through validator and returns true", () => {
      const isPlateValid = validatePlateStructureUsecase(
        correctPlateVehicle.license_plate
      );
      expect(isPlateValid).toBe(true);
    });
  });

  describe("GIVEN a vehicle with a wrong plate ", () => {
    it("SHOULD NOT pass through validator and returns false", () => {
      const isPlateValid = validatePlateStructureUsecase(
        wrongPlateVehicle.license_plate
      );
      expect(isPlateValid).toBe(false);
    });
  });
});
