package com.Yugen.urjc.controller;


import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Yugen.urjc.model.User;

@RestController
@RequestMapping("/users")
public class UserController implements CommandLineRunner{
	
	public static Logger LOG = LoggerFactory.getLogger(UserController.class); //De esta manera se imprime en consola de forma más eficiente
	
	@Autowired
	private JdbcTemplate template;
	
	private List<User> users = new ArrayList<User>();

	@Override
	public void run(String... args) throws Exception {
		users = template.query("SELECT user_name, user_password, connected, high_score FROM Users", new RowMapper<User>() {
			@Override
			public User mapRow(ResultSet rs, int rowNum)throws SQLException{
				return new User(rs.getString("user_name"), rs.getString("user_password"), rs.getBoolean("connected"), rs.getInt("high_score"));
			}
		});
		//LOG.info("Tamaño: " + users.size());
	}
	
	@PostMapping
	public User putUser(@RequestBody User u) {
		String name = u.getName();
		String password = u.getPassword();
		int idx = findUserByName(name);
		if(idx != -1) {
			User eUser = users.get(idx);
			if(eUser.getPassword().equals(password)) {
				template.update("UPDATE Users SET connected = true WHERE user_name = '" + name + "'");
				User updated = users.get(idx);
				updated.setConnected(true);
				users.set(idx, updated);
				return u; //Logged
			}
			else {
				User nfound = new User("0", "0", false, -1);
				return nfound;//Wrong password
			}
		}
		template.update("INSERT INTO USERS(user_name, user_password, connected) VALUES ('" + name + "', '" + password + "', true)");
		users.add(u);
		return u; //Registered
	}
	
	@GetMapping
	public List<User> getUser() {
		return users;
	}
	
	@GetMapping("/status")
	public int getConnectedusers() {
		int connectedUsers = 0;
		for (int i = 0; i < users.size(); i++) {
			User u = users.get(i);
			if(u.isConnected()) {
				connectedUsers++;
			}
		}
		return connectedUsers;
	}
	
	@PutMapping
	public int changeuser(@RequestBody User u) {
		String name = u.getName();
		int idx = findUserByName(name);
		if(idx != -1) {
			boolean con = u.isConnected();
			int highScore = u.getHighScore();
			template.update("UPDATE Users SET connected = " + con + ", high_score = " + highScore + " WHERE user_name = '" + name + "'");
			users.set(idx, u);
			return 1;
		}
		return 0;
	}
	
	private int findUserByName (String n) {
		for (int i = 0; i < users.size(); i++) {
			User u = users.get(i);
			if(u.getName().equals(n)) {
				return i;
			}
		}
		return -1;
	}

}

