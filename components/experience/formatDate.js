const formatDate = (date) => {
  return date
    .toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    })
    .toLocaleLowerCase();
};

export default formatDate;
