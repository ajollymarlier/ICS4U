var interval = null;
var startTime = Infinity;

function show(id){
	var content = document.getElementById(id);
	content.style.color = "#000000";
}

function hide(id){
	var content = document.getElementById(id);
	content.style.color = "#FFFFFF";
}

function animation(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');
	startTime = Date.now();

	function draw(){
		var img = new Image();
		img.src = "images/table.png";
		ctx.drawImage(img, 80, 80);

	}

	interval = setInterval(draw, 10)
}

function clearAnimation(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	clearInterval(interval);
}
