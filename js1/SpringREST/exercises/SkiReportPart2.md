## Ski Report Part 2

Now that we have learned about JSON and object mapping we can implement these technologies into our project. We're going to transform the Ski Report App earlier into a RESTful service. That means that instead of returning a JSP with data attached to it for templating purposes, we're going to return the data alone.

### Directions:
* Add the new dependencies to your pom.xml file. These are called the Jackson jars:

```
<dependency>
  <groupId>com.fasterxml.jackson.core</groupId>
  <artifactId>jackson-core</artifactId>
  <version>2.7.4</version>
</dependency>

<dependency>
  <groupId>com.fasterxml.jackson.core</groupId>
  <artifactId>jackson-databind</artifactId>
  <version>2.7.4</version>
</dependency>
```
* Create a new method in your controller that again takes a resort name as a `@PathVariable`. This time instead of just returning a model with the Resort object in it, just return the entire Resort object to the browser. Your method should not return ModelAndView in the method signiture.
  * Use the path `/rest/Resort/{resortName}`

* Create a second method that grabs a list of all the Resorts from the DAO and returns them to the browser.
  * Use the path `/rest/Resorts`

* Launch your program and hit this route in the browser providing a valid resort name in the URI. What does it return?
