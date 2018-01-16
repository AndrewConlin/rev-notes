package com.bootmvc.app.data;

import org.springframework.data.repository.CrudRepository;

import com.bootmvc.app.entities.User;

public interface UserRepo extends CrudRepository<User, Integer> {}
