package com.bootrest.app.controllers;

import java.security.Principal;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bootrest.app.data.UserDAO;
import com.bootrest.app.entities.User;

@RestController
@CrossOrigin({"*", "http://localhost:4200"})
public class UserController {
	
	@Autowired
	private UserDAO userDao;
	
	@RequestMapping(path = "/register", method = RequestMethod.POST)
	public User register(@RequestBody String json, HttpServletResponse res) {
		
		User u =  userDao.register(json);
			
		if (u == null) {
			res.setStatus(400);
		}
		
		return u;
	}
	
	@RequestMapping(path = "/authenticate", method = RequestMethod.GET)
	public Principal authenticate(Principal principal) {
		return principal;
	}

}
