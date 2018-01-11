var description = "The Floyd-Warshall Algorithm is an algorithm designed to discover the shortest paths between all possible pairs of vertices in a graph. Unlike other shortest path algorithms (like Dijkstra and Bellman-Ford), the Floyd-Warshall Algorithm allows for negatively-weighted edges.";
var pseudocode = "let V = number of vertices in graph <br>let dist = V x V array minimum distances <br>for each vertex v <br>	dist[v][v] = 0 <br>for each edge (u,v) <br>	dist[u][v] = weight(u,v) <br>for k from 1 to V <br>	for i from 1 to V <br>		for j from 1 to V <br>			if dist[i][j] > dist[i][k] + dist[k][j] <br>				dist[i][k] = dist[i][k] + dist[k][j] <br>		end if";

var explanations = [];
explanations[1] = "Let's assume that we are given this graph with the following weighted edges and directions";
explanations[2] = "First we must create a V x V array and set all links to itself as zero";

var arcs = [];
var edges = [];
var arrayLines = [];
var values = [];

resetData();


function resetData(){
	arcs[0] = {x: 695, y: 60, radius: 30};
	arcs[1] = {x: 565, y: 190, radius: 30};
	arcs[2] = {x: 825, y: 190, radius: 30};
	arcs[3] = {x: 695, y: 320, radius: 30};

	edges[0] = {startx: 565 + arcs[0].radius, starty: 190, endx: 825 - arcs[0].radius, endy: 190, weight: "(3)->", weightx: 565 + 105, weighty: 180};
	edges[1] = {startx: 565 + arcs[0].radius, starty: 190, endx: 695, endy: 60 + arcs[0].radius, weight: "(4)->", weightx: 565 + 30, weighty: 130};
	edges[2] = {startx: 695, starty: 60 + arcs[0].radius, endx: 825 - arcs[0].radius, endy: 190, weight: "(-2)->", weightx: 695 + 40, weighty: 130};
	edges[3] = {startx: 565 + arcs[0].radius, starty: 190, endx: 695, endy: 320 - arcs[0].radius, weight: "<-(-1)", weightx: 565 + 10, weighty: 255};
	edges[4] = {startx: 825 - arcs[0].radius, starty: 190, endx: 695, endy: 320 - arcs[0].radius, weight: "<-(2)", weightx: 695 + 50, weighty: 255};

	arrayLines[0] = {startx: 50, starty: 50	, endx: 50, endy: 350};
	arrayLines[1] = {startx: 150, starty: 50, endx: 150, endy: 350};
	arrayLines[2] = {startx: 250, starty: 50, endx: 250, endy: 350};
	arrayLines[3] = {startx: 350, starty: 50, endx: 350, endy: 350};
	arrayLines[4] = {startx: 450, starty: 50, endx: 450, endy: 350};

	arrayLines[5] = {startx: 50, starty: 50, endx: 450, endy: 50};
	arrayLines[6] = {startx: 50, starty: 125, endx: 450, endy: 125};
	arrayLines[7] = {startx: 50, starty: 200, endx: 450, endy: 200};
	arrayLines[8] = {startx: 50, starty: 275, endx: 450, endy: 275};
	arrayLines[9] = {startx: 50, starty: 350, endx: 450, endy: 350};

	values[0] = {value: "0", x: 200, y: 400, colour: "#0AD500"};


}
