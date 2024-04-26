const usePostDate = (date) => {
  const options = { month: "long", day: "numeric", year: "numeric" };
  const tmpDate = new Date(date);
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(tmpDate);

  return formattedDate;
};

export default usePostDate;