package com.bayviewglen.trees;

public class ContactNode {
	private BSTContact data;
	private ContactNode left;
	private ContactNode right;

	public ContactNode() {
		super();
	}

	public ContactNode(BSTContact data) {
		super();
		this.data = data;
		this.left = null;
		this.right = null;
	}

	public ContactNode(BSTContact data, ContactNode left, ContactNode right) {
		super();
		this.data = data;
		this.left = left;
		this.right = right;
	}

	public BSTContact getData() {
		return data;
	}

	public void setData(BSTContact data) {
		this.data = data;
	}

	public ContactNode getLeft() {
		return left;
	}

	public void setLeft(ContactNode left) {
		this.left = left;
	}

	public ContactNode getRight() {
		return right;
	}

	public void setRight(ContactNode right) {
		this.right = right;
	}

}
