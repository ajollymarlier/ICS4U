package com.bayviewglen.trees;

public class BSTContact implements Comparable<BSTContact>{
	private String lname;
	private String fname;
	private String phoneNum;
	
	public BSTContact() {
		super();
	}
	
	public BSTContact(String[] info) {
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

	@Override
	public int compareTo(BSTContact c) {
		Integer result = null;
		if(this.fname.compareTo(c.fname) == 0)
			result = 0;
		else if(this.lname.compareTo(c.lname) >= 1) 
			result = 1;
		else if(this.lname.compareTo(c.lname) <= -1)
			result = -1;
		
		return result;
	}

	
	
}
