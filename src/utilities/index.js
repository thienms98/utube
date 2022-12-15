export const shortenNumber = (num) => {
  let count = 0;
  while (num > 1000) {
    num /= 1000;
    count++;
  }
  num = Math.floor(num);
  switch (count) {
    case 0:
      return `${num}`;
    case 1:
      return `${num}K`;
    case 2:
      return `${num}M`;
    case 3:
      return `${num}B`;
    case 4:
      return `${num}T`;
    default:
  }
};

export const shortenTimeStamp = (time) => {
  const min = time / 1000 / 60;
  if (min < 60) return `${Math.floor(min)} minutes ago`;
  const hour = min / 60;
  if (hour < 24) return `${Math.floor(hour)} hours ago`;
  const day = hour / 24;
  if (day < 7) return `${Math.floor(day)} days ago`;
  const week = day / 7;
  if (week < 7) return `${Math.floor(week)} weeks ago`;
  const month = week / 4;
  if (month < 12) return `${Math.floor(month)} months ago`;
  return `${Math.floor(day / 365)} years ago`;
};

export const subtractTime = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();

  return Math.abs(now - start);
};

export const datetimeFormat = (input) => {
  const datetime = new Date(input);
  const [day, month, date, year] = datetime.toDateString().split(' ');
  return `${month} ${date}, ${year}`;
};
