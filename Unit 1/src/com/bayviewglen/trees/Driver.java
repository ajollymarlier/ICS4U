package com.bayviewglen.trees;

public class Driver {

	public static void main(String[] args) {
		IntBST bst = new IntBST();
		
		bst.add(4);
		bst.add(34);
		bst.add(23);
		bst.add(9);
		bst.add(1);
		bst.add(2);
		bst.add(3);
		bst.add(2);
		bst.add(35);
		
		bst.traverseInOrder(bst.getRoot());
		//System.out.println(bst.findSmallestNode(bst.getRoot()));
		//System.out.println(bst.findLargestNode(bst.getRoot()));
		//System.out.println(bst.search(bst.getRoot(), 9));
		System.out.println(bst.remove(bst.getRoot(), 25));
		bst.traverseInOrder(bst.getRoot());

		
		
		

	}

}
