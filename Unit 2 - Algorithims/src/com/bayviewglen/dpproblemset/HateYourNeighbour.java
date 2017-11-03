package com.bayviewglen.dpproblemset;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class HateYourNeighbour {
	static int n = 10;
	static int[] nums = readFile();
	static int[] sols = new int[n + 1];

	public static void main(String[] args) {
		sols[1] = nums[1];
		for(int i = 1; i <= n; i+=2) {
			sols[i] = sols[i - 1] + nums[i];
			
			
		}

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
