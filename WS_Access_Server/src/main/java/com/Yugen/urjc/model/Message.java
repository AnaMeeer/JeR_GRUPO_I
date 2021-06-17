package com.Yugen.urjc.model;

public class Message {
	int id;
	private String user;
	private String body;
	
	public Message(String user, String body) {
		super();
		this.user = user;
		this.body = body;
	}
	public String getUser() {
		return user;
	}
	public void serUser(String name) {
		this.user = name;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	
	
}
