export function makeRandomNumber(prevNumber = 0) {
  const updateBy = Math.ceil(Math.random() * 10);
  const sign = Math.random() < 0.5 ? 1 : -1;
  return prevNumber + sign * updateBy;
}
