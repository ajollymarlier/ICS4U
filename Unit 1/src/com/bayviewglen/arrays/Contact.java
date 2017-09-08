package com.bayviewglen.arrays;

public class Contact{
	private String lname;
	private String fname;
	private String phoneNum;
	
	public Contact() {
		
	}
	
	public Contact(String[] info) {
		super();
		this.lname = info[0].trim();
		this.fname = info[1].trim();
		this.phoneNum = info[2].trim();
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getPhoneNum() {
		return phoneNum;
	}

	public void setPhoneNum(String phoneNum) {
		this.phoneNum = phoneNum;
	}
	
}
