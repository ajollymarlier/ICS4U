package com.bayviewglen.graphs;

import java.util.LinkedList;

public class ArunGraph {
	
	@SuppressWarnings("rawtypes")
	private LinkedList[] edges;
	private int numVert = 0;
	
	public ArunGraph() {
		this.edges = null;
		this.numVert = 0;
	}
	
	public ArunGraph(int numVert) {
		this.edges = new LinkedList[numVert];
		this.numVert = numVert;
		
		fill();
	}
	
	private void fill() {
		for(int i = 0; i < edges.length; i++) {
			edges[i] = new LinkedList<Integer>();
		}
		
	}

	public void addEdge(int vert, int connectVert) {
		if(vert == connectVert)
			throw new IllegalArgumentException("A vertex can not be connected to itself");
		else if(vert < numVert && connectVert < numVert)
			edges[vert].add(connectVert);
		else
			throw new IndexOutOfBoundsException();
	}
	
	public void displayLinks() {
		for(int i = 0; i < edges.length; i++) {
			System.out.print(i + " : ");
			
			for(int j = 0; j < edges[i].size(); j++) {
				System.out.print(edges[i].get(j) + " ");
				
			}
			
			System.out.println("");
		}
	}
	
}
