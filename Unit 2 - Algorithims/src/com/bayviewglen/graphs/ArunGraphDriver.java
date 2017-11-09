package com.bayviewglen.graphs;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ArunGraphDriver {

	public static void main(String[] args) throws FileNotFoundException {
		Scanner scanner = new Scanner(new File("data/graphdata.dat"));
		int numVerts = scanner.nextInt();
		ArunGraph test = new ArunGraph(numVerts);
		
		for(int i = 0; i < numVerts; i++) {
			String[] temp = scanner.nextLine().trim().split(" ");
			
			for(int j = 1; j < temp.length; j++) {
				test.addEdge(Integer.parseInt(temp[0]), Integer.parseInt(temp[j]));
			}
		}

		test.displayLinks();
		scanner.close();
	}

}
