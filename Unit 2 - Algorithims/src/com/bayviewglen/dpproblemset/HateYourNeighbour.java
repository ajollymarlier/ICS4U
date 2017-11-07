package com.bayviewglen.dpproblemset;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class HateYourNeighbour {
	static int n = 50;
	static int[] nums; 
	static int[] sols;
	static int[] backSols;

	public static void main(String[] args) {
		nums = readFile();
		sols = new int[n];
		backSols = new int[n];
		
		if (n == 1)
			System.out.println(nums[1]);
		else if (n == 2)
			System.out.println(Math.max(nums[1], nums[2]));
		else if (n == 3)
			System.out.println(Math.max(Math.max(nums[1], nums[2]), nums[3]));
		else {
			sols[1] = nums[1];
			backSols[1] = nums[n];
			sols[2] = Math.max(nums[1], nums[2]);
			backSols[2] = Math.max(nums[n], nums[n - 1]);

			for (int i = 3; i < n; i++) {
				if (nums[i] + sols[i - 2] > sols[i - 1] || nums[i] + sols[i - 3] > sols[i - 1]) {
					sols[i] = Math.max(nums[i] + sols[i - 2], nums[i] + sols[i - 3]);
				} else {
					sols[i] = sols[i - 1];
				}
				
				if(nums[nums.length - i] + backSols[i - 2] > backSols[i - 1] || nums[nums.length - i] + backSols[i - 3] > backSols[i - 1]) {
					backSols[i] = Math.max(nums[nums.length - i] + backSols[i - 2], nums[nums.length - i] + backSols[i - 3]);
				}else {
					backSols[i] = backSols[i - 1];
				}
			}

			System.out.println("The max money possible is $" + Math.max(sols[n - 1], backSols[n - 1]));
		}

	}

	private static int[] readFile() {
		Scanner scanner;
		int[] nums = null;
		try {
			scanner = new Scanner(new File("data/neighbours.dat"));
			n = scanner.nextInt();
			nums = new int[n + 1];
			for (int i = 1; i <= n; i++) {
				nums[i] = scanner.nextInt();
			}

			scanner.close();
		} catch (FileNotFoundException e) {
			System.out.println("File not found");
		}

		return nums;
	}

}
