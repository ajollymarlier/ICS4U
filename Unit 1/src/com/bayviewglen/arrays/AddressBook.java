package com.bayviewglen.arrays;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
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
		
		temp[0] = info.split(" : ")[0].split(" ")[0];
		temp[1] = info.split(" : ")[0];
		temp[2] = info.split(" : ")[1];
		
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
		
		save();
	}

	public void removeContact(int index){
		for(int i = 0; i < numContacts; i++){
			if(i > index)
				contacts[i - 1] = contacts[i];
		}
		
		numContacts--;
		System.out.println("Contact Removed!");
		save();
	}
	
	private void save() {
		try {
			BufferedWriter writer = new BufferedWriter(new PrintWriter(new File("data/contacts.dat")));
			writer.write(Integer.toString(numContacts));
			
			for(int i = 0; i < numContacts; i++){
				writer.newLine();
				writer.write(contacts[i].getFname() + " : " + contacts[i].getPhoneNum());
			}
			
			writer.close();
		} catch (IOException e) {
			System.out.println("IO Exception Occured in Save method");
		}
		
	}
}
