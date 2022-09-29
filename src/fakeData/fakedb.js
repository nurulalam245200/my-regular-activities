const addBreakToStorage = (value) => {
  const time = value;
  setTimeInStore(time);
};
const getTimeValueFromStore = () => {
  let saveStore = localStorage.getItem("break-time");
  let breakTime = {};
  if (saveStore) {
    breakTime = JSON.parse(saveStore);
  }
  return breakTime;
};

const setTimeInStore = (item, quantity) => {
  const time = getTimeValueFromStore();
  time[item] = quantity;
  const stingified = JSON.stringify(time);
  localStorage.setItem("break-time", stingified);
};
