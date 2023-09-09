let currentDay = document.getElementById("currentDay");
let currentUTCTime = document.getElementById("currentUTCTime");


let updateCurrent = setInterval(
  function calcTIme() {
    let date_now = new Date();
    let utcHours = date_now.getUTCHours();
    let utcMinutes = date_now.getUTCMinutes();
    let utcSeconds = date_now.getUTCSeconds();

    utcHours = (utcHours < 10) ? "0" + utcHours : utcHours;
    utcMinutes = (utcMinutes < 10) ? "0" + utcMinutes : utcMinutes;
    utcSeconds = (utcSeconds < 10) ? "0" + utcSeconds : utcSeconds;

    // Setting for dates
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[date_now.getDay()];

    currentDay.textContent = `${day}`;
    currentUTCTime.textContent = `${utcHours} : ${utcMinutes} : ${utcSeconds}`

  }, 
  1000
);
