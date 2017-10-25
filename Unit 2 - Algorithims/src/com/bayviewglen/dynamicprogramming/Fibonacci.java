package com.bayviewglen.dynamicprogramming;

import java.awt.Desktop;
import java.io.File;
import java.io.IOException;

public class Fibonacci {
	public static final int FIB_VALUE = 7;
	public static int[] recursionSolutions = new int[FIB_VALUE + 1];
	public static int[] loopSolutions = new int[FIB_VALUE + 1];

	public static void main(String[] args) throws IOException {
		System.out.println(fibRecursion(FIB_VALUE));
		System.out.println(fibLoop(FIB_VALUE));

	}

	private static int fibLoop(int n) {
		loopSolutions[1] = 1;
		loopSolutions[2] = 1;
		
		for(int i = 3; i <= n; i++) {
			loopSolutions[i] = loopSolutions[i - 1] + loopSolutions[i - 2];
		}
		
		return loopSolutions[n];
	}

	//This can cause a stack overflow with big enough numbers
	private static int fibRecursion(int n) {
		if(n == 1 || n == 2)
			return 1;
		else if(recursionSolutions[n] != 0)
			return recursionSolutions[n];
		else {
			recursionSolutions[n] = fibRecursion(n - 2) + fibRecursion(n - 1);
			return recursionSolutions[n];
		}
		
	}

}
