let currentDay = document.getElementById("currentDay");
let currentUTCTime = document.getElementById("currentUTCTime");


let updateCurrent = setInterval(
  function calcTIme() {
    let date_now = new Date();
    
    // Setting for dates
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[date_now.getDay()];
    let utcHours = date_now.getUTCHours();
    let utcMinutes = date_now.getUTCMinutes();
    let utcSeconds = date_now.getUTCSeconds();
    let utcMilliseconds = date_now.getUTCMilliseconds();

    currentDay.textContent = `${day}`;
    currentUTCTime.textContent = `${utcHours}: ${utcMinutes}: ${utcSeconds}: ${utcMilliseconds}`

  }, 
  1000
);
