package com.bayviewglen.dpproblemset;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ZigZag {
	static int n = 100;
	static public int[] sol = new int[n + 1];
	static public int numElements = 2;
	static int[] nums = readFile();
	static int diffCheckNum = nums[1];

	// TODO check for the working number that has a working number next to it
	// -5, 4 - 2, 4, -4, -1, 4, -1, 5, 1 Cut -4 cus -1 has 5 next to it so it can
	// keep going
	public static void main(String[] args) {
		sol[1] = 1;

		for (int i = 2; i <= n; i++) {
			if(numElements % 2 == 0 && nums[i] > diffCheckNum || numElements % 2 == 1 && nums[i] < diffCheckNum) {
				sol[i] = sol[i - 1] + 1;
				diffCheckNum = nums[i];
				numElements++;
				
			}else {
				sol[i] = sol[i - 1];
				diffCheckNum = nums[i];
			}
		}

		display();

	}

	private static void display() {
		System.out.println(sol[sol.length - 1]);

	}

	private static int[] readFile() {
		Scanner scanner;
		int[] nums = null;
		try {
			scanner = new Scanner(new File("data/zigZagNums.dat"));
			nums = new int[n + 1];
			for (int i = 1; i <= n; i++) {
				nums[i] = Integer.parseInt(scanner.nextLine().trim());
			}

			scanner.close();
		} catch (FileNotFoundException e) {
			System.out.println("File not found");
		}

		return nums;
	}

}
