package com.bayviewglen.arrays;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class AddressBook {
	private Contact[] contacts;
	private int numContacts;

	public AddressBook() {
		contacts = new Contact[1000];
		readFile(contacts);
	}

	//Finds numContacts from file then parse the information and stores in String[]
	//That array is passed into Contact object to set variables
	//These contacts are then assigned to Contact[]
	private void readFile(Contact[] contacts) {
		Scanner scanner = null;
		try {
			scanner = new Scanner(new File("data/contacts.dat"));
		} catch (FileNotFoundException e) {
			System.out.println("File not loaded");
		}
		
		numContacts = Integer.parseInt(scanner.nextLine());
		
		for(int i = 0; i < numContacts; i++) {
			contacts[i] = new Contact(parseInfo(scanner.nextLine()));
		}
		
		scanner.close();
	}

	private String[] parseInfo(String info) {
		String[] temp = new String[3];
		
		temp = info.split(":");
		return temp;
		
	}
	
	public int getNumContacts() {
		return numContacts;
	}

	public void setNumContacts(int numContacts) {
		this.numContacts = numContacts;
	}
	
	public Contact[] getContacts() {
		return contacts;
	}

	public void addContact(Contact contact) {
		numContacts++;
		contacts[numContacts - 1] = contact;
	}
}
