package com.bootrest.app.data;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import com.bootrest.app.entities.User;
import com.fasterxml.jackson.databind.ObjectMapper;


@Repository
@Transactional
public class UserDAOImpl implements UserDAO {
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private PasswordEncoder encoder;

	@Override
	public User register(String json) {
		ObjectMapper om = new ObjectMapper();
		User user = null;
		try {
			user = om.readValue(json, User.class);
			
			String encodedPW = encoder.encode(user.getPassword());
			user.setPassword(encodedPW); // only persist encoded password
			
			user.setEnabled(true); // makes user able to login
			
			userRepo.save(user);
		} catch (Exception e) {
			// TODO: handle exception
		}		
		return user;
	}

}
