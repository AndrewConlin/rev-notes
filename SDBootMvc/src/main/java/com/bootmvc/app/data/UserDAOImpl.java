package com.bootmvc.app.data;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import com.bootmvc.app.entities.User;


@Repository
@Transactional
public class UserDAOImpl implements UserDAO {
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private PasswordEncoder encoder;

	@Override
	public User register(User user) {
		String encodedPW = encoder.encode(user.getPassword());
		user.setPassword(encodedPW); // only persist encoded password
		
		user.setEnabled(true); // makes user able to login
		
		userRepo.save(user);
		
		return user;
	}

}
