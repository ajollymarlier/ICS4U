var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); //canvas controls
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

var currentPage = 0;
var pageStart = Date.now();

var collidables = [];

//var vertices = [];
/*for(var i = 0; i < 8; i++){
	vertices[i] = {type: "vertice", label: i + 1};
}*/

var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;
var shootPressed = false;

var bulletVelocity = 15;
var bullets = [];
var fireRate = 100; // in ms
var lastFired = Date.now();

var player = {type: "player", x: canvas.width / 2, y: canvas.height / 2, radius: 15, velocity: 4};

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//TODO up and left || down and right cant be combonations when auto shooting rn
function keyDownHandler(e){
	if(e.keyCode == 39){
		rightPressed = true;

	}else if(e.keyCode == 37){
		leftPressed = true;

	} if(e.keyCode == 38){
		upPressed = true;

	}else if(e.keyCode == 40){
		downPressed = true;

	}

	//Press spacebar
	if(e.keyCode == 32){
		shootPressed = true;
		velocity = 2;
	}
}

function keyUpHandler(e){
	if(e.keyCode == 39){
		rightPressed = false;

	}
	 if(e.keyCode == 37){
		leftPressed = false;

	} 
	if(e.keyCode == 38){
		upPressed = false;

	}
	if(e.keyCode == 40){
		downPressed = false;

	}
	if(e.keyCode == 32){
		shootPressed = false;
		velocity = 4;
	}
}

function drawAlgorithm(){
	for(var i = 0; i < algoPoints.length; i++){
		ctx.beginPath();
		ctx.fillStyle = algoPoints[i].color;
		ctx.arc(algoPoints[i].x, algoPoints[i].y, 20, 0, 2 * Math.PI);
		ctx.fill();
		ctx.closePath();
	}
}

function drawMenu(){
	ctx.beginPath();
	ctx.textAlign = 'center';
	ctx.font = "130px Arial";
	ctx.fillStyle = "#00FFEA";
	ctx.fillText("Floyd-Warshall Algorithm", canvas.width / 2, 150);

	ctx.rect((canvas.width / 2) - (400 / 2), 200, 400, 100);
	ctx.fill();

	ctx.fillStyle = "#000000";
	ctx.font = "40px Arial";
	ctx.fillText("Shoot To Start", canvas.width / 2, 265);

	ctx.closePath();	
}

function drawPlayer(){
	ctx.beginPath();
	ctx.fillStyle = "#FF0000";
	ctx.arc(player.x, player.y, player.radius, 0, 2 * Math.PI);
	ctx.fill();
	ctx.closePath();
}

//splice arguments are for starting index and number of elements removed
function drawBullets(){
	for(var i = 0; i < bullets.length; i++){
		if(bullets[i].y < 0){
			bullets.splice(i, 1);

		}else{
			ctx.beginPath();
			ctx.fillStyle = "#00D705";
			ctx.rect(bullets[i].x, bullets[i].y, 4, 10);
			bullets[i].y -= bulletVelocity;
			ctx.fill();
			ctx.closePath();
		}
	}
}

//TODO if statement only works for squares
//TODO need to make it for arcs too
function checkCollision(){
	for(var i = 0; i < collidables.length; i++){
		for(var j = 0; j < bullets.length; j++){
			if(bullets[j].y > collidables[i].y && bullets[j].y < collidables[i].y + collidables[i].height && bullets[j].x > collidables[i].x && bullets[j].x < collidables[i].x + collidables[i].width){
				
				if(collidables[i].type == "startButton"){
					currentPage++;
					collidables = algoPoints;
				}
				else if(collidables[i].type == "vertice")
					collidables[i].color = "#0047FA";

				console.log('hit');
				bullets.splice(j, 1);
				collidables.splice(i, 1);
			}
		}
	}
}

//TODO make dimensions scaled to canvas width
function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawPlayer();
	drawBullets();
	checkCollision();

	if(currentPage === 0){
		drawMenu();
		collidables[0] = {type: "startButton", x: (canvas.width / 2) - (400 / 2), y: 200, width: 400, height: 100};
	}else if(currentPage === 1){
		drawAlgorithm();
	}

	if(rightPressed && player.x + player.radius < canvas.width){
		player.x += player.velocity;
	}

	else if(leftPressed && player.x - player.radius > 0){
		player.x -= player.velocity;
	} 

	if(downPressed && player.y + player.radius < canvas.height - 20){
		player.y += player.velocity;

	}else if (upPressed && player.y - player.radius > 0) {
		player.y -= player.velocity;
	}

	if(shootPressed && Date.now() - lastFired > fireRate){
		bullets[bullets.length] = {type: "Bullet", x: player.x, y: player.y, dmg: 5};	
		lastFired = Date.now();
	}
}

setInterval(draw, 10);
