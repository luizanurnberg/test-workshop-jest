import Vehicle from "../../models/vehicle";
import VehicleRepository from "../../repositories/vehicle/vehicle.repository";


export default function arrangeTestContext() {
 const wrongChassisVehicle = new Vehicle(
   "234",
   "BMW",
   "white sedan",
   "blue",
   "di139s9a83j2fds",
   "EST4440",
   1231,
   "car",
   4
 );


 const expectedVehicleData = new Vehicle(
   "31213",
   "BMW",
   "white sedan",
   "blue",
   "di139s9a83j2fdsHONDA",
   "EST6600",
   1231,
   "truck",
   2
 );

 const vehicleRepository = new VehicleRepository();

 const existentVehicle = new Vehicle(
   "1",
   "BMW",
   "blue sedan",
   "blue",
   "di139s9a83j2fds",
   "EST1234",
   1231,
   "bicycle",
   0
 );

 return {
   existentVehicle,
   vehicleRepository,
   wrongChassisVehicle,
   expectedVehicleData,
 };
}
