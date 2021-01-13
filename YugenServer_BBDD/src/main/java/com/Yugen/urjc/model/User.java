package com.Yugen.urjc.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "user_name", nullable = false)
	private String name;
	@Column(name = "user_password", nullable = false)
	private String password;
	@Column(name = "connected", nullable = false)
	private boolean connected;
	@Column(name="high_score", nullable = false)
	private int highScore;
	
	public User() {
		
	}
	
	public User(String name, String password, boolean connected, int highScore) {
		this.name = name;
		this.password = password;
		this.connected = connected;
		this.highScore = highScore;
	}

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
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

	@Override
	public String toString() {
		return "User [id=" + id + ", firstName=" + name + ", lastName=" + password + ", connected=" + connected
				+ "]";
	}
	
}