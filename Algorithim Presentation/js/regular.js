var interval = null;
var startTime = Infinity;

function show(id){
	if(id === "description p"){
		document.getElementById(id).innerHTML = description;
	}

	else if(id === "pseudocode pre"){
		document.getElementById(id).innerHTML = pseudocode;
		document.getElementById(id).style.textAlign = 'left';
	}
}

function hide(id){

	if(id === "description p")
		document.getElementById(id).innerHTML = "Description";

	else if(id === "pseudocode pre")
		document.getElementById(id).innerHTML = "Pseudocode";
		

	document.getElementById(id).style.textAlign = 'center';
}

function animation(){
	var $div = $('#howItWorks');
	$div.blur();

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');
	startTime = Date.now();

	function draw(){
		var img = new Image();
		img.src = "images/table.png";
		ctx.moveTo(canvas.width - 40, 20);
		ctx.lineTo(canvas.width - 40, canvas.height - 20);
		ctx.stroke();
		//ctx.drawImage(img, 80, 80);

	}

	interval = setInterval(draw, 10);
}

function clearAnimation(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	clearInterval(interval);
}
