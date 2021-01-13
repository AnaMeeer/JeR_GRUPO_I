package com.Yugen.urjc.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Yugen.urjc.Repository.UserRepository;
import com.Yugen.urjc.exception.ResourceNotFoundException;
import com.Yugen.urjc.model.User;



@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	private UserRepository userRepository;

	@GetMapping
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<User> getUserById(@PathVariable(value = "id") Long userId)
			throws ResourceNotFoundException {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));
		return ResponseEntity.ok().body(user);
	}
	@GetMapping("/status")
	public long getStatus() {
		List<User> usuarios = userRepository.findAll();
		long connectedUsers = 0;
		for (int i = 0; i < usuarios.size(); i++) {
			User u = usuarios.get(i);
			if(u.isConnected()) {
				connectedUsers++;
			}
		}
		return connectedUsers;
	}

	@PostMapping
	public long createUser(@Validated @RequestBody User u) {
		String userName = u.getName();
		String userPassword = u.getPassword();
		User regUser = findUserByName(userName);
		if(regUser != null) {
			if(regUser.getPassword().equals(userPassword)) {
				regUser.setConnected(true);
				userRepository.save(regUser);
				return regUser.getId(); //Logged in
			}
			else return -1; //Wrong password
		}
		userRepository.save(u);
		User aux = findUserByName(userName);
		return aux.getId(); //Registered
	}

	@PutMapping("/{id}")
	public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long userId,
			@Validated @RequestBody User userDetails) throws ResourceNotFoundException {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));

		user.setName(userDetails.getName());
		user.setPassword(userDetails.getPassword());
		user.setConnected(userDetails.isConnected());
		user.setHighScore(userDetails.getHighScore());
		final User updatedUser = userRepository.save(user);
		return ResponseEntity.ok(updatedUser);
	}

	@DeleteMapping("/{id}")
	public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long userId)
			throws ResourceNotFoundException {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));

		userRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	
	private User findUserByName(String userName) {
		List <User> userList = userRepository.findAll();
		for (int i = 0; i < userList.size(); i++) {
			User regUser = userList.get(i);
			if(regUser.getName().equals(userName)) {
				return regUser;
			}
		}
		return null;
	}
}