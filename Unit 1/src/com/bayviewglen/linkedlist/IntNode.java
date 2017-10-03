package com.bayviewglen.linkedlist;

public class IntNode {
	private int data;
	private IntNode link;
	
	public IntNode() {
		super();
		data = 0; 
		link = null;
	}

	public IntNode(int data, IntNode link) {
		super();
		this.data = data;
		this.link = link;
	}

	// Returns data in node.
	public int getData() {
		return data;
	}

	// Sets the data value in node.
	public void setData(int data) {
		this.data = data;
	}

	// Gets the link to the next IntNode.
	public IntNode getLink() {
		return link;
	}

	// Sets the link to the asssigned IntNode.
	public void setLink(IntNode link) {
		this.link = link;
	}
	
	

}
