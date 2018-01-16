var currPage = 0;

//Used to show data when info box is hovered over
function show(id){
	if(id === "description p"){
		document.getElementById(id).innerHTML = description;
	}

	else if(id === "pseudocode pre"){
		document.getElementById(id).innerHTML = pseudocode;
		document.getElementById(id).style.textAlign = 'left';
	}
}

//Used to show data when info box is left
function hide(id){
	if(id === "description p")
		document.getElementById(id).innerHTML = "Description";

	else if(id === "pseudocode pre")
		document.getElementById(id).innerHTML = "Pseudocode";
		

	document.getElementById(id).style.textAlign = 'center';
}

//Main driver function
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
		drawPageFour(canvas, ctx);
	else if(currPage === 5)
		drawPageFive(canvas, ctx);
	else if(currPage === 6)
		drawPageSix(canvas, ctx);
	else if(currPage === 7)
		drawPageSeven(canvas, ctx);
	else if(currPage === 8)
		drawPageEight(canvas, ctx);
	else if(currPage === 9)
		drawPageNine(canvas, ctx);
	else if(currPage === 10)
		drawPageTen(canvas, ctx);
	else if(currPage === 11)
		drawPageEleven(canvas, ctx);
	else if(currPage === 12)
		drawPageTwelve(canvas, ctx);
	else if (currPage === 13)
		drawPageThirteen(canvas, ctx);
	else if (currPage === 14)
		drawPageFourteen(canvas, ctx);
	else if(currPage === 15)
		drawPageFifteen(canvas, ctx);
}

//Clears animation and sets current page to 0
function clearAnimation(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	currPage = 0;
}

//Is called whenever animation is clicked
//Increments currPage, checks for rollover, calls the animation function, and changes description
function incrementPage(){
	if(currPage === 15)
		clearAnimation();

	currPage++;
	document.getElementById("explanation p").innerHTML = explanations[currPage];

	if(currPage <= 4)
		resetData();

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	animation();
}

//Draws the table of values, for loop index counter and small graph
function drawData(canvas, ctx, result){
	//Draws array	
	for(var i = 0; i < arrayLines.length; i++){
		ctx.beginPath();
		ctx.moveTo(arrayLines[i].startx, arrayLines[i].starty);
		ctx.lineTo(arrayLines[i].endx, arrayLines[i].endy);
		ctx.stroke();
		ctx.closePath();
	}

	//Draws table values
	for(var i = 0; i < values.length; i++){
		ctx.beginPath();
		ctx.font = "60px Courier New";
		ctx.fillStyle = values[i].colour;
		ctx.fillText(values[i].value, values[i].x, values[i].y);
		ctx.fillStyle = "#000000";
		ctx.closePath();
	}

	//Draws for loop index counter
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

	//Draws the if statement
	for(var i = 0; i < conditions.length; i++){
		ctx.beginPath();
		ctx.font = "20px Courier New";
		ctx.fillStyle = forDisplay[i].colour;
		ctx.fillText(conditions[i].value, conditions[i].x, conditions[i].y);
		ctx.fillStyle = "#000000";
		ctx.closePath();
	}

	//Draws the result of if statement in png file
	ctx.beginPath();
	ctx.drawImage(results[result].img, results[result].x, results[result].y, results[result].width, results[result].height);
	ctx.drawImage(smallGraph.img, smallGraph.x, smallGraph.y, smallGraph.width, smallGraph.height);
	ctx.closePath();
}

//Draws original big graph
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

function drawPageFour(canvas, ctx){
	for(var i = 0; i <= 8; i++){
		values[i].colour = "#000000";
	}

	drawData(canvas, ctx, 1);
}

function drawPageFive(canvas, ctx){
	forDisplay[2][2].colour = selectedColour;
	forDisplay[2][1].colour = regColour;

	drawData(canvas, ctx, 1);
}

function drawPageSix(canvas, ctx){
	forDisplay[2][3].colour = selectedColour;
	forDisplay[2][2].colour = regColour;

	drawData(canvas, ctx, 1);
}

//TODO number highlight not working
function drawPageSeven(canvas, ctx){
	forDisplay[1][1].colour = regColour;
	forDisplay[1][2].colour = selectedColour;
	values[6].colour = selectedColour;
	values[6].value = 2;

	drawData(canvas, ctx, 0);
}

function drawPageEight(canvas, ctx){
	forDisplay[0][1].colour = regColour;
	forDisplay[0][2].colour = selectedColour;
	forDisplay[1][2].colour = regColour;
	forDisplay[1][4].colour = selectedColour;
	forDisplay[2][3].colour = regColour;
	forDisplay[2][1].colour = selectedColour;

	values[6].colour = regColour;
	values[14].colour = selectedColour;

	drawData(canvas, ctx, 0);
}

function drawPageNine(canvas, ctx){
	forDisplay[2][1].colour = regColour;
	forDisplay[2][3].colour = selectedColour;

	values[14].colour = regColour;
	values[15].colour = selectedColour;

	drawData(canvas, ctx, 0);
}

function drawPageTen(canvas, ctx){
	forDisplay[0][2].colour = regColour;
	forDisplay[0][3].colour = selectedColour;
	forDisplay[1][4].colour = regColour;
	forDisplay[1][1].colour = selectedColour;
	forDisplay[2][3].colour = regColour;
	forDisplay[2][4].colour = selectedColour;

	values[15].colour = regColour;
	values[10].colour = selectedColour;

	drawData(canvas, ctx, 0);
}

function drawPageEleven(canvas, ctx){
	forDisplay[1][1].colour = regColour;
	forDisplay[1][2].colour = selectedColour;

	values[10].colour = regColour;
	values[11].colour = selectedColour;

	drawData(canvas, ctx, 0);
}

function drawPageTwelve(canvas, ctx){
	forDisplay[0][3].colour = regColour;
	forDisplay[0][4].colour = selectedColour;
	forDisplay[1][2].colour = regColour;
	forDisplay[1][1].colour = selectedColour;
	forDisplay[2][4].colour = regColour;
	forDisplay[2][2].colour = selectedColour;

	values[11].colour = regColour;
	values[9].colour = selectedColour;

	drawData(canvas, ctx, 0);
}

function drawPageThirteen(canvas, ctx){
	forDisplay[1][1].colour = regColour;
	forDisplay[1][3].colour = selectedColour;
	forDisplay[2][2].colour = regColour;
	forDisplay[2][1].colour = selectedColour;

	values[9].colour = regColour;
	values[12].colour = selectedColour;

	drawData(canvas, ctx, 0);
}

function drawPageFourteen(canvas, ctx){
	forDisplay[2][1].colour = regColour;
	forDisplay[2][2].colour = selectedColour;

	values[12].colour = regColour;
	values[13].colour = selectedColour;

	drawData(canvas, ctx, 0);
}

function drawPageFifteen(canvas, ctx){
	forDisplay[0][4].colour = regColour;
	forDisplay[1][3].colour = regColour;
	forDisplay[2][2].colour = regColour;

	values[13].colour = regColour;

	drawData(canvas, ctx, 0);
}
