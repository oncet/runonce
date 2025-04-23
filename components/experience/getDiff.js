const getDiff = (endDate, startDate) => {
  const diffInMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  if (years === 0) {
    return `${months} month${months !== 1 ? "s" : ""}`;
  }

  const formattedDiff = `${years} year${
    years !== 1 ? "s" : ""
  }, ${months} month${months !== 1 ? "s" : ""}`;
  return formattedDiff;
};

export default getDiff;
