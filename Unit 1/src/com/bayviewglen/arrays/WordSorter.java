package com.bayviewglen.arrays;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.Scanner;

public class WordSorter {

	public static void main(String[] args) throws FileNotFoundException {
		String[] allWords = new String[100];
		int wordCount = 0;
		
		Scanner input = new Scanner(new File("data/Words.dat"));
		while(input.hasNext()) {
			String word = input.next();
			allWords[wordCount] = word;
			wordCount++;
		}
		
		input.close();
		
		allWords = usableArray(allWords, wordCount);
		
		Arrays.sort(allWords);
		
		display(allWords);
		
		allWords = removeWord(allWords, wordCount);
		
		System.out.println("-----------");
		display(allWords);
		
	}

	private static void display(String[] allWords) {
		for(String x : allWords) {
			System.out.println(x);
		}
		
	}

	private static String[] removeWord(String[] allWords, int wordCount) {
		String[] temp = new String[allWords.length - 1];
		int middleIndex = wordCount / 2 - 1;
		
		allWords[middleIndex] = allWords[allWords.length - 1];
		
		for(int i = 0; i < temp.length; i++) {
			temp[i] = allWords[i];
		}
		
		Arrays.sort(temp);
		
		return temp;
	}

	private static String[] usableArray(String[] allWords, int wordCount) {
		String[] temp = new String[wordCount];
		
		for(int i = 0; i < wordCount; i++) {
			temp[i] = allWords[i];
		}
		
		return temp;
	}

}
