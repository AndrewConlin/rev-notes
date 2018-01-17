package com.bootrest.app.controllers;

import java.util.Arrays;
import java.util.Collection;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin({"*", "http://localhost:4200"})
public class MessageController {

	@RequestMapping(path = "/api/message", method = RequestMethod.GET)
	public Collection<String> index() {
		return Arrays.asList("apple", "banana", "coconut");
	}
}
