package com.bayviewglen.dpproblemset;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class ContigiousSubSequence {
	static int n = 7;
	static int maxSum = 0;
	static int[] nums = readFile();
	static int[] sols = new int[n + 1];
	static ArrayList<Integer> maxCombo = new ArrayList<Integer>();
	static ArrayList<Integer> combo = new ArrayList<Integer>();

	//TODO need to output numbers
	public static void main(String[] args) {
		sols[0] = 0;
		
		for(int i = 1; i <= n; i++){
			if(!(nums[i] + sols[i - 1] <= 0)) {
				combo.add(nums[i]);
				sols[i] = nums[i] + sols[i - 1];
			}else {
				combo.clear();
				maxSum = sols[i - 1];
			}
	
			System.out.print(sols[i] + ",");
		}
		
		if(sols[n] > maxSum)
			maxSum = sols[n];
		
		System.out.println("\nSum is " + maxSum);
		for(int i = 0; i < combo.size(); i++) {
			System.out.println(combo.get(i));
		}

	}
	
	private static int[] readFile() {
		Scanner scanner;
		int[] nums = null;
		try {
			scanner = new Scanner(new File("data/subsequence.dat"));
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
