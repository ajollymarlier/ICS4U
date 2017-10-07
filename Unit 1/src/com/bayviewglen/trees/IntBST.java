package com.bayviewglen.trees;

public class IntBST {
	private IntTreeNode root;

	public IntBST() {
		super();
	}

	public IntBST(IntTreeNode root) {
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
		if (current.getLeft() == null) {
			return current.getData();
		} else {
			data = findSmallestNode(current.getLeft());
		}

		return data;
	}

	public Integer findLargestNode(IntTreeNode current) {
		int data = 0;
		if (current.getRight() == null) {
			return current.getData();

		} else {
			data = findLargestNode(current.getRight());
		}

		return data;
	}

	public IntTreeNode search(IntTreeNode current, int key) {
		IntTreeNode node = null;

		if (key < current.getData()) {
			node = search(current.getLeft(), key);

		} else if (key > current.getData()) {
			node = search(current.getRight(), key);

		} else if (key == current.getData()) {
			node = current;
		}

		return node;
	}

	public boolean remove(IntTreeNode parent, int key) {
		if (parent == null) {
			return false;
		}

		boolean found = false;

		if (parent.getLeft() != null && key == parent.getLeft().getData()) {
			found = deleteNode(parent, parent.getLeft(), 0);
			found = true;

		} else if (parent.getRight() != null && key == parent.getRight().getData()) {
			found = deleteNode(parent, parent.getRight(), 1);
			found = true;
			
		} else if (key < parent.getData()) {
			found = remove(parent.getLeft(), key);

		} else if (key > parent.getData()) {
			found = remove(parent.getRight(), key);

		}

		return found;
	}

	// For Direction of Child: 0 = left, 1 = right
	private boolean deleteNode(IntTreeNode parent, IntTreeNode child, int direction) {

		//Works
		// checks if child has no links then sets parent's left link to null
		if (child.getLeft() == null && child.getRight() == null && direction == 0) {
			parent.setLeft(null);

			// checks if child has no links then sets parent's right link to null
		} else if (child.getLeft() == null && child.getRight() == null && direction == 1) {
			parent.setRight(null);

			// Works for both directions, but copies data of right tree to child then sets
			// right tree link to null
		} else if (child.getRight() != null) {
			child.setData(child.getRight().getData());
			child.setRight(null);

			// sets parent left link to child left link
		} else if (child.getLeft() != null && direction == 0) {
			parent.setLeft(child.getLeft());

			// sets parent right link to child left link
		} else if (child.getLeft() != null && direction == 1) {
			parent.setRight(child.getLeft());

		}

		return true;

	}
}
