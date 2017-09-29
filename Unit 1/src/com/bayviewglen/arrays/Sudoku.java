package com.bayviewglen.arrays;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Sudoku {

	public static void main(String[] args) {
		int[][] sudokuBoard = readFile();
		System.out.println(check(sudokuBoard));

	}

	private static boolean check(int[][] sudokuBoard) {
		for(int i = 0; i < 9; i++) {
			for(int j = i; j < 9; j++) {
				if(!checkIfSudoku(i, j, sudokuBoard)) {
					return false;
				}	
			}
		}
		
		return true;
		
	}


	private static boolean checkIfSudoku(int i, int j, int[][] sudokuBoard) {
		int rulesMet = 0;
		if(checkRow(i, j, sudokuBoard))
			return false;
		else if(checkCol(i, j, sudokuBoard))
			return false;
		else if(checkBox(i, j, sudokuBoard))
			return false;
		else 
			return true;
	}

	private static boolean checkBox(int i, int j, int[][] sudokuBoard) {
		//Check box
			
	}

	private static boolean checkCol(int i, int j, int[][] sudokuBoard) {
		for(int k = 0; k < 9; k++) {
			if(sudokuBoard[k][j] == sudokuBoard[i][j] && i != k)
				return true;
		}
		
		return false;
	}

	private static boolean checkRow(int i, int j, int[][] sudokuBoard) {
		for(int k = 0; k < 9; k++) {
			if(sudokuBoard[i][k] == sudokuBoard[i][j] && j != k)
				return true;
		}
		
		return false;
	}

	private static int[][] readFile() {
		int[][] temp = new int[9][9];
		
		try {
			Scanner scanner = new Scanner(new File("data/sudoku.dat"));
			
			for(int i = 0; i < 9; i++) {
				for(int j = 0; j < 9; j++) {
					temp[i][j] = scanner.nextInt();
				}
			}
		} catch (FileNotFoundException e) {
			System.out.println(e.getMessage());
		}
		
		return temp;
	}

}
