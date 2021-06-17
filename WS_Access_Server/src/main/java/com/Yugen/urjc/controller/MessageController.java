package com.Yugen.urjc.controller;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Yugen.urjc.model.Message;

@RestController
@RequestMapping("/messages")
public class MessageController implements CommandLineRunner{
	
	@Autowired
	private JdbcTemplate template;
	
	private List<Message> messages;

	@Override
	public void run(String... args) throws Exception {
		messages = template.query("SELECT message_user, message_body FROM Messages", new RowMapper<Message>() {
			@Override
			public Message mapRow(ResultSet rs, int rowNum) throws SQLException {
				return new Message(rs.getString("message_user"), rs.getString("message_body"));
			}
		});
	}
	
	@GetMapping
	public List<Message> getAll(){
		return messages;
	}
	
	@PostMapping
	public ResponseEntity<Boolean> createMessage(@RequestBody Message m) {
		if(m.getBody().length()> 255) {
			return new ResponseEntity<Boolean>(false,HttpStatus.CONFLICT);
		}
		else{
			messages.add(m);
			String name = m.getUser();
			String body = m.getBody();
			template.update("INSERT INTO MESSAGES (message_user, message_body) VALUES ('" + name + "', '" + body + "')");
			return new ResponseEntity<Boolean>(true, HttpStatus.CREATED);
		}
	}
}
