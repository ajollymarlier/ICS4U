package com.bayviewglen.trees;

import java.util.Scanner;

import com.bayviewglen.arrays.AddressBook;
import com.bayviewglen.arrays.Contact;

public class ContactDriver {
	private static Scanner input = new Scanner(System.in);
	private static BSTAddressBook book = null;

	public static void main(String[] args) {
		book = new BSTAddressBook();

		while (true) {
			prompt();
		}

	}

	private static void prompt() {
		int menuChoice = 0;

		boolean hasNumber = false;
		System.out.println("Menu (Enter Number) \n1. Add Contact \n2. Remove Contact \n3. Search \n4. Display");
		try {
			menuChoice = Integer.parseInt(input.nextLine().trim().toUpperCase());
			hasNumber = true;
		} catch (Exception e) {
			System.out.println("Please only enter a number");
		}

		processChoice(menuChoice, hasNumber);

	}

	private static void processChoice(int menuChoice, boolean hasNumber) {
		if (menuChoice == 1)
			//WORKS
			addPrompt();
		else if (menuChoice == 2)
			//WORKS
			removePrompt();
		else if (menuChoice == 3)
			//SORT OF WORKS
			searchPrompt();
		else if (menuChoice == 4)
			display();
		else if (hasNumber)
			System.out.println("Please enter one of the choices available");
	}

	private static void display() {
		book.getContacts().traverseInOrder(book.getContacts().getRoot());
	}

	private static void display(BSTContact temp) {
		System.out.println(temp.getFname() + " : " + temp.getPhoneNum());
	}

	//TODO only displays first contact with last name
	private static void searchPrompt() {
		System.out.println("Please enter the LAST NAME of the Contact");
		String lname = input.nextLine().trim().toUpperCase();

		BSTContact temp = null;
		temp = book.searchContact(lname);

		if (temp == null)
			System.out.println("Contact not found");
		else
			display(temp);
		
		

	}

	private static void removePrompt() {
		System.out.println("Please enter the LAST NAME of the Contact you want to remove");
		String lname = input.nextLine().trim().toUpperCase();

		Boolean found = book.getContacts().remove(book.getContacts().getRoot(), lname);

		if (!found)
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
		book.addContact(new BSTContact(details));
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
