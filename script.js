'use strict'


let hrs='';
let mins ='';
let secs = '';
let ad = '';
let mp3='';
let period



 //  Function to play an Audio

 function playy() {
    mp3 =new Audio ("./audio/NBA-YoungBoy-Shotta-Soul-(HiphopKit.com).mp3")
     mp3.play();
     mp3.loop = true;  
}


// Function to make the clock work

 let counts= setInterval(function(){
    let date = new Date();
    let cHours=  date.getHours()
    let cMinutes= date.getMinutes()

    // period= date.toLocaleString ('en-US', { hour: 'numeric', hour12: true })
    period= cHours >= 12 ? "pm":"am";

    //  console.log(period)

// To add 0 digit behind 1 figures
    cMinutes.toString().length==1 ? minutes.innerHTML= '0' + cMinutes : minutes.innerHTML= cMinutes;
     cHours.toString().length==1 ? hourS.innerHTML= '0' + cHours : hourS.innerHTML= cHours;
    secondS.innerHTML = period;

 },1000)


 //Function to set the alarm

 setBtn.addEventListener('click', setAlarm );

  function setAlarm() {
   
    let date = new Date()
    let cHours=  date.getHours()
    let cMinutes= date.getMinutes()
     hrs =Ahour.value
     mins =Aminute.value
     secs =Aseconds.value
     ad= alrmDescr.value

   let timer=  setInterval(() => {
        if (hrs == cHours && mins == cMinutes && secs==period) {
            clearInterval(timer)          
            console.log(secs);
                setTimeout(() => {
                    playy()
                }, 200);
                alarmBell.classList.add('animate')
                displayy()       
            } 
    }, 1000);
  
        show()
    }

// to show the alarm

   function show() {
    display.innerHTML= `<p class="descr"> Alarm set for ${hrs} : ${mins}  ${secs} ${ad}</p>`
   }


// to stop the alarm

stopBtn.addEventListener('click', stopAlarm );

function stopAlarm() {
    mp3.pause()
    alarmBell.classList.remove('animate')
    display.innerHTML='';
}

function displayy() {
    display.innerHTML=`<div class='reminder'>Alarm set for ${hrs} : ${mins} ${secs} ${ad}</div>`

  
}

function rmv(){
    if (Ahour.value.length>2) {
        Ahour.value= Ahour.value.slice(0,2)
        console.log(Ahour.value)
    }

    if (Aminute.value.length>2) {
        Aminute.value= Aminute.value.slice(0,2)
        console.log(Aminute.value)
    }
   
   
}
function chng() {
    Aseconds.value=Aseconds.value.toLowerCase();

}