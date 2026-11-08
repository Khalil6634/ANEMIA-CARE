function getWednesdaysInMonth(year: number, month: number) {
  const wednesdays: Date[] = [];
  const date = new Date(year, month, 1);

  while (date.getDay() !== 3) {
    date.setDate(date.getDate() + 1);
  }

  while (date.getMonth() === month) {
    wednesdays.push(new Date(date));
    date.setDate(date.getDate() + 7);
  }

  return wednesdays;
}

export default getWednesdaysInMonth;
