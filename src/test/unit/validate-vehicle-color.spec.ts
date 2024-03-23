import validateVehicleColor from "../../usecase/validate-vehicle-color.usecase";
import arrangeTestContext from "./arrange-test-context";

describe("validateVehicleColor", () => {
  const { wrongColorVehicle, correctColorVehicle } = arrangeTestContext();
  describe("GIVEN a vehicle with correct color", () => {
    it("SHOULD pass through validator and returns true", () => {
      const isColorValid = validateVehicleColor(
        correctColorVehicle.color
      );

      expect(isColorValid).toBe(true);
    });
  });

  describe("GIVEN a vehicle with a wrong color ", () => {
    it("SHOULD NOT pass through validator and returns false", () => {
      const isColorValid = validateVehicleColor(
        wrongColorVehicle.color
      );

      expect(isColorValid).toBe(false);
    });
  });
});
