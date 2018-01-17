package com.oauthserver.app.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private AuthenticationManager authManager;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.requestMatchers()
			.antMatchers("/login", "/oauth/authorize")
			.and()
			.authorizeRequests()
				.anyRequest().authenticated()
			.and()
			.formLogin().permitAll();
				
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth
			.parentAuthenticationManager(authManager)
			.inMemoryAuthentication()
			.withUser("asdf").password("asdf").roles("USER");
	}
}
