package com.Yugen.urjc;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class WebSocketHandler extends TextWebSocketHandler{

	private Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
	private ObjectMapper mapper = new ObjectMapper();
	
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		System.out.println("User connected: " + session.getId());
		sessions.put(session.getId(), session);
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		System.out.println("User disconnected: " + session.getId());
		sessions.remove(session.getId());
	}
	
	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		//System.out.println("Message recieved: " + message.getPayload());
		JsonNode node = mapper.readTree(message.getPayload());
		
		sendToOtherParticipants(session, node);
	}
	
	private void sendToOtherParticipants(WebSocketSession session, JsonNode node) throws IOException{
		//System.out.println("Message sent: " + node.toString());
		ObjectNode newNode = mapper.createObjectNode();
		int type = -1;
		if(node.get("type") != null) {
			type = node.get("type").asInt();
			newNode.put("type", node.get("type").asInt());
		}
		
		if(type > 0 && type != 4) {
			newNode.put("x", node.get("x").asInt());
			newNode.put("y", node.get("y").asInt());
			newNode.put("xDir", node.get("xDir").asInt());
			newNode.put("yDir", node.get("yDir").asInt());
		}
		else if(type == 4) {
			newNode.put("x", node.get("x").asInt());
		}
		else {
			newNode.put("x", node.get("x").asInt());
			newNode.put("y", node.get("y").asInt());
		}
		for(WebSocketSession participant : sessions.values()) {
			if(!participant.getId().equals(session.getId())) {
				synchronized(participant) {
				participant.sendMessage(new TextMessage(newNode.toString()));
				}
			}
		}
	}
}
