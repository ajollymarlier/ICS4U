package com.bayviewglen.nqueens;

import java.awt.Point;
import java.util.Scanner;
import java.util.Stack;

public class BoardDriver {
	static Stack<Point> points = new Stack<Point>();
	static int filled = 0;
	static int n;
	static long start;

	public static void main(String[] args) {
		nPrompt();

		// For starting time when processing
		start = System.currentTimeMillis();

		while (filled < n) {
			addQueen(new Point(0, filled), 0);
		}

		display();
		countTime();
	}

	private static void nPrompt() {
		Scanner input = new Scanner(System.in);
		System.out.print("How many queens do you want?: ");
		boolean isNumber = false;

		while (!isNumber) {
			try {
				n = Integer.parseInt(input.nextLine().trim());
				
				//if n <= 3 the it is impossible
				// Change exception to custom one
				if (n <= 3)
					throw new ClassCastException();

				isNumber = true;
			} catch (NumberFormatException e) {
				System.out.print("That is not a number. Try again: ");
			} catch (ClassCastException e) {
				System.out.println("It is impossible to do that. Enter another: ");
			}
		}

		input.close();
	}

	private static void countTime() {
		System.out.println(" ");
		System.out.println("This program with " + n + " Queens, took " + (System.currentTimeMillis() - start) + "ms");

	}

	private static void display() {
		String[][] board = load();

		for (int i = 0; i < board.length; i++) {
			for (int j = 0; j < board[0].length; j++) {
				if (board[i][j] != null) {
					System.out.print(board[i][j]);
				} else {
					System.out.print(".");
				}
			}
			System.out.println(" ");
		}

	}

	private static String[][] load() {
		String[][] board = new String[n][n];

		while (!points.empty()) {
			Point temp = points.pop();
			board[temp.x][temp.y] = "Q";
		}

		return board;

	}

	// i tracks the x translation
	private static void addQueen(Point temp, int i) {
		if (i == n) {
			boolean inRange = false;
			Point newPoint = null;

			while (!inRange) {
				filled--;

				newPoint = points.pop();

				if (newPoint.getX() < n) {
					newPoint.setLocation(newPoint.getX() + 1, newPoint.getY());
					inRange = true;
				}
			}

			addQueen(newPoint, (int) newPoint.getX());

		} else if (!conflict(temp)) {
			points.push(temp);
			filled++;

		} else {
			temp.setLocation(temp.getX() + 1, temp.getY());
			addQueen(temp, i + 1);

		}

	}

	private static boolean conflict(Point newPoint) {
		Stack<Point> temp = new Stack<Point>();
		temp.addAll(points);

		while (!temp.empty()) {
			Point check = temp.pop();

			if (newPoint.getX() == check.getX() || newPoint.getY() == check.getY())
				return true;

			else if (Math.abs(check.getX() - newPoint.getX()) == Math.abs(check.getY() - newPoint.getY())) {
				return true;
			}
		}

		return false;

	}

}
