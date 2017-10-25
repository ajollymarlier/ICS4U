package com.bayviewglen.dynamicprogramming;

import java.util.ArrayList;

public class SolitairePoints {
	static int n = 5;
	int cost = 0;
	String[] sol = new String[n];

	public static void main(String[] args) {
		doIt(1);
		//System.out.println(hasFactorForAdding(2));

	}

	private static void doIt(int c) {
		if (hasFactorForAdding(c))
			return;

	}

	private static boolean hasFactorForAdding(int c) {
		for (int i = 1; i <= c; i++) {
			if (c % i == 0 && c + i == n)
				return true;

		}
		
		return false;
	}

}
