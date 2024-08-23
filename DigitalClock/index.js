var hourspan=document.getElementById('hour')
var minutespan=document.getElementById('minute')
var secondspan=document.getElementById('secound')
var amorpmspan=document.getElementById('amorpm')

function changeTime(){
    var date =new Date()
    var hour=date.getHours()
    hourspan.textContent=hour
    var minute=date.getMinutes()
    minutespan.textContent=minute
  var second=  date.getSeconds()
  secondspan.textContent=second
  if(hour===0){
    amorpmspan="AM"
  }
  else if(hour > 0 && hour <12){
    amorpmspan="AM"
  }
  else{
    amorpmspan="PM"
  }
  amorpmspan.textContent=amorpmspan
}
setInterval(changeTime,1000)// 1 secound me 1000 mili secound hote he