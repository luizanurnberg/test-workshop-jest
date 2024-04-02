import validateVehicleDoors from "../../usecase/validate-vehicle-doors.usecase";
import arrangeTestContext from "./arrange-test-context";


describe("validateVehicleDoors", () => {
 const { wrongNumbersOfDoorsVehicle, correctNumbersOfDoorsVehicle } = arrangeTestContext();
 describe("GIVEN a vehicle with correct Doors", () => {
   it("SHOULD pass through validator and returns true", () => {
     const isDoorsValid = validateVehicleDoors(correctNumbersOfDoorsVehicle);
     expect(isDoorsValid).toBe(true);
   });
 });


 describe("GIVEN a vehicle with a wrong Doors", () => {
   it("SHOULD NOT pass through validator and returns false", () => {
     const isDoorsValid = validateVehicleDoors(wrongNumbersOfDoorsVehicle);
     expect(isDoorsValid).toBe(false);
   });
 });
});
