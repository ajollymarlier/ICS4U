package com.bayviewglen.linkedlist;

public class Main {

	public static void main(String[] args) {
		LinkedList list = new LinkedList();
		list.add(1);
		list.add(5);
		list.add(5);
		list.add(5);
		list.add(1);
		list.add(5);
		
		
		//list.addFirst(2);
		//list.remove();
		//list.clear()
		//list.remove(5);
		//list.removeLast();
		//list.size();
		//list.add(3, 69);
		//list.set(1, 3);
		//list.removeFirstOccurrence(1);
		//list.getFirst();
		//list.getLast();
		//list.get(2);
		//list.removeLastOccurrence(5);
		//listy.contains(5);
		
		display(list.toArray());

	}

	private static void display(int[] is) {
		for(int x : is) {
			System.out.println(x);
		}
		
	}

}
