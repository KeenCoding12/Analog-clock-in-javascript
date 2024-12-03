const hourEle = document.querySelector(".hour-hand");
const minuteEle = document.querySelector(".minute-hand");
const secondEle = document.querySelector(".second-hand");

function updateClock() {
    //get the current date and time
    const now = new Date();
    //calculate the degree of rotation for the hour,minute and second hands
    const hourDeg = (now.getHours() / 12) * 360;
    const minuteDeg = (now.getMinutes() / 60) * 360;
    const secondDeg = (now.getSeconds() / 60) * 360;

    hourEle.style.transform = `rotate(${hourDeg}deg)`;
    minuteEle.style.transform = `rotate(${minuteDeg}deg)`;
    secondEle.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
