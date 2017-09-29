package com.bayviewglen.linkedlist;

public class Main {

	public static void main(String[] args) {
		LinkedList list = new LinkedList();
		list.add(1);
		list.add(5);
		list.add(3);
		list.add(2);
		list.add(1);
		list.add(4);
		
		
		//list.remove();
		//list.clear()
		
		//TODO list.removeLast();
		//list.remove(1);
		//TODO list.removeLastOccurrence(1);
		
		display(list.toArray());

	}

	private static void display(int[] is) {
		for(int x : is) {
			System.out.println(x);
		}
		
	}

}
