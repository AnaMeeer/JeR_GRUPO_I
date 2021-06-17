package com.Yugen.urjc.model;

public class User {

	private String name;
	private String password;
	private boolean connected;
	private int highScore;
	
	
	public User() {
	}
	public User(String name, String password, boolean connected, int highScore) {
		this.name = name;
		this.password = password;
		this.connected = connected;
		this.highScore = highScore;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public boolean isConnected() {
		return connected;
	}
	public void setConnected(boolean connected) {
		this.connected = connected;
	}
	public int getHighScore() {
		return highScore;
	}
	public void setHighScore(int highScore) {
		this.highScore = highScore;
	}
	
	
	
}
