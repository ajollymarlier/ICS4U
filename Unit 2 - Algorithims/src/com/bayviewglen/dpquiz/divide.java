package com.bayviewglen.dpquiz;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.Scanner;

public class divide {
	static Scanner scanner;
	static int steps = 0;
	static int divider;
	static int[] options = new int[3];

	public static void main(String[] args) throws FileNotFoundException {
		scanner = new Scanner(new File("data/quiz.dat"));
		
		for(int i = 0; i < 7; i++) {
			readFile();
			/*int[] sols = new int[divider + 1];
			sols[1] = 0;
				
			for(int j = 2; j <= divider; j++) {
				sols[j] = sols[j - 1];
				
				if(j % options[0] == 0) {
					sols[i] = Math.min(sols[j], 1 + sols[j / options[0]]);
				}
					
				if(j % options[1] == 0) {
					sols[i] = Math.min(sols[j], 1 + sols[j / options[1]]);
				}
					
				if(j % options[2] == 0) {
					sols[i] = Math.min(sols[i], 1 + sols[j / options[2]]);
				}
				
				//if()
				
				//if()
				
					
			}*/
			
			while(divider != 1) {
				if(divider % options[2] == 0 && options[2] != 1) {
					divider /= options[2];
					System.out.print("/" + options[2] + " ");
				}
					
				
				else if(divider % options[1] == 0 && options[1] != 1) {
					divider /= options[1];
					System.out.print("/" + options[1] + " ");
				}
					
				
				else if(divider % options[0] == 0 && options[0] != 1) {
					divider /= options[0];
					System.out.print("/" + options[0] + " ");
				}
					
				else {
					divider--;
					System.out.print("-1 ");
				}
					
				
				steps++;
			}
			
			System.out.println(" : " + steps + " steps taken");
			steps = 0;
		}
		
		scanner.close();

	}

	private static void readFile() {
		divider = scanner.nextInt();
		
		for(int i = 0; i < 3; i++) {
			options[i] = scanner.nextInt();
		}
		
		Arrays.sort(options);
	}

}
