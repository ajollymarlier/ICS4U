package com.bayviewglen.quizzes;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Sept15 {

	public static void main(String[] args) {
		String[][] board = readFile();

		boolean validGame = checkNumChars(board);

		if (validGame)
			checkBoard(board);

	}

	private static void checkBoard(String[][] board) {
		if (board[0][2].equals(board[1][1]) && board[2][0].equals(board[1][1])) {
			System.out.println(board[0][2] + " Won");
			return;
		}
		
		else if (board[0][0].equals(board[1][1]) && board[2][2].equals(board[1][1])) {
			System.out.println(board[0][0] + " Won");
			return;
		}

		for (int i = 0; i < 3; i++) {
			if (board[i][0].equals(board[i][1]) && board[i][1].equals(board[i][2])) {
				System.out.println(board[i][0] + " Won");
				return;
			}
				

			if (board[0][i].equals(board[1][i]) && board[1][i].equals(board[2][i])) {
				System.out.println(board[0][i] + " Won");
				return;
			}
		}

		System.out.println("Tie");
	}

	private static boolean checkNumChars(String[][] board) {
		int numX = 0;
		int numO = 0;

		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				if (board[i][j].toUpperCase().equals("X"))
					numX++;
				else if (board[i][j].toUpperCase().equals("O"))
					numO++;
			}
		}

		if (Math.abs(numX - numO) != 1) {
			System.out.println("Invalid Game");
			return false;
		}
		return true;

	}

	private static String[][] readFile() {
		String[][] temp = new String[3][3];

		try {
			Scanner scanner = new Scanner(new File("data/Sept15.dat"));

			for (int i = 0; i < 3; i++) {
				for (int j = 0; j < 3; j++) {
					temp[i][j] = scanner.next().trim();
				}
			}
		} catch (FileNotFoundException e) {
			System.out.println(e.getMessage());
		}

		return temp;
	}

}
