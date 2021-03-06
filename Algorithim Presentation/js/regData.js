//This is a data file storing all relevant data pertaining to all components of the website
//All values are stored here for ease of manipulation

//The content for the two information boxes
var description = "The Floyd-Warshall Algorithm is an algorithm designed to discover the shortest paths between all possible pairs of vertices in a graph. Unlike other shortest path algorithms (like Dijkstra and Bellman-Ford), the Floyd-Warshall Algorithm allows for negatively-weighted edges.";
var pseudocode = "let V = number of vertices in graph <br>let dist = V x V array minimum distances <br>for each vertex v <br>	dist[v][v] = 0 <br>for each edge (u,v) <br>	dist[u][v] = weight(u,v) <br>for k from 1 to V <br>	for i from 1 to V <br>		for j from 1 to V <br>			if dist[i][j] > dist[i][k] + dist[k][j] <br>				dist[i][k] = dist[i][k] + dist[k][j] <br>		end if";

//An array of explanations displayed underneath the canvas
var explanations = [];
explanations[1] = "Let's assume that we are given this graph with the following weighted edges and directions";
explanations[2] = "First we must create a V x V array and set all links to itself as zero";
explanations[3] = "We then loop through the edges filling the corresponding array elements with the weight";
explanations[4] = "We now iterate through the array using our 3 nested for loops, and check if our condition is true";
explanations[5] = "We now iterate through the array using our 3 nested for loops, and check if our condition is true";
explanations[6] = "We now iterate through the array using our 3 nested for loops, and check if our condition is true";
explanations[7] = "Now let's skip to an iteration where the if statement is true. We will replace what ever is present in the table with the new value"
explanations[8] = "We continue iterating through the array until the table is fully complete";
explanations[9] = "We continue iterating through the array until the table is fully complete";
explanations[10] = "We continue iterating through the array until the table is fully complete";
explanations[11] = "We continue iterating through the array until the table is fully complete";
explanations[12] = "We continue iterating through the array until the table is fully complete";
explanations[13] = "We continue iterating through the array until the table is fully complete";
explanations[14] = "We continue iterating through the array until the table is fully complete";
explanations[15] = "We are now left with a fully filled table of path values";

//Arrays for canvas component objects
var arcs = [];
var edges = [];
var arrayLines = [];
var values = [];
var forDisplay = [];
var conditions = [];

//Colours for when an object is highlighted or not
var selectedColour = "#0AD500";
var regColour = "#000000";

//an array of 2 images holding the values for if the if statement is met
var results = [];

results[0] = {img: new Image(), x: 480, y: 165, width: 18, height: 18};
results[0].img.src = "images/yes.png";

results[1] = {img: new Image(), x: 480, y: 165, width: 20, height: 20};
results[1].img.src = "images/no.png";

//An image of the previously made bigger graph for easy movement
var smallGraph = {img: new Image(), x: 595, y: 190, width: 200, height: 200};
smallGraph.img.src = "images/Graph.png";

//This is stored in a method for when the animation ticks over to the start again.
//It resets all data to it's original form.
resetData();

