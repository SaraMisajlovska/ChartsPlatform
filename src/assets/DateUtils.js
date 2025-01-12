export const getQuarterStartEnd = (date) => {
  const year = date.split("-")[0]
  const quarter = date.split("-")[1].substring(1)

  // Define the start and end months for each quarter
  const quarterStartMonth = [0, 3, 6, 9]; // Quarter starts at months: Q1 (Jan), Q2 (Apr), Q3 (Jul), Q4 (Oct)
  const quarterEndMonth = [2, 5, 8, 11];  // Quarter ends at months: Q1 (Mar), Q2 (Jun), Q3 (Sep), Q4 (Dec)

  // Get the start and end months for the given quarter
  const startMonth = quarterStartMonth[quarter - 1];
  const endMonth = quarterEndMonth[quarter - 1];

  // First day of the quarter
  const startDate = new Date(year, startMonth, 1);

  // Last day of the quarter: Set the date to the first day of the next month, then subtract 1 day
  const endDate = new Date(year, endMonth + 1, 0);

  return {
    firstDay: startDate,
    lastDay: endDate
  };
}

export const getYearStartEnd = (year) => {
  // First day of the year
  const firstDay = new Date(year, 0, 1); // January 1st of the given year

  // Last day of the year: Set the date to the first day of the next year, then subtract 1 day
  const lastDay = new Date(year + 1, 0, 0); // December 31st of the given year

  return {
    firstDay: firstDay,
    lastDay: lastDay
  };
}

export const getMonthStartEnd = (date) => {
  const firstOfTheMonth = new Date(date);
  const lastOfTheMonth = new Date(firstOfTheMonth.getFullYear(), firstOfTheMonth.getMonth() + 1, 0);

  return {
    firstDay: firstOfTheMonth,
    lastDay: lastOfTheMonth,
  }
}
export const getDayStartEnd = (date) => {
  let eod = new Date(date);
  eod.setHours(23);
  eod.setMinutes(59)
  eod.setMilliseconds(59)
  return {
    firstDay: new Date(date),
    lastDay: eod,
  }
}