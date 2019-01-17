var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
 	var point=0;
		var pxb=0;
		var pyb=0;

	var px=Math.round(Math.random()*40);
	var py=Math.round(Math.random()*30);
 
	var sx=1;
	var sy =1;

	var sxb=0;
	var syb=1;


	var mouse={
	x:undefined,
	y:undefined

}
window.addEventListener("mousemove",function(event){
	mouse.x=event.x;
	mouse.y=event.y;
	console.log(mouse);
})

	function bat_drow(){
	if(mouse.x>450){
		mouse.x=450;
	}
	if(mouse.y>250){
		mouse.y=250;
	}	
		ctx.fillRect((pxb)*10,(mouse.y),10,150);
		ctx.fillRect((pxb+59)*10,(mouse.y),10,150);
		////////////////////////////////////////
		ctx.fillRect((mouse.x),(pyb),150,10);
		ctx.fillRect((mouse.x),(pyb+39)*10,150,10);
	}

	


 function animate(){
 	ctx.clearRect(0,0,600,400);
	ctx.fillRect(px*10,py*10,10,10);
	bat_drow();

	px=px+sx;
	py=py+sy;

	if(px*10+20==600 || px*10-10==0){
		if(py*10>mouse.y && py*10<mouse.y+150){
			sx=-sx;
			point++;
			document.getElementById("h").value=point;
		}
	}
	if(py*10+20==400 || py*10-10==0){
		if(px*10>mouse.x && px*10<mouse.x+150){
			point++;
			document.getElementById("h").value=point;
			sy=-sy;
		}
	}

	
 }
animate();
setInterval(animate,100);
