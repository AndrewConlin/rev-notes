# SD Boot Mvc

1. Create project :

_File > New > Spring Starter Project_

2. Select _Gradle Buildship 2.0_

Fill out necessary fields and give project a name

3. Dependencies

* web
* mysql
* jpa

* Include JSP:

`provided group: 'javax.servlet.jsp', name: 'javax.servlet.jsp-api', version: '2.3.1'`

* Include Tomcat Embed Jasper (***this is required to make JSP work***)

`compile group: 'org.apache.tomcat.embed', name: 'tomcat-embed-jasper', version: '8.5.23'
`

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

* Configure the view resolver:

```bash
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
