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
	//That array is passed into BSTContact object to set variables
	//These contacts are then assigned to ContactBST
	private void readFile(ContactBST contacts) {
		Scanner scanner = null;
		try {
			scanner = new Scanner(new File("data/contacts.dat"));
		} catch (FileNotFoundException e) {
			System.out.println("File not loaded");
		}
		
		numContacts = Integer.parseInt(scanner.nextLine());
		
		for(int i = 0; i < numContacts; i++) {
			contacts.add(new BSTContact(parseInfo(scanner.nextLine())));
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
	
	public ContactBST getContacts() {
		return contacts;
	}

	public void addContact(BSTContact contact) {
		numContacts++;
		contacts.add(contact);
		
		save();
	}

	public boolean removeContact(BSTContact contact){
		boolean found = contacts.remove(contacts.getRoot(), contact.getLname());
		
		numContacts--;
		System.out.println("Contact Removed!");
		
		save();
		return found;
	}
	
	public BSTContact searchContact(String key){
		return contacts.search(contacts.getRoot(), key).getData();
	}
	
	private void save() {
		try {
			BufferedWriter writer = new BufferedWriter(new PrintWriter(new File("data/contacts.dat")));
			writer.write(Integer.toString(numContacts));
			
			BSTContact[] contactsArr = new BSTContact[numContacts];
			contacts.saveInOrder(contacts.getRoot(), contactsArr, 0);
			
			for(int i = 0; i < numContacts; i++){
				writer.newLine();
				writer.write(contactsArr[i].getLname() + " : " + contactsArr[i].getFname() + " : " + contactsArr[i].getPhoneNum());
			}
			
			writer.close();
			
		} catch (IOException e) {
			System.out.println("IO Exception Occured in Save method");
		}
		
	}
}
