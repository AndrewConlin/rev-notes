package com.bootrest.app.data;

import org.springframework.data.repository.CrudRepository;

import com.bootrest.app.entities.User;

public interface UserRepo extends CrudRepository<User, Integer> {
	public User findOneUserByUsername(String username);
}
