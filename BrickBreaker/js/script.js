var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); //canvas controls

//kendrick hitbox not working

var img = document.getElementById("kendrick");
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var ballRadius = 70;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleSpeed = 7;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;

var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var eh = new Audio("audio/eh.mp3");

var score = 0; 

var bricks = [];
for(var i = 0; i < brickColumnCount; i++){
	bricks[i] = [];

	for(var j = 0; j < brickRowCount; j++){
		bricks[i][j] = { x: 0, y: 0, status: 1};
	}
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
	if(e.keyCode == 39){
		rightPressed = true;

	}else if(e.keyCode == 37){
		leftPressed = true;
	}
}

function keyUpHandler(e){
	if(e.keyCode == 39){
		rightPressed = false;

	}else if(e.keyCode == 37){
		leftPressed = false;
	}
}

/*function drawBall(){
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
	ctx.fillStyle = "red";
	ctx.fill();
	ctx.closePath();
}*/

function drawBall(){
	var img = new Image(); //.getElementById("img");
	img.src = "images/kendrick.png";
	ctx.drawImage(img, x - ballRadius, y - ballRadius, ballRadius, ballRadius);

}

function drawPaddle(){
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle = "black";
	ctx.fill();
	ctx.closePath();
}

function drawBricks(){
	for(var i = 0; i < brickColumnCount; i++){
		for(var j = 0; j < brickRowCount; j++){
			if(bricks[i][j].status === 1){
				var brickX = (i * (brickWidth + brickPadding) + brickOffsetLeft);
				var brickY = (j * (brickHeight + brickPadding) + brickOffsetTop);

				bricks[i][j].x = brickX;
				bricks[i][j].y = brickY;

				ctx.beginPath();
				ctx.rect(brickX, brickY, brickWidth, brickHeight);
				ctx.fillStyle = "#000000";
				ctx.fill();
				ctx.closePath();
			}
		}
	}
}

function collisionDetection(){
	for(var i = 0; i < brickColumnCount; i++){
		for(var j = 0; j < brickRowCount; j++){
			var curr = bricks[i][j];

			if(x > curr.x && x < curr.x + brickWidth && y > curr.y && y < curr.y + brickHeight && curr.status != 0) {
                dy = -dy;
                curr.status = 0;
                eh.play();

                score++;
                if(score === brickRowCount * brickColumnCount){
                	alert("Congrats you're not shit");
                	document.location.reload();
                }

                //For Fun
				dx += dy / 9;
				dy += dy / 9;
            }
		}
	}
}

function drawScore(){
	ctx.font = '16px Arial';
	ctx.fillStyle = "#D600BA";
	ctx.strokeStyle = "#000000";
	ctx.fill();
	ctx.stroke();
	ctx.fillText("Score: " + score, 8, 20);
}

function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	drawPaddle();
	drawBricks();
	collisionDetection();
	drawScore();

	//ball collision code
	if(x + dx > canvas.width - ballRadius || x + dx < ballRadius){
		dx = -dx;
	}

	//ball collision code
	if(y + dy < ballRadius) {
    	dy = -dy;

	} else if(y + dy > canvas.height) {
		if(x > paddleX && x < paddleX + paddleWidth){
			dy = -dy;

			

		}else {
			alert("GAME OVER");
    		document.location.reload();
		}
    	
	}

	//paddleMovement code
	if(rightPressed && paddleX < canvas.width - paddleWidth){
		paddleX += paddleSpeed;
	}

	//paddleMovement code
	else if(leftPressed && paddleX > 0){
		paddleX -= paddleSpeed;
	}

	x += dx;
	y += dy;

}

setInterval(draw, 10);
