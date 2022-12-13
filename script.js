

const timeDisplayEL = document.querySelector("#time-dispaly")
const startBtnEL = document.querySelector("#starts-btn")
const pauseBtnEL = document.querySelector("#Pause-btn")
const resetBtnEL = document.querySelector("#Reset-btn")


let startTime = 0;
let elapsedTime = 0;
let currenttime = 0;
let paused  = true;
let intervalid;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtnEL.addEventListener("click", () =>{
    if (paused){
        paused = false
        startTime = Date.now() - elapsedTime
        intervalid = setInterval(updateTim, 75)
    }

});
pauseBtnEL.addEventListener("click", () =>{
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalid)
    }
});
resetBtnEL.addEventListener("click", () =>{
    paused = true;
    clearInterval(intervalid)
    
    startTime = 0;
    elapsedTime = 0;
    currenttime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplayEL.textContent = "00:00:00"


});


function updateTim(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    secs  = pad(secs);
    mins  = pad(mins);
    hrs  = pad(hrs);

    timeDisplayEL.textContent = `${hrs}:${mins}:${secs}`

    function pad(unit){
        return(("0") + unit) > 2 ? unit : "0" + unit
    }
}
