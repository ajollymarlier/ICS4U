var interval = null;
var currPage = 0;

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
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');

	function draw(){
		if(currPage === 1){
			drawPageOne(canvas, ctx);
		}

	}

	interval = setInterval(draw, 10);
}

function clearAnimation(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	clearInterval(interval);

	currPage = 0;
	document.getElementById("explanation p").innerHTML = "Click Box to Progress Animation";
}

function incrementPage(){
	currPage++;
	document.getElementById("explanation p").innerHTML = explanations[currPage];

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');

	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawPageOne(canvas, ctx){
	for(var i = 0; i < 4; i++){
		ctx.beginPath();
		ctx.strokeStyle = '#674800';
		ctx.arc(arcs[i].x, arcs[i].y, arcs[i].radius, 0, 2 * Math.PI);
		ctx.stroke();

		ctx.font = "50px Courier New";
		ctx.fillText(i + 1, arcs[i].x - 13, arcs[i].y + 16);
		ctx.closePath();
	}	

}
