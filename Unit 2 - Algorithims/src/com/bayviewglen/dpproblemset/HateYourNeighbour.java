package com.bayviewglen.dpproblemset;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class HateYourNeighbour {
	static int n = 50;
	static int[] nums = readFile();
	static int[] sols = new int[n + 1];

	public static void main(String[] args) {

		if (n == 1)
			System.out.println(nums[1]);
		else if (n == 2)
			System.out.println(Math.max(nums[1], nums[2]));
		else if (n == 3)
			System.out.println(Math.max(Math.max(nums[1], nums[2]), nums[3]));
		else {
			sols[1] = nums[1];
			sols[2] = Math.max(nums[1], nums[2]);
			sols[3] = Math.max(Math.max(nums[1], nums[2]), nums[3]);

			for (int i = 4; i <= n; i++) {
				if (nums[i] + sols[i - 2] > sols[i - 1] || nums[i] + sols[i - 3] > sols[i - 1]) {
					sols[i] = Math.max(nums[i] + sols[i - 2], nums[i] + sols[i - 3]);
				} else {
					sols[i] = sols[i - 1];
				}
			}

			System.out.println(sols[n]);
		}

	}

	private static int[] readFile() {
		Scanner scanner;
		int[] nums = null;
		try {
			scanner = new Scanner(new File("data/neighbours.dat"));
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
