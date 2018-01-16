# SD Boot Mvc

### JSP

1. Create project :

_File > New > Spring Starter Project_

2. Select _Gradle Buildship 2.0_

Fill out necessary fields and give project a name

3. Dependencies

* web
* JSP
* JSTL
* Tomcat Embed Jasper (***this is required to make JSP work***)

```groovy
compile('org.springframework.boot:spring-boot-starter-web')

compile group: 'jstl', name: 'jstl', version: '1.2'
compile group: 'javax.servlet.jsp', name: 'javax.servlet.jsp-api', version: '2.3.1'
compile group: 'org.apache.tomcat.embed', name: 'tomcat-embed-jasper', version: '8.5.23'
```

  * *WHY? The spring-boot-starter-web includes the tomcat embedded dependency but it doesn't includes the jasper embedded dependency, so that should be the reason to declare it separately. Essentially, you need the JDK available to compile a JSP, and Jasper gives you that.*

* Create a `src/main/webapp` directory at the same level as `src/main/java`

  * Add a `WEB-INF` with a `jsp` directory

```bash
AppName
└── src
    └── main
        ├── java
        │   └── com
        │       └── bootmvc
        │           └── app
        │               ├──  SdBootMvcApplication.java
        │               └── controllers
        │                   └── HelloWorldController.java
        ├── resources
        │   ├── application.properties
        │   ├── static
        │   └── templates
        └── webapp
            └── WEB-INF
                └── jsp
                    └── hello.jsp
```

* Configure the view resolver & set the port for the project:

```bash
#### PORT CONFIG ####
server.port=9000

#### JSP VIEW RESOLVER ####
spring.mvc.view.prefix: /WEB-INF/jsp/
spring.mvc.view.suffix: .jsp
```

* Make a controller:

```java
@Controller
public class HelloWorldController {

	@RequestMapping(path = "/hello", method = RequestMethod.GET)
	public String hello() {
		return "hello";
	}
}
```

### MVC Auth

##### Database :

* Spring wants your users to have a certain structure, the example below conforms to what it requires.

  * `enabled` : true or false, determines if User can login or not.

```sql
CREATE TABLE `User` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(55) NOT NULL,
  `enabled` tinyint(1) NOT NULL DEFAULT '0',
  `password` varchar(255) NOT NULL,
  `role` varchar(20) DEFAULT 'BASIC_USER',
  PRIMARY KEY (`id`));
```

##### Dependencies

* mysql
* jpa
* spring security starter

```groovy
compile('org.springframework.boot:spring-boot-starter-data-jpa')
runtime('mysql:mysql-connector-java')

compile ("org.springframework.boot:spring-boot-starter-security")
```

##### Configure Datasource

```bash
#### MYSQL DATASOURCE ####
# https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-sql.html
spring.datasource.url=jdbc:mysql://localhost:3306/spring_sec_db
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
```

##### Configure Spring security

1. Create a `SecurityConfig` class:

```java

import javax.sql.DataSource;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration // -> annotation config for bean
@EnableWebSecurity // -> allows for injection of user (as Principal) to handlers
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired // this one is available by default
	private DataSource dataSource;

	@Autowired // this one you need to create
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
```

2. Create `@Bean` for `PasswordEncoder`
  * Most easily done in the `@SpringBootApplication` class file:

```java
@SpringBootApplication
public class SdBootMvcApplication {

	public static void main(String[] args) {
		SpringApplication.run(SdBootMvcApplication.class, args);
	}

	@Bean // this makes a bean and returns an instance of BCryptPasswordEncoder
	public PasswordEncoder configurePasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
```
