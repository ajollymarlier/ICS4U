var description = "The Floyd-Warshall Algorithm is an algorithm designed to discover the shortest paths between all possible pairs of vertices in a graph. Unlike other shortest path algorithms (like Dijkstra and Bellman-Ford), the Floyd-Warshall Algorithm allows for negatively-weighted edges.";
var pseudocode = "let V = number of vertices in graph <br>let dist = V x V array minimum distances <br>for each vertex v <br>	dist[v][v] = 0 <br>for each edge (u,v) <br>	dist[u][v] = weight(u,v) <br>for k from 1 to V <br>	for i from 1 to V <br>		for j from 1 to V <br>			if dist[i][j] > dist[i][k] + dist[k][j] <br>				dist[i][k] = dist[i][k] + dist[k][j] <br>		end if";

var explanations = [];
explanations[1] = "Let's assume that we are given this graph with the following weighted edges";
explanations[2] = "Page 2";

var arcs = [];
arcs[0] = {x: 605, y: 190, radius: 30};
arcs[1] = {x: 345, y: 190, radius: 30};
arcs[2] = {x: 605, y: 190, radius: 30};
arcs[3] = {x: 475, y: 320, radius: 30};

var edges = [];
edges[0] = {x: 605, y: 190, weight: 4};