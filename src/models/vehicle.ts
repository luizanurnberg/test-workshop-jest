class Vehicle extends Object {
 id: string;
 name: string;
 description: string;
 color: string;
 chassis: string;
 license_plate: string;
 weight: number;
 type: string;
 numberOfDoors: number;
 
 constructor(
   id: string,
   name: string,
   description: string,
   color: string,
   chassis: string,
   license_plate: string,
   weight: number,
   type: string,
   numberOfDoors: number
 ) {
   super();
   this.id = id;
   this.name = name;
   this.description = description;
   this.color = color;
   this.chassis = chassis;
   this.license_plate = license_plate;
   this.weight = weight;
   this.type = type;
   this.numberOfDoors = numberOfDoors;
 }
}


export default Vehicle;