const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const padHours = String(date.getHours()).padStart(2,"0");
    const padMins = String(date.getMinutes()).padStart(2, "0");
    const padSecs = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${padHours}:${padMins}:${padSecs}`;
};

getClock();
setInterval(getClock, 1000);