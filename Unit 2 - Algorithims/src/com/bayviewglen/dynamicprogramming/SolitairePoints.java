package com.bayviewglen.dynamicprogramming;

import java.util.ArrayList;

public class SolitairePoints {
	static int n = 5;
	static int cost = 0;
	//static ArrayList<Integer> factors = new ArrayList<Integer>();

	public static void main(String[] args) {
		doIt(1);
		// System.out.println(hasFactorForAdding(2));

	}

	private static void doIt(int c) {
		if (hasFactorForAdding(c))
			return;
		//else if()

	}

	private static boolean hasFactorForAdding(int c) {
		for (int i = 1; i <= c; i++) {
			if (c % i == 0) {
				cost += i;
				
				if (c + i == n)
					return true;
				
				break;
			}

		}

		return false;
	}

}
