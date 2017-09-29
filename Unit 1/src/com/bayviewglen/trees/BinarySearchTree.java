package com.bayviewglen.trees;

public class BinarySearchTree {
	private IntTreeNode root;

	public BinarySearchTree() {
		super();
	}

	public BinarySearchTree(IntTreeNode root) {
		super();
		this.root = root;
	}

	public IntTreeNode getRoot() {
		return root;
	}

	public void setRoot(IntTreeNode root) {
		this.root = root;
	}
	
	public void add(IntTreeNode current, int x) {
		IntTreeNode node = new IntTreeNode(x);
		
		if(root == null) {
			root = node;
		}else if(current.getData() > x) {
			add(current.getLeft(), x);
		}else if(current.getData() <= x) {
			add(current.getRight(), x);
		}
	}
	
	public void add(int x) {
		if(root == null) {
			IntTreeNode node = new IntTreeNode(x);
			root = node;
		}else {
			add(root, x);
		}
	}

	public void traverseInOrder(IntTreeNode current) {
		if(current.getLeft() != null)
			traverseInOrder(current.getLeft());
		
		evaluate(current);
		
		if(current.getRight() != null)
			traverseInOrder(current.getRight());
		
	}

	public void traversePreFix(IntTreeNode current) {
		evaluate(current);
		
		if(current.getLeft() != null)
			traverseInOrder(current.getLeft());
		
		if(current.getRight() != null)
			traverseInOrder(current.getRight());
	}

	public void traversePostFix(IntTreeNode current) {
		if(current.getLeft() != null)
			traverseInOrder(current.getLeft());
		
		if(current.getRight() != null)
			traverseInOrder(current.getRight());
		
		evaluate(current);
	}
	
	private void evaluate(IntTreeNode x) {
		System.out.println(x.getData());
	}
}
