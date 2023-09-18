const dateContainer = document.querySelector(".date-container");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const weekdays = [
  "Sunday",
  "Monday",
  "Thurday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formateTime(time) {
  return time < 10 ? "0" + time : time; // 3: 40: 10 --> 03 : 45 : 10
}

function updateClock() {
  const today = new Date();
  let date = today.getDate();
  let day = weekdays[today.getDay()];
  let month = monthNames[today.getMonth()];

  let hr = formateTime(today.getHours());
  let min = formateTime(today.getMinutes());
  let sec = formateTime(today.getSeconds());

  dateContainer.innerHTML = `
    <p>${day}</p>
    <p><span>${date}</span></p>
    <p>${month}</p> 
    `;

  hours.textContent = hr + ":";
  minutes.textContent = min + ":";
  seconds.textContent = sec;
}

setInterval(() => {
    updateClock()
}, 1000);