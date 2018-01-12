### Routing with Spring
Up to now we have done our routing with the `.do` convention. We want to eliminate this extension in our RESTful routes. A route like, `@RequestMapping("getEmployees.do/{arg1}");` is pretty ugly. We would much rather clean it up to look like this `@RequestMapping("getEmployees/{arg1}");`.

But how can we do this with Spring? In our web.xml files we have traditionally configured the url-pattern to `*.do`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns="http://java.sun.com/xml/ns/javaee" xmlns:web="http://java.sun.com/xml/ns/javaee"
	xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"
	id="WebApp_ID" version="3.0">

	<servlet>
		<servlet-name>Ski</servlet-name>
		<servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
		<load-on-startup>1</load-on-startup>
	</servlet>
	<servlet-mapping>
		<servlet-name>Ski</servlet-name>
		<url-pattern>*.do</url-pattern>
	</servlet-mapping>

</web-app>
```

This property however can be changed to anything we want. The extension `.do` is a convention for standard Spring applications, where as `/rest/*` is standard for Spring REST applications.

```xml
...

<servlet>
  <servlet-name>Ski</servlet-name>
  <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
  <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
  <servlet-name>Ski</servlet-name>
  <url-pattern>/rest/*</url-pattern>
</servlet-mapping>

</web-app>
```

The path to our respective method in the controller is now `/rest/getEmployees` instead of `getEmployees.do`.

#### Pathing problems with static resources
Because we changed our url-pattern, Spring no longer knows how to access static files, like our .jsp pages. If I were to try to return a ModelAndView it would look for resources at `/rest/index.jsp`. We can however work around this by either:
* Pathing to our jsp pages with `../index.xml` when we use `mv.setViewName();`
* Adding a ViewResolver bean to out `-servlet.xml` file;

If we choose the latter we need to do a few things to our Spring project. First, add a folder `views` tot he WebContent directory. Move all of your .jsp files into this directory. Next open your `-servlet.xml` file. Within this file we are going to add a bean called a view resolver. This bean takes two parameters, a prefix and suffix. The prefix is the folder in which your views are located. The suffix is the extension of the file. Adding this tells Spring where to look for your local resources.

```
<bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
	<property name="prefix" value="/views/"/>
	<property name="suffix" value=".jsp"/>
</bean>
```

### CRUD with REST

CRUD stands for CREATE - READ - UPDATE - DELETE regarding data storage and manipulation. A good example for this is Craigslist. You **CREATE** a post, a user **READS** a  post, you can **UPDATE** a post, and you can **DELETE** a post. Over the primary communications protocol of the web, HTTP we can send requests that have meaning to the server. The types of HTTP are as follows:

#### Request Types
  * PUT
  * GET
  * POST
  * DELETE

These request types correspond to `CREATE READ UPDATE DELETE` respectively. For the most part, the different method types are purely semantic. The notable exception to this rule is `GET`, get puts the request data as part of a URL string instead of in the request body. This means that when you send a request using  `GET` the data is visible to the end user in the URL string.

### [Status Codes](StatusCodes.md)
