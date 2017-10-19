package com.bayviewglen.nqueens;

import java.awt.Point;
import java.util.Scanner;
import java.util.Stack;

public class BoardDriver {
	static Stack<Point> points = new Stack<Point>();
	static int filled = 0;
	static int n = 4;

	public static void main(String[] args) {
		// input();
		while (filled < n) {
			addQueen(null, 0);
		}

		display();
	}

	private static void display() {
		String[][] board = load();
		
		for(int i = 0; i < board.length; i++) {
			for(int j = 0; j < board[0].length; j++) {
				if(board[i][j] != null) {
					System.out.print(board[i][j]);
				}else {
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

	private static void addQueen(Point temp, int i) {
		temp = new Point(i, filled);

		if (!conflict(temp)) {
			points.push(temp);
			filled++;

		} else if (i == 4) {
			filled--;
			addQueen(points.pop(), 0);

		} else {
			temp.setLocation(temp.getX(), temp.getY() + 1);
			addQueen(temp, i + 1);

		}

	}

	private void input() {

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
