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

	public int getData() {
		return data;
	}

	public void setData(int data) {
		this.data = data;
	}

	public IntNode getLink() {
		return link;
	}

	public void setLink(IntNode link) {
		this.link = link;
	}
	
	

}
