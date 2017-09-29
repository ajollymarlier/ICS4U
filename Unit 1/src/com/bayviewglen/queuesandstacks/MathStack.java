package com.bayviewglen.queuesandstacks;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.Stack;

public class MathStack {

	public static void main(String[] args) {
		ArrayList<String> math = readFile();
		
		Stack<String> operators = new Stack<String>();
		Stack<String> operands = new Stack<String>();
		
		for(int i = 0; i < math.size(); i++) {
			if(checkOperand(math.get(i))) {
				addOperand(math.get(i), operators, operands)
			}
		}
		

	}

	private static void addOperand(String string, Stack<String> operators, Stack<String> operands) {
		if()
		
	}

	private static boolean checkOperand(String string) {
		try{
			Double.parseDouble(string);
			return true;
		}catch(Exception e) {
			if(string.equals(")")){
				return true;
			}else {
				return false;
			}
		}
	}

	private static ArrayList<String> readFile() {
		String[] math = null;
		try {
			Scanner scanner = new Scanner(new File("data/math.dat"));
			math = scanner.nextLine().split(" ");
			scanner.close();
		} catch (FileNotFoundException e) {
			System.out.println(e.getMessage());
		}
		
		ArrayList<String> mathList= new ArrayList<String>();
		for(int i = 0; i < math.length; i++) {
			mathList.add(math[i]);
		}
		
		return mathList;
	}

}
