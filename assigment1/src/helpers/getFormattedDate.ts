export function getFormattedDate(date: Date) {
  if (!(date instanceof Date)) {
    throw new Error("Invalid date format");
  }
  return date.toLocaleDateString("en-US");
}
