package com.bayviewglen.arrays;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class MultipleChoice {

	public static void main(String[] args) {
		String[][] grades = readFile();
		String[] key = {"D", "B", "D", "C", "C", "D", "A", "E", "A", "D"};
		int[] studentScores = checkGrades(grades, key);
		
		display(studentScores);
	}

	private static void display(int[] studentScores) {
		for(int i = 0; i < studentScores.length; i++) {
			System.out.println("Student " + (i + 1) + "'s score is " + studentScores[i]);
		}
		
	}

	//TODO not working
	private static int[] checkGrades(String[][] grades, String[] key) {
		int[] temp = new int[8];
		for(int i = 0; i < grades.length; i++) {
			int score = 0;
			
			for(int j = 0; j < grades.length; j++) {
				if(grades[i][j].equals(key[j]))
					score++;
			}
			
			temp[i] = score;
		}
		
		return temp;
	}

	private static String[][] readFile() {
		String[][] temp = new String[8][10];
		try {
			Scanner scanner = new Scanner(new File("data/grades.dat"));
			for(int i = 0; i < temp.length; i++) {
				temp[i] = scanner.nextLine().split(" ");
			}
			
		} catch (FileNotFoundException e) {
			System.out.println(e.getMessage());
		}
		
		return temp;
	}

}
