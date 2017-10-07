package com.bayviewglen.trees;

public class ContactBST {
	private ContactNode root;

	public ContactBST() {
		super();
	}

	public ContactBST(ContactNode root) {
		super();
		this.root = root;
	}

	public ContactNode getRoot() {
		return root;
	}

	public void setRoot(ContactNode root) {
		this.root = root;
	}

	public void add(ContactNode current, BSTContact c) {
		ContactNode node = new ContactNode(c);

		if (current.getData().getLname().compareTo(c.getLname()) >= 1 && current.getLeft() == null) {
			current.setLeft(node);

		} else if (current.getData().getLname().compareTo(c.getLname()) >= 1 && current.getLeft() != null) {
			add(current.getLeft(), c);

		} else if (current.getData().getLname().compareTo(c.getLname()) <= 0 && current.getRight() == null) {
			current.setRight(node);

		} else if (current.getData().getLname().compareTo(c.getLname()) <= 0 && current.getRight() != null) {
			add(current.getRight(), c);

		}
	}

	public void add(BSTContact c) {
		if (root != null) {
			add(root, c);
		} else {
			ContactNode node = new ContactNode(c);
			root = node;
		}
	}

	public void traverseInOrder(ContactNode current) {
		if (current.getLeft() != null)
			traverseInOrder(current.getLeft());

		evaluate(current);

		if (current.getRight() != null)
			traverseInOrder(current.getRight());

	}

	public void traversePreFix(ContactNode current) {
		evaluate(current);

		if (current.getLeft() != null)
			traverseInOrder(current.getLeft());

		if (current.getRight() != null)
			traverseInOrder(current.getRight());
	}

	public void traversePostFix(ContactNode current) {
		if (current.getLeft() != null)
			traverseInOrder(current.getLeft());

		if (current.getRight() != null)
			traverseInOrder(current.getRight());

		evaluate(current);
	}

	private void evaluate(ContactNode x) {
		System.out.println(x.getData().getFname() + " " + x.getData().getLname());
	}

	public BSTContact findSmallestNode(ContactNode current) {
		BSTContact data = null;
		if (current.getLeft() == null) {
			return current.getData();
		} else {
			data = findSmallestNode(current.getLeft());
		}

		return data;
	}

	public BSTContact findLargestNode(ContactNode current) {
		BSTContact data = null;
		if (current.getRight() == null) {
			return current.getData();

		} else {
			data = findLargestNode(current.getRight());
		}

		return data;
	}

	public ContactNode search(ContactNode current, String key) {
		ContactNode node = null;

		if (key.compareTo(current.getData().getLname()) <= -1) {
			node = search(current.getLeft(), key);

		} else if (key.compareTo(current.getData().getLname()) >= 1) {
			node = search(current.getRight(), key);

		} else if (key.compareTo(current.getData().getLname()) == 0) {
			node = current;
		}

		return node;
	}

	public boolean remove(ContactNode parent, String key) {
		if (parent == null) {
			return false;
		}

		boolean found = false;

		if (parent.getLeft() != null && key.equals(parent.getLeft().getData().getLname())) {
			found = deleteNode(parent, parent.getLeft(), 0);
			found = true;

		} else if (parent.getRight() != null && key.equals(parent.getLeft().getData().getLname())) {
			found = deleteNode(parent, parent.getRight(), 1);
			found = true;
			
		} else if (key.compareTo(parent.getData().getLname()) <= -1) {
			found = remove(parent.getLeft(), key);

		} else if (key.compareTo(parent.getData().getLname()) >= 1) {
			found = remove(parent.getRight(), key);

		}

		return found;
	}

	// For Direction of Child: 0 = left, 1 = right
	private boolean deleteNode(ContactNode parent, ContactNode child, int direction) {

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
