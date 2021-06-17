package com.Yugen.urjc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@SpringBootApplication
@EnableWebSocket
public class YugenAccessBbddApplication implements WebSocketConfigurer{

	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		registry.addHandler(wsHandler(), "/player1").setAllowedOrigins("*");
	}
	@Bean
	public WebSocketHandler wsHandler() {
		return new WebSocketHandler();
	}

	public static void main(String[] args) {
		SpringApplication.run(YugenAccessBbddApplication.class, args);
	}

}
