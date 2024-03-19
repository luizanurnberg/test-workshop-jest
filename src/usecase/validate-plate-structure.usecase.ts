function validatePlateStructureUsecase(vehiclePlate: string): boolean {
  if (vehiclePlate.length !== 7) return false;

  return true;
}

export default validatePlateStructureUsecase;
