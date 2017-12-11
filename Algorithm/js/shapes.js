var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Makes Rectangle
ctx.beginPath();
//First two numbers are coordinates and last two are size  
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.strokeStyle = "blue";
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
//Numbers: x coordinate, y coordinate, arc radius, start angle, 
//end angle, direction of drawing (false is clockwise, true is counterclockwise)
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
