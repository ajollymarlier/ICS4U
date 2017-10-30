package com.bayviewglen.dpproblemset;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ZigZag {
	static int numElements = 1;
	static int n = 10;
	static public int[] sol = new int[n + 1];
	static int[] nums = readFile();

	// TODO check for the working number that has a working number next to it
	// -5, 4 - 2, 4, -4, -1, 4, -1, 5, 1 Cut -4 cus -1 has 5 next to it so it can
	// keep going
	public static void main(String[] args) {
		sol[1] = 1;

		for (int i = 1; i <= n; i++) {
			//TODO this is a useless if
			if (nums[i] == 1000) {
				sol = null;
			}
			else if (numElements % 2 == 1 && nums[i - 1] < nums[i]) {
				numElements++;
				sol[i] = sol[i - 1] + 1;
			} else if (numElements % 2 == 0 && nums[i - 1] > nums[i]) {
				numElements++;
				sol[i] = sol[i - 1] + 1;
			} else {
				sol[i] = sol[i - 1];
			}

		}

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
