var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); //canvas controls
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

var currentPage = 0;
var pageStart = Date.now();

document.addEventListener("click", clickHandler);

function clickHandler(e){
	if(currentPage === 0)
		currentPage++;
	else if (currentPage == 1) {
		console.log(e.clientX + ", " + e.clientY);	
	}
}

function drawAlgorithm(){
	for(var i = 0; i < algoPoints.length; i++){
		ctx.beginPath();
		ctx.fillStyle = algoPoints[i].color;
		ctx.arc(algoPoints[i].x, algoPoints[i].y, 30, 0, 2 * Math.PI);
		ctx.fill();

		ctx.font = "bolder 40px Arial";
		ctx.textAlign = 'center';
		ctx.fillText(algoPoints[i].name, algoPoints[i].x, algoPoints[i].y - 40);
		ctx.closePath();
	}
}

function drawMenu(){
	ctx.beginPath();
	ctx.textAlign = 'center';
	ctx.font = "bolder 100px Courier New";
	ctx.fillStyle = "#FFFFFF";
	ctx.fillText("Floyd-Warshall Algorithm", canvas.width / 2, canvas.height / 2 - 40);

	ctx.font = "bolder 30px Courier New";
	ctx.fillText("Click Anywhere To Start", canvas.width / 2, canvas.height / 2);

	ctx.closePath();	
}

//TODO make dimensions scaled to canvas width
//TODO maybe add animation to menu screen, like typing the name
function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	if(currentPage === 0){
		drawMenu();
	}else if(currentPage === 1){
		drawAlgorithm();
	}
}

setInterval(draw, 10);
