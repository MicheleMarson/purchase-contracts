export const dateFormat = (date) => {
  let originalDate = new Date(date);
  return new Intl.DateTimeFormat('hr-HR').format(originalDate);
}