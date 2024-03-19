function validatePlateSumUsecase(vehiclePlate: string): boolean {
  const fourLastNumbers = vehiclePlate.substr(vehiclePlate.length - 4);

  const splittedNumbers = fourLastNumbers.split("");

  const plateSum = splittedNumbers.reduce(
    (partialSum, number) => partialSum + parseInt(number),
    0
  );

  if (plateSum == 12) return true;

  return false;
}

export default validatePlateSumUsecase;
