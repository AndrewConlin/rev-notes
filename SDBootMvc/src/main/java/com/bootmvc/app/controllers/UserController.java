package com.bootmvc.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.bootmvc.app.data.UserDAO;
import com.bootmvc.app.entities.User;

@Controller
public class UserController {
	
	@Autowired
	private UserDAO userDao;
	
	@RequestMapping(path = "/register", method = RequestMethod.GET)
	public String newUser() {
		return "register";
	}
	
	@RequestMapping(path = "/register", method = RequestMethod.POST)
	public String createUser(User user) {
		// do validation and what haves yous with form validation maybe...
		userDao.register(user);
		return "redirect:/hello";
	}
	
	@RequestMapping(path = "/login", method = RequestMethod.GET)
	public String login() {
		return "login";
	}
	
	
}
