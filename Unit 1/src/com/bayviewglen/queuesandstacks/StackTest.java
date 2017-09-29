package com.bayviewglen.queuesandstacks;

import java.util.LinkedList;

import com.bayviewglen.utils.*;

public class StackTest {

	public static void main(String[] args) {
		Stack stack = new Stack();
		stack.push(21);
		System.out.println(stack.peek());
		stack.push("Colin is a Furry");
		System.out.println(stack.pop());
		System.out.println(stack.peek());
		stack.push("Ali");
		System.out.println(stack.peek());
		

	}

}
