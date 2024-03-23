const express = require("express");
const app = express();
const port = 3001;

app.get("/get-type-of-vehicle/:vehicle_weight", (req: any, res: any) => {
  const { vehicle_weight: vehicleWeight } = req.params;

  let vehicleType = "";

  if (vehicleWeight > 1500 && vehicleWeight <= 2500) vehicleType = "A";

  if (vehicleWeight <= 1500) vehicleType = "B";

  if (vehicleWeight >= 2500) vehicleType = "C";

  console.log({ vehicleType });

  res.send({ vehicleType });
});

app.get("/validate-vehicle-chassis/:chassis_number", (req: any, res: any) => {
  const { chassis_number: chassisNumber } = req.params;

  const isVehicleValid = chassisNumber.includes("HONDA");

  console.log({ isVehicleValid });

  res.send({ isVehicleValid });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
