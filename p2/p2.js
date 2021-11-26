const DaysEl = document.getElementById("Days")
const HoursEl = document.getElementById("Hours")
const MinutesEl = document.getElementById("Minutes")
const SecondsEl = document.getElementById("Seconds")





const newYear = '1 january 2022'

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const seconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(seconds / 3600 / 24)
    const hours = Math.floor(seconds / 3600 % 24)
    const minutes = Math.floor((seconds / 60) % 60)
    const second = Math.floor((seconds % 3600) % 60)
    console.log(days, hours, minutes, second)



    DaysEl.textContent = days;
    HoursEl.textContent = hours;
    MinutesEl.textContent = minutes;
    SecondsEl.textContent = second;



}
setInterval(countdown, 1000)