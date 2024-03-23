import validateVehicleWeightUseCase from "../../usecase/validate-vehicle-weight.usecase";
import arrangeTestContext from "./arrange-test-context";


describe("validateVehicleWeight", () => {
 const { wrongWeightVehicle, correctWeightVehicle } = arrangeTestContext();
 describe("GIVEN a vehicle with correct weight", () => {
   it("SHOULD pass through validator and returns true", () => {
     const isWeightValid = validateVehicleWeightUseCase(correctWeightVehicle);
     expect(isWeightValid).toBe(true);
   });
 });


 describe("GIVEN a vehicle with a wrong weight", () => {
   it("SHOULD NOT pass through validator and returns false", () => {
     const isWeightValid = validateVehicleWeightUseCase(wrongWeightVehicle);
     expect(isWeightValid).toBe(false);
   });
 });
});
