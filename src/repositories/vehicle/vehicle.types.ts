import Vehicle from "../../models/vehicle";

export interface VehicleRepositoryInterface {
  create: (entity: Vehicle) => Promise<boolean>;
  findById: (id: string) => Vehicle | null;
  update: (entity: Vehicle) => Vehicle | null;
}