function resetData(){
	//Graph point values
	arcs[0] = {x: 695, y: 60, radius: 30};
	arcs[1] = {x: 565, y: 190, radius: 30};
	arcs[2] = {x: 825, y: 190, radius: 30};
	arcs[3] = {x: 695, y: 320, radius: 30};

	//Graph edge values
	edges[0] = {startx: 565 + arcs[0].radius, starty: 190, endx: 825 - arcs[0].radius, endy: 190, weight: "(3)->", weightx: 565 + 105, weighty: 180};
	edges[1] = {startx: 565 + arcs[0].radius, starty: 190, endx: 695, endy: 60 + arcs[0].radius, weight: "(4)->", weightx: 565 + 30, weighty: 130};
	edges[2] = {startx: 695, starty: 60 + arcs[0].radius, endx: 825 - arcs[0].radius, endy: 190, weight: "(-2)->", weightx: 695 + 40, weighty: 130};
	edges[3] = {startx: 565 + arcs[0].radius, starty: 190, endx: 695, endy: 320 - arcs[0].radius, weight: "<-(-1)", weightx: 565 + 10, weighty: 255};
	edges[4] = {startx: 825 - arcs[0].radius, starty: 190, endx: 695, endy: 320 - arcs[0].radius, weight: "<-(2)", weightx: 695 + 50, weighty: 255};

	//Vertical array line values
	arrayLines[0] = {startx: 50, starty: 50	, endx: 50, endy: 350};
	arrayLines[1] = {startx: 150, starty: 50, endx: 150, endy: 350};
	arrayLines[2] = {startx: 250, starty: 50, endx: 250, endy: 350};
	arrayLines[3] = {startx: 350, starty: 50, endx: 350, endy: 350};
	arrayLines[4] = {startx: 450, starty: 50, endx: 450, endy: 350};

	//Horizontal array line values
	arrayLines[5] = {startx: 50, starty: 50, endx: 450, endy: 50};
	arrayLines[6] = {startx: 50, starty: 125, endx: 450, endy: 125};
	arrayLines[7] = {startx: 50, starty: 200, endx: 450, endy: 200};
	arrayLines[8] = {startx: 50, starty: 275, endx: 450, endy: 275};
	arrayLines[9] = {startx: 50, starty: 350, endx: 450, endy: 350};

	//Edge weight table values before filling in graph paths
	values[0] = {value: "0", x: 81, y: 106, colour: selectedColour};
	values[1] = {value: "0", x: 182, y: 181, colour: selectedColour};
	values[2] = {value: "0", x: 283, y: 256, colour: selectedColour};
	values[3] = {value: "0", x: 384, y: 331, colour: selectedColour};

	//Edge weight table values after initial filling in of graph paths
	values[4] = {value: "-2", x: 264, y: 106, colour: "#FFF9EB"};
	values[5] = {value: "4", x: 81, y: 181, colour: "#FFF9EB"};
	values[6] = {value: "3", x: 283, y: 181, colour: "#FFF9EB"};
	values[7] = {value: "2", x: 384, y: 256, colour: "#FFF9EB"};
	values[8] = {value: "-1", x: 165, y: 331, colour: "#FFF9EB"};

	//Hidden weight table values used for when if statement is met
	values[9] = {value: "-1", x: 165, y: 106, colour: "#FFF9EB"};
	values[10] = {value: "0", x: 384, y: 106, colour: "#FFF9EB"};
	values[11] = {value: "4", x: 384, y: 181, colour: "#FFF9EB"};
	values[12] = {value: "5", x: 81, y: 256, colour: "#FFF9EB"};
	values[13] = {value: "1", x: 182, y: 256, colour: "#FFF9EB"};
	values[14] = {value: "3", x: 81, y: 331, colour: "#FFF9EB"};
	values[15] = {value: "1", x: 283, y: 331, colour: "#FFF9EB"};

	//For loop index display
	forDisplay[0] = [{value: "k =", x: 600, y: 80, colour: regColour},
					 {value: "0", x: 650, y: 80, colour: selectedColour},
					 {value: "1", x: 675, y: 80, colour: regColour},
					 {value: "2", x: 700, y: 80, colour: regColour},
					 {value: "3", x: 725, y: 80, colour: regColour}];

	forDisplay[1] = [{value: "i =", x: 600, y: 110, colour: regColour},
					 {value: "0", x: 650, y: 110, colour: selectedColour},
					 {value: "1", x: 675, y: 110, colour: regColour},
					 {value: "2", x: 700, y: 110, colour: regColour},
					 {value: "3", x: 725, y: 110, colour: regColour}];	

	forDisplay[2] = [{value: "j =", x: 600, y: 140, colour: regColour},
					 {value: "0", x: 650, y: 140, colour: selectedColour},
					 {value: "1", x: 675, y: 140, colour: regColour},
					 {value: "2", x: 700, y: 140, colour: regColour},
					 {value: "3", x: 725, y: 140, colour: regColour}];
	
	//If statement value
	conditions[0] = {value: "arr[i][j] > arr[i][k] + arr[k][j]", x: 500, y: 180, colour: regColour};
}
