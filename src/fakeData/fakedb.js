const addBreakToStorage = (value) => {
  let breakTime = {};
  const storedTime = localStorage.getItem("break-time");
  if (storedTime) {
    breakTime = JSON.parse(storedTime);
  }
  localStorage.setItem("break-time", JSON.stringify(breakTime));
};
