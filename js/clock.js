const clock = document.querySelector("h1#clock");


function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock();  // load 되자마자 실행되도록 하기 위해 먼저 호출
setInterval(getClock, 1000);