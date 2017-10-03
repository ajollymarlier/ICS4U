package com.bayviewglen.linkedlist;

public class LinkedList {
	private IntNode head;
	private IntNode tail;
	private int numNodes;

	public LinkedList() {
		super();
		head = null;
		tail = null;
		numNodes = 0;
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
		for (int i = 1; i <= index; i++) {
			if (i == index) {
				previous.setLink(new IntNode(x, previous.getLink()));
				numNodes++;
				return;
			}

			previous = previous.getLink();
		}

		throw new IndexOutOfBoundsException();
	}

	// Inserts the specified element at the beginning of this list.
	public void addFirst(int x) {
		head = new IntNode(x, head);
		if (numNodes == 0)
			tail = head;

		numNodes++;
	}

	// Removes all of the elements from this list.
	public void clear() {
		head = null;
		tail = null;
	}

	// Returns true if this list contains the specified element.
	public boolean contains(int x) {
		IntNode previous = head;
		for (int i = 1; i < numNodes; i++) {
			if (previous.getLink().getData() == x) {
				return true;
			}

			previous = previous.getLink();
		}

		return false;
	}

	// Returns the element at the specified position in this list.
	public int get(int index) {
		if (index == 0) {
			return getFirst();
		}

		IntNode previous = head;
		for (int i = 1; i <= numNodes; i++) {
			if (i == index) {
				return previous.getLink().getData();
			}

			previous = previous.getLink();
		}

		throw new IndexOutOfBoundsException();
	}

	// Returns the first element in this list.
	public int getFirst() {
		return head.getData();
	}

	// Returns the last element in this list.
	public int getLast() {
		return tail.getData();
	}

	// Retrieves and removes the head (first element) of this list.
	public int remove() {
		IntNode temp = head;
		head = head.getLink();
		numNodes--;

		return temp.getData();
	}

	// Removes the element at the specified position in this list.
	public int remove(int index) {
		if (index == 0) {
			return remove();
		} else if (index == numNodes - 1) {
			return removeLast();
		}

		IntNode previous = head;
		for (int i = 1; i <= index; i++) {

			if (i == index) {
				int data = previous.getLink().getData();
				previous.setLink(previous.getLink().getLink());
				numNodes--;
				return data;
			}

			previous = previous.getLink();
		}

		if (head != null && tail != null) {
			throw new IndexOutOfBoundsException();
		} else {
			throw new NullPointerException();
		}

	}

	// Removes the first occurrence of the specified element in this list (when
	// traversing the list from head to tail).
	public boolean removeFirstOccurrence(int x) {
		IntNode previous = head;

		if (previous.getData() == x) {
			head = previous.getLink();
			numNodes--;
			return true;
		}

		for (int i = 1; i < numNodes; i++) {
			if (previous.getLink().getData() == x) {
				previous.setLink(previous.getLink().getLink());
				numNodes--;
				return true;
			}

			previous = previous.getLink();
		}

		return false;
	}

	// Removes and returns the last element from this list.
	public int removeLast() {
		IntNode previous = head;

		for (int i = 1; i < numNodes; i++) {
			if (i == numNodes - 1) {
				previous.setLink(null);
				numNodes--;
				break;
			}

			previous = previous.getLink();
		}

		return previous.getData();
	}

	// Removes the last occurrence of the specified element in this list (when
	// traversing the list from head to tail).
	public boolean removeLastOccurrence(int x) {
		IntNode previous = head;
		IntNode xOccurrence = null;
		IntNode prevXOccurrence = null;

		for (int i = 1; i < numNodes; i++) {
			if (previous.getLink().getData() == x) {
				prevXOccurrence = previous;
				xOccurrence = previous.getLink();
			}

			previous = previous.getLink();

		}

		if (xOccurrence != null) {
			prevXOccurrence.setLink(xOccurrence.getLink());
			numNodes--;
			return true;
		} else
			return false;
	}

	// Replaces the element at the specified position in this list with the
	// specified element.
	public void set(int index, int x) {
		IntNode previous = head;
		for (int i = 1; i <= index; i++) {
			if (i == index) {
				previous.getLink().setData(x);
			}

			previous = previous.getLink();
		}
	}

	// Returns the number of elements in this list.
	public int size() {
		return numNodes;
	}

	// Returns an array containing all of the elements in this list in proper
	// sequence (from first to last element).
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
