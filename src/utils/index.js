export const fixPrecision = (num, precision = 2) => {
  return parseFloat(+num.toFixed(precision));
};
// 四年一闰，百年不闰，四百年又闰
export const countLeapYears = (year) => {
  return Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);
};
// 四年一闰，百年不闰，四百年又闰
export const isLeapYear = (year) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

// 2024-3-14 => 314; 2024-3-04 => 304 用于日期大小比较
export const getDateNumber = (date) => {
  const month = new Date(date).getMonth() + 1;
  const dateNum = new Date(date).getDate();
  const dateStr = dateNum >= 10 ? dateNum : `0${dateNum}`;

  return +`${month}${dateStr}`;
};

// 获取时间间隔 x 年 x 天 x 小时 x 分 x 秒
export const getDuration = (
  baseDate = new Date('2022-3-14 20:00'),
  date = new Date('2024-3-14 20:00')
) => {
  const normalYearsMS = 31536000000; // 平年毫秒数 365 * 24 * 60 * 60 * 1000
  const leapYearsMS = 31622400000; // 闰年毫秒数 366 * 24 * 60 * 60 * 1000

  // 期间有多少个闰年
  const baseLeapYears = Math.round(
    countLeapYears(date.getFullYear()) -
      countLeapYears(new Date(baseDate).getFullYear())
  );

  let yearsComputedLeapYears = baseLeapYears;
  if (isLeapYear(date.getFullYear()) && getDateNumber(date) <= 229) {
    yearsComputedLeapYears = baseLeapYears - 1;
  }

  const durationTimestamp = +date - baseDate;
  // 计算 n 个年头
  const years = Math.floor(
    (durationTimestamp - yearsComputedLeapYears * 31622400000) / 31536000000 +
      yearsComputedLeapYears
  );

  // 实际度过了多少个闰年
  let daysComputedLeapYears = baseLeapYears;
  if (
    isLeapYear(date.getFullYear()) &&
    getDateNumber(date) < getDateNumber(baseDate)
  ) {
    daysComputedLeapYears = baseLeapYears - 1;
  }

  const yearsTimestamp =
    31622400000 * daysComputedLeapYears +
    31536000000 * (years - daysComputedLeapYears);

  const days = Math.floor((durationTimestamp - yearsTimestamp) / 86400000);

  const hours = Math.floor(
    (durationTimestamp - yearsTimestamp - 86400000 * days) / 3600000
  );
  const minutes = Math.floor(
    (durationTimestamp - yearsTimestamp - 86400000 * days - 3600000 * hours) /
      60000
  );
  const seconds = Math.floor(
    (durationTimestamp -
      yearsTimestamp -
      86400000 * days -
      3600000 * hours -
      60000 * minutes) /
      1000
  );
  return {
    years,
    days,
    hours,
    minutes,
    seconds,
  };
};
