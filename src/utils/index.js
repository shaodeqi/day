export const fixPrecision = (num, precision = 2) => {
  return parseFloat(+num.toFixed(precision));
};
export const countLeapYears = (year) => {
  return Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);
};
export const isLeapYear = (year) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
