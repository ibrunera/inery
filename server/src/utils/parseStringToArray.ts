export default function parseStringAsArray(arrayAsString : string) {
  return arrayAsString.split(',').map(week_day => Number(week_day.trim()));
}