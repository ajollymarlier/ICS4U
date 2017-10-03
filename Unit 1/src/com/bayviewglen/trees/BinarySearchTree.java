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

		if (current.getData() > x && current.getLeft() == null) {
			current.setLeft(node);

		} else if (current.getData() > x && current.getLeft() != null) {
			add(current.getLeft(), x);

		} else if (current.getData() <= x && current.getRight() == null) {
			current.setRight(node);

		} else if (current.getData() <= x && current.getRight() != null) {
			add(current.getRight(), x);

		}
	}

	public void add(int x) {
		if (root != null) {
			add(root, x);
		} else {
			IntTreeNode node = new IntTreeNode(x);
			root = node;
		}
	}

	public void traverseInOrder(IntTreeNode current) {
		if (current.getLeft() != null)
			traverseInOrder(current.getLeft());

		evaluate(current);

		if (current.getRight() != null)
			traverseInOrder(current.getRight());

	}

	public void traversePreFix(IntTreeNode current) {
		evaluate(current);

		if (current.getLeft() != null)
			traverseInOrder(current.getLeft());

		if (current.getRight() != null)
			traverseInOrder(current.getRight());
	}

	public void traversePostFix(IntTreeNode current) {
		if (current.getLeft() != null)
			traverseInOrder(current.getLeft());

		if (current.getRight() != null)
			traverseInOrder(current.getRight());

		evaluate(current);
	}

	private void evaluate(IntTreeNode x) {
		System.out.println(x.getData());
	}
	
	public Integer findSmallestNode(IntTreeNode current) {
		int data = 0;
		if(current.getLeft() == null) {
			return current.getData();
		}else {
			data = findSmallestNode(current.getLeft());
		}
		
		return data;
	}
	
	public Integer findLargestNode(IntTreeNode current) {
		int data = 0;
		if(current.getRight() == null) {
			return current.getData();
		}else {
			data = findLargestNode(current.getRight());
		}
		
		return data;
	}
	
	//TODO not working
	public IntTreeNode search(IntTreeNode current, int i) {
		IntTreeNode node = null;
		
		if(i < current.getData()) {
			search(current.getLeft(), i);
			
		}else if(i > current.getData()) {
			search(current.getRight(), i);
			
		}else if(i == current.getData()) {
			node = current;
		}
		
		return node;
	}
}
