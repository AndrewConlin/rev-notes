package com.bootmvc.app.security;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration // -> annotation config for bean
@EnableWebSecurity // -> allows for injection of user to handlers
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private DataSource dataSource;
	
	@Autowired
	private PasswordEncoder encoder; 

	
	// THIS method configures When Spring handles security (e.g. what is secure)
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.csrf().disable() // ==> this is a little bit of a hammer, but it keeps you from having to provide the token each time
								// SEE register.jsp for alternative (commented out in form)
			.authorizeRequests()
				.antMatchers("/register").permitAll() // ==> allow requests to here
				.anyRequest().authenticated() // ==> ALL HTTP requests must be authenticated
				.and()
			.formLogin() // ==> support for form-based login (using default login page)
				.loginPage("/login").permitAll() // ==> tell spring to use your login page
				.and()
			.httpBasic();
		
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		/** IN MEMORY config, good for testing...does not use db, quickly discarded
		
		auth
			.inMemoryAuthentication()
				.withUser("user").password("user").roles("USER");
		*/
		
		// Define a query to select the username and password from a User (this assumes you user table is User)
		String userQuery = "SELECT username, password, enabled FROM User WHERE username=?";
		String authQuery = "SELECT username, role FROM User WHERE username=?";
		
		auth
			.jdbcAuthentication()
				.dataSource(this.dataSource) // give it the connection to the db
				.usersByUsernameQuery(userQuery) // run query
				.authoritiesByUsernameQuery(authQuery)
				.passwordEncoder(encoder); // use the bean defined in SdBootMvcApplication.java
	}

}
