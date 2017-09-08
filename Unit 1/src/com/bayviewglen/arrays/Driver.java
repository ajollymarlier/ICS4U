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

	// Still runs this when not a number in menuChoice
	private static void processChoice(int menuChoice) {
		if (menuChoice == 1)
			addPrompt();
		else if (menuChoice == 2)
			removePrompt();
		else if (menuChoice == 3)
			searchPrompt();
		else if (menuChoice == 4)
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
	
	private static void display(int index){
		System.out.println(book.getContacts()[index].getFname() + " : " + book.getContacts()[index].getPhoneNum());
	}

	private static void searchPrompt() {
		System.out.println("Please enter the LAST NAME of the Contact");
		String lname = input.nextLine().trim().toUpperCase();
		
		Boolean found = false;
		for(int i = 0; i < book.getNumContacts(); i++){
			if(book.getContacts()[i].getLname().equals(lname)){
				display(i);
				found = true;
				break;
			}
		}
		
		if(!found)
			System.out.println("Contact not found");

	}

	private static void removePrompt() {
		System.out.println("Please enter the LAST NAME of the Contact you want to remove");
		String lname = input.nextLine().trim().toUpperCase();
		
		Boolean found = false;
		for(int i = 0; i < book.getNumContacts(); i++){
			if(book.getContacts()[i].getLname().equals(lname)){
				book.removeContact(i);
				found = true;
			}
		}
		
		if(!found)
			System.out.println("Contact not found");

	}

	private static void addPrompt() {
		String[] details = new String[3];
		System.out.println("Please enter the LAST NAME of the contact");
		details[0] = input.nextLine().trim().toUpperCase();

		System.out.println("Please enter the FIRST NAME of the contact");
		details[1] = input.nextLine().trim().toUpperCase() + " " + details[0];

		Boolean isNum = false;
		String tempNum = null;

		while (!isNum) {
			System.out.println("Please enter the phone number of this contact (ONLY NUMBERS)");
			tempNum = input.nextLine().trim();
			isNum = checkNum(tempNum);
		}

		details[2] = tempNum;
		book.addContact(new Contact(details));
		System.out.println("Contact Added!");
	}

	private static Boolean checkNum(String tempNum) {
		try {
			Long.parseLong(tempNum);
		} catch (Exception e) {
			System.out.println("Please only enter numbers");
			return false;
		}

		return true;

	}

}
