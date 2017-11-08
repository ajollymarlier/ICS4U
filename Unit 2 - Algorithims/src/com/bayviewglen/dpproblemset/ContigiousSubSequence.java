package com.bayviewglen.dpproblemset;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class ContigiousSubSequence {
	static int n;
	static int maxSum = 0;
	static int[] nums = readFile();
	static int[] sols = new int[n + 1];
	static ArrayList<Integer> maxCombo = new ArrayList<Integer>();
	static ArrayList<Integer> currCombo = new ArrayList<Integer>();
	

	public static void main(String[] args) {
		sols[0] = 0;

		for (int i = 1; i <= n; i++) {
			if (nums[i] < 0 && sols[i - 1] > maxSum) {
				maxCombo = (ArrayList<Integer>) currCombo.clone();
				currCombo.clear();
				maxSum = sols[i - 1];
			}
				
			if (!(nums[i] + sols[i - 1] <= 0)) {
				currCombo.add(nums[i]);
				sols[i] = nums[i] + sols[i - 1];
				
			} else {
				if (sols[i] > maxSum){
					maxCombo = (ArrayList<Integer>) currCombo.clone();
					currCombo.clear();
					maxSum = sols[i - 1];
				}
					
			}
		}

		if (sols[n] > maxSum)
			maxSum = sols[n];
		
		for(int i = 0; i < maxCombo.size(); i++){
			System.out.print(maxCombo.get(i) + ", ");
		}

		System.out.println("\nMax sum is " + maxSum);

	}

	private static int[] readFile() {
		Scanner scanner;
		int[] nums = null;
		try {
			scanner = new Scanner(new File("data/subsequence.dat"));
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
