package com.bootrest.app.security;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	// this you get for free when you configure the db connection in .properties
	@Autowired
	private DataSource dataSource;
	
	// this bean is created in SdBootRestApplication.java...if you're looking for it
	@Autowired
	private PasswordEncoder encoder;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
        http
        .csrf().disable()
        .authorizeRequests()
        		// 	For CORS, the preflight request will hit the OPTIONS on the route
        		.antMatchers(HttpMethod.OPTIONS, "/api/**").permitAll() 
        		.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
        		.antMatchers("/login").permitAll()
        		.antMatchers("/register").permitAll()
        		.anyRequest().authenticated()
        	.and()
        .httpBasic();
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		String userQuery = "SELECT username, password, enabled FROM User WHERE username=?";
		String authQuery = "SELECT username, role FROM User WHERE username=?";
		auth
			.jdbcAuthentication()
			.dataSource(dataSource)
			.usersByUsernameQuery(userQuery)
			.authoritiesByUsernameQuery(authQuery)
			.passwordEncoder(encoder);
	}

}
