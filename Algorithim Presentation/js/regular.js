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

	if(currPage === 1)
		drawPageOne(canvas, ctx);
	else if(currPage === 2)
		drawPageTwo(canvas, ctx);
	else if(currPage === 3)
		drawPageThree(canvas, ctx);
	else if(currPage === 4)
		drawPageFour(canvas, ctx, 1);
	else if(currPage === 5)
		drawPageFive(canvas, ctx);
	else if(currPage === 6)
		drawPageSix(canvas, ctx);
	else if(currPage === 7)
		drawPageSeven(canvas, ctx);
}

function clearAnimation(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	clearInterval(interval);

	currPage = 0;
	document.getElementById("explanation p").innerHTML = "Click Box to Progress Animation <br>Animation Will Reset If Mouse Leaves Area";
}

function incrementPage(){
	currPage++;
	document.getElementById("explanation p").innerHTML = explanations[currPage];

	if(currPage <= 4)
		resetData();

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	animation();
}

function drawPageOne(canvas, ctx){
	for(var i = 0; i < arcs.length; i++){
		ctx.beginPath();
		ctx.strokeStyle = '#674800';
		ctx.arc(arcs[i].x, arcs[i].y, arcs[i].radius, 0, 2 * Math.PI);
		ctx.stroke();

		ctx.font = "50px Courier New";
		ctx.fillText(i + 1, arcs[i].x - 13, arcs[i].y + 16);
		ctx.closePath();
	}	

	for(var i = 0; i < edges.length; i++){
		ctx.beginPath();
		ctx.moveTo(edges[i].startx, edges[i].starty);
		ctx.lineTo(edges[i].endx, edges[i].endy);
		ctx.stroke();

		ctx.font = "20px Courier New";
		ctx.fillText(edges[i].weight, edges[i].weightx, edges[i].weighty);
		ctx.closePath();
	}

}

function drawPageTwo(canvas, ctx){
	drawPageOne(canvas, ctx);

	for(var i = 0; i < arrayLines.length; i++){
		ctx.beginPath();
		ctx.moveTo(arrayLines[i].startx, arrayLines[i].starty);
		ctx.lineTo(arrayLines[i].endx, arrayLines	[i].endy);
		ctx.stroke();
		ctx.closePath();
	}

	for(var i = 0; i < values.length; i++){
		ctx.beginPath();
		ctx.font = "60px Courier New";
		ctx.fillStyle = values[i].colour;
		ctx.fillText(values[i].value, values[i].x, values[i].y);
		ctx.fillStyle = "#000000";
		ctx.closePath();
	}
}

function drawPageThree(canvas, ctx){
	for(var i = 0; i <= 8; i++){
		if(i <= 3)
			values[i].colour = "#000000";
		else
			values[i].colour = "#0AD500";
	}

	drawPageTwo(canvas, ctx);
}

function drawPageFour(canvas, ctx, result){
	for(var i = 0; i <= 8; i++){
		values[i].colour = "#000000";
	}

	//Same array code from page 2	
	for(var i = 0; i < arrayLines.length; i++){
		ctx.beginPath();
		ctx.moveTo(arrayLines[i].startx, arrayLines[i].starty);
		ctx.lineTo(arrayLines[i].endx, arrayLines[i].endy);
		ctx.stroke();
		ctx.closePath();
	}

	for(var i = 0; i < values.length; i++){
		ctx.beginPath();
		ctx.font = "60px Courier New";
		ctx.fillStyle = values[i].colour;
		ctx.fillText(values[i].value, values[i].x, values[i].y);
		ctx.fillStyle = "#000000";
		ctx.closePath();
	}

	for(var i = 0; i < forDisplay.length; i++){
		for(var j = 0 ; j < forDisplay[i].length; j++){
			ctx.beginPath();
			ctx.font = "20px Courier New";
			ctx.fillStyle = forDisplay[i][j].colour;
			ctx.fillText(forDisplay[i][j].value, forDisplay[i][j].x, forDisplay[i][j].y);
			ctx.fillStyle = "#000000";
			ctx.closePath();
		}
	}

	for(var i = 0; i < conditions.length; i++){
		ctx.beginPath();
		ctx.font = "20px Courier New";
		ctx.fillStyle = forDisplay[i].colour;
		ctx.fillText(conditions[i].value, conditions[i].x, conditions[i].y);
		ctx.fillStyle = "#000000";
		ctx.closePath();
	}

	//Draws the red x
	ctx.beginPath();
	ctx.drawImage(results[result].img, results[result].x, results[result].y, results[result].width, results[result].height);
	ctx.closePath();
}

function drawPageFive(canvas, ctx){
	forDisplay[2][2].colour = selectedColour;
	forDisplay[2][1].colour = regColour;

	drawPageFour(canvas, ctx, 1);
}

function drawPageSix(canvas, ctx){
	forDisplay[2][3].colour = selectedColour;
	forDisplay[2][2].colour = regColour;

	drawPageFour(canvas, ctx, 1);
}

//TODO number highlight not working
function drawPageSeven(canvas, ctx){
	forDisplay[1][0].colour = regColour;
	forDisplay[1][1].colour = selectedColour;

	drawPageFour(canvas, ctx, 0);
}
