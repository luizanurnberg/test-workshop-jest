class Vehicle extends Object {
  id: string;
  name: string;
  description: string;
  color: string;
  chassis: string;
  license_plate: string;
  weight: number;

  constructor(
    id: string,
    name: string,
    description: string,
    color: string,
    chassis: string,
    license_plate: string,
    weight: number
  ) {
    super();
    this.id = id;
    this.name = name;
    this.description = description;
    this.color = color;
    this.chassis = chassis;
    this.license_plate = license_plate;
    this.weight = weight;
  }
}

export default Vehicle;
