package com.bootmvc.app.controllers;

import java.security.Principal;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HelloWorldController {
	
	@RequestMapping(path = "/hello", method = RequestMethod.GET)
	public String hello(Principal user, Model model) {
		// NOTE: Principal is the logged in user managed by Spring Security
		if (user != null) {
			model.addAttribute("username", user.getName());
		}
		return "hello";
	}
}
