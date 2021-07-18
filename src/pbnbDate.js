const pbnbDate = () => {
  const today = new Date();
  const day = today.getDay();
  const dayNames = ["(일)", "(월)", "(화)", "(수)", "(목)", "(금)", "(토)"];
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const pbnb = (month + day) % 2 === 0; // true : 빠밥
  const yyyymmdd = today.toISOString().split("T")[0].replaceAll("-", "");
  const dateStr = `${month}/${date} ${dayNames[day]}`;
  return { pbnb, yyyymmdd, dateStr };
};

export default pbnbDate;
