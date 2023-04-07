const display=document.querySelector("#value")
const start=document.querySelector(".start")
const stop=document.querySelector(".stop")
const reset=document.querySelector(".reset")
const text=document.querySelector(".num")
const done=document.querySelector(".done")




let used =0
let time =0
let interval = null

start.addEventListener("click", sta)
stop.addEventListener("click", clear)
reset.addEventListener("click", res)
done.addEventListener("click", don)

//1stt problem, the start button , once typed  2x or more the timer speeds up and the clear and reset button starts acting up...SOLVED
//2nd problem , once we type start without texting a text the code cycles once giving a negative value .... SOLVED
//3rd problem , we can start the timer without tapping on done , giving a negative value.....SOLVED
// 4th problem , we can still tap on done with the text still inputed  making the code go into a neative value ......SOLVED
// 5th problem , user may input something other than a number resulting in the "NaN" ERROR.......SOLVED





function count(){
    used ++;
    let remaining = time - used ; 
    let hrs = Math.floor(remaining / 3600) %24;
    let min = Math.floor((remaining % 3600) / 60); 
    let secs = remaining % 60; 
    


    if(hrs<10){ hrs ="0"+ hrs}
    if(min<10){min= "0"+ min}
    if(secs<10 ){ secs="0"+ secs }
   if (remaining<=0){
       clearInterval(interval)
   }
    
 

    display.innerText=`${hrs}:${min}:${secs}`

}
 


function don(){
    const inner=text.value 
 if(inner==""){alert("input text");
start.disabled =true}else{time=inner;
start.disabled=false}

if(inner==""){done.disabled=false}else{done.disabled=true}

if (isNaN(inner)){alert("ERROR number not detected");
 text.value="";
 done.disabled=false;
 start.disabled=true}
}

function sta(){
   interval= setInterval(count, 1000)
    text.value=""
    start.disabled=true
    done.disabled=true
   
}


function clear(){
    clearInterval(interval)
    interval=null
    start.disabled=false
    }


    function res(){
        clearInterval(interval)
       text.value=""
        done.disabled=false
        start.disabled=true
        time=0
        used=0
        interval =null
        display.innerText = '00:00:00';
    
    }
 