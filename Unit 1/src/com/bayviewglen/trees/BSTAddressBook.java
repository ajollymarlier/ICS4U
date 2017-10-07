package com.bayviewglen.trees;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

import com.bayviewglen.arrays.Contact;

public class BSTAddressBook {
	private ContactBST contacts;
	private int numContacts;

	public BSTAddressBook() {
		contacts = new ContactBST();
		readFile(contacts);
	}

	//Finds numContacts from file then parse the information and stores in String[]
	//That array is passed into Contact object to set variables
	//These contacts are then assigned to Contact[]
	private void readFile(ContactBST contacts) {
		Scanner scanner = null;
		try {
			scanner = new Scanner(new File("data/contacts.dat"));
		} catch (FileNotFoundException e) {
			System.out.println("File not loaded");
		}
		
		numContacts = Integer.parseInt(scanner.nextLine());
		
		//TODO not working
		for(int i = 0; i < numContacts; i++) {
			contacts.add(new ContactNode(contacts.getRoot(), new BSTContact(parseInfo(scanner.nextLine()))));
		}
		
		scanner.close();
	}

	private String[] parseInfo(String info) {
		String[] temp = new String[3];
		
		temp[0] = info.split(" : ")[0];
		temp[1] = info.split(" : ")[1];
		temp[2] = info.split(" : ")[2];
		
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
				writer.write(contacts[i].getLname() + " : " + contacts[i].getFname() + " : " + contacts[i].getPhoneNum());
			}
			
			writer.close();
		} catch (IOException e) {
			System.out.println("IO Exception Occured in Save method");
		}
		
	}
}
