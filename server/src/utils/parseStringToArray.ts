export default function parseStringAsArray(arrayAsString : string) {
  return arrayAsString.split(',').map(week_day => week_day.trim());
}