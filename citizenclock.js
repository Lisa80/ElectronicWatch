var canvas=document.getElementById("canvas"),
    context=canvas.getContext('2d'),
    MARGIN=40,
    RADIUS=canvas.width/2-MARGIN,
    FONT_HEIGHT=20,
    NUMERAL_SPACING=30,
    RECT=RADIUS-20;



function drawCircle() {
	context.beginPath();
	context.arc(canvas.width/2,canvas.height/2,
				RADIUS,0,Math.PI*2,true);
	context.stroke();

    context.fillStyle="grey";
	context.fillRect(RECT-50,RECT,RECT*2-50,RECT-50);
	
	context.font="2em Times";
	context.strokeText("Citizen",175,80,50);
}

function drawTime(hour,minute,second) {
	var strHour = checkTime(hour),
		strMin  = checkTime(minute),
		strSec  = checkTime(second);

	context.fillStyle="white";
	context.font="4em Times";
	context.fillText(strHour+":"+""+strMin+":"+""+strSec, 105,205,200);

}

function setTime() {
    context.clearRect(0,0,canvas.width,canvas.height);

    drawCircle();
    
	var date=new Date,
	hour=date.getHours(),
	minute=date.getMinutes(),
	second=date.getSeconds();

	hour = hour > 12 ? hour - 12 : hour;

	drawTime(hour,minute,second);

}

function checkTime(i) {
   if(i<10) {
   	i="0"+i;
   }
   return i;
}

checkTime();
loop=setInterval(setTime,1000);
