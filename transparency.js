function drawTransparency(){	

	var can = document.getElementById('MyCanvasArea');
	var ctx=can.getContext('2d');
	
	ctx.fillStyle="pink";
	ctx.fillRect(10,10,250,200);
	
	ctx.globalAlpha=0.3;
	
	ctx.fillStyle="purple";
	ctx.fillRect(150,100,250,200);

	ctx.globalAlpha=1;	

	ctx.fillStyle="green";
	ctx.fillRect(260,210,250,200);	
	
}
