var min = 0, sec = 0, msec = 0;
var timer;
const playPauseButton = document.getElementsByClassName("fas")[0]
const stopButton = document.getElementsByClassName("fas")[1]

const run = () => {
    document.getElementById("timekeeper").innerHTML =
        (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec) + ":" + (msec < 10 ? "0" + msec : msec);
    msec++;
    if (msec == 100) {
        sec++;
        msec = 0;
    }
    if (sec == 60) {
        min++;
        sec = 0
    }

}

const start = () => {
    timer = setInterval(run,10) 
}

playPauseButton.addEventListener("click", () => {
    playPauseButton.className == "fas fa-play" ? start() : clearInterval(timer)
 
    playPauseButton.className == "fas fa-play" 
    ? playPauseButton.className = "fas fa-pause" 
    : playPauseButton.className = "fas fa-play"
})

stopButton.addEventListener("click", ()=> {
    clearInterval(timer);
    document.getElementById("timekeeper").innerHTML = "00 : 00 : 00"
})


