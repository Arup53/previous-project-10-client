export function filterByActivation(dataArr) {
  const today = new Date();
  const filteredArr = dataArr.filter((el) => new Date(el.deadline) >= today);
  return filteredArr;
}

export function limiter(dataArr) {
  const result = dataArr.slice(0, 6);
  return result;
}

export function deadlineChecker(deadline) {
  const eventDeadline = new Date(deadline);
  const today = new Date();
  if (eventDeadline >= today) {
    return true;
  } else return false;
}
