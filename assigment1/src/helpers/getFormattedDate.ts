export function getFormattedDate() {
  const date = new Date();
  return date.toLocaleDateString("en-US");
}
