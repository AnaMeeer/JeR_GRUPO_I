package com.Yugen.urjc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Yugen.urjc.Repository.MessageRepository;
import com.Yugen.urjc.model.Message;

@RestController
@RequestMapping("/messages")
public class MessageController {
	
	@Autowired
	MessageRepository messageRepo;
	
	@PostMapping
	public ResponseEntity<Boolean> createMessage(@RequestBody Message m) {
		if(m.getBody().length()> 255) {
			return new ResponseEntity<Boolean>(false,HttpStatus.CONFLICT);
		}
		else{
			messageRepo.save(m);
			return new ResponseEntity<Boolean>(true, HttpStatus.CREATED);
		}
	}
	
	@GetMapping
	public List<Message> getAllMsg(){
		return messageRepo.findAll();
	}

}
