package com.bayviewglen.linkedlist;

public class LinkedList {
	private IntNode head;
	private IntNode tail;
	private int numNodes;

	public LinkedList() {
		head = null;
		tail = null;
		numNodes = 0;
	}

	// Inserts the specified element at the beginning of this list.
	public void addFirst(int x) {
		head = new IntNode(x, head);
		if (numNodes == 0)
			tail = head;

		numNodes++;
	}

	// Appends the specified element to the end of this list.
	public boolean add(int x) {
		if (tail != null) {
			tail.setLink(new IntNode(x, null));
			tail = tail.getLink();
		} else {
			tail = new IntNode(x, null);
		}

		if (numNodes == 0)
			head = tail;

		numNodes++;
		return true;
	}

	// Inserts the specified element at the specified position in this list.
	public void add(int index, int x) {
		if (index == 0) {
			addFirst(x);
			return;
		} else if (index == numNodes - 1) {
			add(x);
			return;
		}

		IntNode previous = head;
		for (int i = 0; i < index; i++) {
			previous = previous.getLink();

			if (i == index) {
				previous.setLink(new IntNode(x, previous.getLink()));
				return;
			}
		}

		throw new IndexOutOfBoundsException();
	}

	public void clear() {
		head = null;
		tail = null;
	}

	public int remove() {
		IntNode temp = head;
		head = head.getLink();
		numNodes--;

		return temp.getData();
	}
	
	//TODO this is fucked rn
	public int remove(int index) {
		if (index == 0) {
			return remove();
		} else if (index == numNodes - 1) {
			return removeLast();
		}

		IntNode previous = head;
		for (int i = 1; i <= index; i++) {
			previous = previous.getLink();

			if (i == index) {
				int data = previous.getLink().getData();
				previous.setLink(previous.getLink());
				previous.getLink().setLink(null);
				numNodes--;
				return data;
			}
		}

		if (head != null && tail != null) {
			throw new IndexOutOfBoundsException();
		} else {
			throw new NullPointerException();
		}

	}

	public int removeLast() {
		IntNode previous = head;
		for (int i = 0; i < numNodes; i++) {
			previous = previous.getLink();

			if (i == numNodes - 2) {
				previous.setLink(null);
			}
		}

		return previous.getData();
	}

	// Works
	public boolean removeFirstOccurrence(int x) {
		IntNode previous = head;

		if (previous.getData() == x) {
			head = previous.getLink();
			numNodes--;
			return true;
		}

		for (int i = 0; i < numNodes; i++) {
			previous = previous.getLink();

			if (previous.getLink().getData() == x) {
				previous.setLink(previous.getLink().getLink());
				numNodes--;
				return true;
			}
		}

		return false;
	}

	public boolean removeLastOccurrence(int x) {
		IntNode previous = head;
		IntNode xOccurrence = null;
		IntNode prevXOccurrence = null;
		for (int i = 0; i < numNodes; i++) {
			previous = previous.getLink();

			if (previous.getLink().getData() == x) {
				prevXOccurrence = previous;
				xOccurrence = previous.getLink();
			}
		}

		if (xOccurrence != null) {
			prevXOccurrence.setLink(xOccurrence.getLink());
			numNodes--;
			return true;
		} else
			return false;
	}

	public void set(int index, int x) {
		IntNode previous = head;
		for (int i = 0; i < index; i++) {
			previous = previous.getLink();

			if (index == numNodes) {
				previous.setData(x);
			}
		}
	}

	public int size() {
		return numNodes;
	}

	public int[] toArray() {
		int[] ints = new int[numNodes];
		IntNode prev = head;
		ints[0] = prev.getData();

		for (int i = 1; i < numNodes; i++) {
			ints[i] = prev.getLink().getData();

			prev = prev.getLink();
		}

		return ints;
	}

}
