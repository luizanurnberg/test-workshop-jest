import validateVehicleDoors from "../../usecase/validate-vehicle-doors.usecase";
import arrangeTestContext from "./arrange-test-context";


describe("validateVehicleWeight", () => {
 const { wrongNumbersOfDoorsVehicle, correctNumbersOfDoorsVehicle } = arrangeTestContext();
 describe("GIVEN a vehicle with correct weight", () => {
   it("SHOULD pass through validator and returns true", () => {
     const isWeightValid = validateVehicleDoors(correctNumbersOfDoorsVehicle);
     expect(isWeightValid).toBe(true);
   });
 });


 describe("GIVEN a vehicle with a wrong weight", () => {
   it("SHOULD NOT pass through validator and returns false", () => {
     const isWeightValid = validateVehicleDoors(wrongNumbersOfDoorsVehicle);
     expect(isWeightValid).toBe(false);
   });
 });
});
