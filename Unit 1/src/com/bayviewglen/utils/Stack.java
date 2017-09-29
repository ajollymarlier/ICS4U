package com.bayviewglen.utils;

public class Stack {
	private int i;
	private Object[] objects;
	private int arrLength;

	public Stack() {
		this.arrLength = 10;
		this.i = 0;
		this.objects = new Object[arrLength];
		
		
	}
	
	public Stack(Object[] objects) {
		
	}
	
	public void push(Object obj) {
		if(i % 9 == 1) {
			Object[] temp = objects;
			objects = new Object[arrLength *= 2];
			
			for(int j = 0; j < temp.length; j++) {
				objects[j] = temp[j];
			}
		}
		
		objects[i] = obj;
		i++;
		
	}
	
	public Object pop() {
		Object pop = objects[--i];
		return pop;
		
	}
	
	public Object peek() {
		return objects[i - 1];
	}
	
	public boolean empty() {
		if(objects[0] != null)
			return false;
		else
			return true;
		
	}

}
