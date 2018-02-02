# Boot Auth (Client)

* this application creates a service which talks to ./SDBootRest which provides httpBasic auth through Spring Security. This strategy is insecure (it's just HttpBasic so it uses the URL encoded username and password==>raw password as a token), but it gets the concept across relatively simply and could always be refactored later to use a Spring UserDetailsService with cryptographically secure JWT (much superior).

* In the meantime, this is a 100% stateless solution, and provides AN authentication strategy. As such I would recommend using it with Angular.

### Where is this configured on the Angular side?

* configured in: ./src/app/auth.service.ts

* used in: message.service.ts & app.component.ts

### Where is this configured on the Spring Boot side?

* security configuration: SDBootRest/src/main/java/com/bootrest/app/security/SecurityConfig.java

* Check out the `AuthenticationManagerBuilder` as it is using a custom query to determine the username/password viability from the dataSource

* datasource config is in application.properties and references a user table that looks like this:

```SQL
CREATE TABLE `User` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(55) NOT NULL,
  `enabled` tinyint(1) NOT NULL DEFAULT '0',
  `password` varchar(255) NOT NULL,
  `role` varchar(20) DEFAULT 'standard',
  PRIMARY KEY (`id`)
)
```
