const display=document.querySelector("#value")
const start=document.querySelector(".start")
const stop=document.querySelector(".stop")
const reset=document.querySelector(".reset")

let seconds=0
let interval= null

start.addEventListener("click", star)
stop.addEventListener("click",clear)
reset.addEventListener("click", res)


function timer(){
    seconds++

    let hrs= Math.floor(seconds/3600)
    let min= Math.floor((seconds-(hrs*3600))/60)
    let secs=seconds%60

    if(hrs<10){ hrs ="0"+ hrs}
    if(min<10){min= "0"+ min}
    if(secs<10){ secs="0"+ secs}


    display.innerText=`${hrs}:${min}:${secs}`

}

function star (){
interval=    setInterval(timer,1000)
start.disabled= true
}
function clear(){
clearInterval(interval)
interval=null
start.disabled=false
}
function res(){
    clearInterval(interval)
    seconds=0
    interval =null
    display.innerText = '00:00:00';
    start.disabled=false

}