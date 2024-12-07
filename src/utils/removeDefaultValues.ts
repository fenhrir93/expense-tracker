export function removeDefaultValues<T>(array: T[], defaultValues: T[]): T[] {
  return array.filter(
    (item) =>
      !defaultValues.some(
        (defaultItem) => JSON.stringify(item) === JSON.stringify(defaultItem)
      )
  );
}
