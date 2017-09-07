package com.bayviewglen.arrays;

import java.util.Scanner;

public class Driver {
	private static Scanner input = new Scanner(System.in);
	private static AddressBook book = null;

	public static void main(String[] args) {
		book = new AddressBook();

		while (true) {
			prompt();
		}

	}

	private static void prompt() {
		int menuChoice = 0;

		System.out.println("Menu (Enter Number) \n1. Add Contact \n2. Remove Contact \n3. Search \n4. Display");
		try {
			menuChoice = Integer.parseInt(input.nextLine().trim().toUpperCase());
		} catch (Exception e) {
			System.out.println("Please only enter a number");
		}

		processChoice(menuChoice);

	}

	//Still runs this when not a number in menuChoice
	private static void processChoice(int menuChoice) {
		if(menuChoice == 1)
			addPrompt();
		else if(menuChoice == 2)
			removePrompt();
		else if(menuChoice == 3)
			searchPrompt();
		else if(menuChoice == 4)
			display();
		else
			System.out.println("Please enter one of the choices available");
	}

	private static void display() {
		for (int i = 0; i < book.getNumContacts(); i++) {
			System.out.println(book.getContacts()[i].getFname() + " : " + book.getContacts()[i].getPhoneNum());
		}

		System.out.println("");

	}

	private static void searchPrompt() {
		// TODO Auto-generated method stub

	}

	private static void removePrompt() {
		// TODO Auto-generated method stub

	}

	// TODO need to add contingencies
	private static void addPrompt() {
		String[] details = new String[3];
		System.out.println("Please enter the FULL NAME of the contact");
		String inputStr = input.nextLine().trim().toUpperCase();

		details[0] = inputStr.split(" ", 2)[1];
		details[1] = inputStr;

		System.out.println("Please enter the phone number of this contact EXACTLY as shown");
		System.out.println("555-555-5555");
		inputStr = input.nextLine().trim();

		details[2] = inputStr;

		book.addContact(new Contact(details));
		
		
		System.out.println("Contact Added!");

	}

}
