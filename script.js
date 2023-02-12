const timeLeft = document.getElementById('time-left')
const travelBtn = document.getElementById('time-btn')
let  birthday = new Date("march 17, 2023")
const second = 1000
const minute = second*60
const hour = minute*60
const day = hour *24
let timerId
function countDown(){
const today = new Date()
const timeSpan = birthday - today
if(timeSpan <= -day){
  timeLeft.innerHTML = 'Hope you had a nice Birthday'
  clearInterval(timerId)
}
else if(timeSpan<=0){
timeLeft.innerHTML = '<h1>Happy Birthday!!!</h1>'
clearInterval(timerId)
}

const days = Math.floor((timeSpan/day))
const hours = Math.floor((timeSpan%days)/hour)
const minutes = Math.floor(timeSpan%hour
/minute)
const seconds = Math.floor((timeSpan%minute)/second)
timeLeft.innerHTML = `${days}days ${hours}hours ${minutes}min ${seconds}seconds`

}
 timerId = setInterval(countDown, second)
