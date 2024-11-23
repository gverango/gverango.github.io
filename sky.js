var timesRun = 0;
var stopinterv = setInterval(function twinkling(){
timesRun += 1;
if(timesRun === 50){
clearInterval(stopinterv);
}
for(let i = 0; i < 5; i++){
var starCounts =document.createElement('i');
starCounts.className = 'fa-solid fa-asterisk';
var wh = Math.floor(Math.random(1,10)*15);
var $x = Math.floor(Math.random(0,4)*100);
var $y = Math.floor(Math.random(0,4)*100);

starCounts.style.position = 'relative';
starCounts.style.fontSize = wh + 'px';
starCounts.style.left = $x + 'vw';
starCounts.style.top = $y + 'vh';
starCounts.style.color = 'white';
document.querySelector('.night-sky').appendChild(starCounts);
}
}, 100)
