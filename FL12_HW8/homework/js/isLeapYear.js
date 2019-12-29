function isLeapYear(year) {
  year = new Date(year).getFullYear();

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year`;
  } else if (isNaN(year)) {
    return 'Invalid date';
  } else {
    return `${year} is not a leap year`;
  }
}

console.log(isLeapYear('2020-01-01 00:00:00'));
