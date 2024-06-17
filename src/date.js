const timeSpan = document.querySelector("#time");
const dateSpan = document.querySelector("#date");

function showTime() {
  let time = new Date();
  timeSpan.innerText = time.toLocaleTimeString("en-US", {
    hour12: false,
  });
  setTimeout(showTime, 1000);
}

showTime();

function updateDate() {
  let today = new Date();

  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dateArray = [dayNum, months[month], year];
  dateSpan.innerText = dateArray.join("-");
}

updateDate();
