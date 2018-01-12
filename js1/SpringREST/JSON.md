## Data Transfer with Rest Services - JSON to POJO and Back

The thing that makes web services work is the transfer of data from the server to the client. In the paradigm of Client(Browser) / Server you will typically transfer your data in the form of JSON (Javascript Object Notation). JSON is directly convertible to a javascript object, because of this, it lends itself to use on the client side. Spring MVC combined with the Jackson (com.fasterxml.jackson.core) libraries allow us to directly convert a POJO (Plain Old Java Object) to a JSON representation for use on the client side. We can also go back to a POJO from JSON by using an `ObjectMapper`.

### Pom.xml dependencies
We need to add a few dependencies to our project to have the ability to map objects to json and vice versa. Add these two jars to your pom.xml

```xml
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

### What is JSON?
JSON is the short for Javascript Object Notation. Objects created in Java are accessed using JSON on the front end via server-to-browser communication. For example say we have a class Person like the one seen below.
```Java
Public class Person{
  private String fname;
  private String lname;
  private int age;

  // constructor
  // gets and sets
}
```
If we were to instantiate an instance of this class in Java,
```json
Person p = new Person("Andrew", "Conlin", 25);
```
it would then be represented in JSON as follows:
```json
{
  "fname": "Andrew", "lname": "Conlin", "age": 25
}
```

Moving forward our web apps will not use Model and Views to route to specific JSP pages or to access data. We instead use XMLHTTPRequest/AJAX to hit the controller solely to access data. This data is returned to us in JSON and can be subsequently manipulated using Javascript.

### POJO To JSON

By Default, the  `@ResponseBody` and `@Controller` annotations will look for the Jackson-Databind Library in the  `Pom.xml`. If it finds the library it will automagically convert the POJO to it's JSON representation.

Alternatively you can add the `produces = MediaType.APPLICATION_XML_VALUE` to your `@RequestMapping` to return XML instead of JSON. That would look something like this:
```Java
    @RequestMapping(produces = MediaType.APPLICATION_XML_VALUE value="/someMapping")
    @ResponseBody
    public Date getDate(){
      return new Date();
    }
```
To see a full list of returnable `MediaType` go [here](http://docs.oracle.com/javaee/7/api/javax/ws/rs/core/MediaType.html).

### JSON To POJO And Back

We know `@ResponseBody` will return JSON by default, but what about going back to a Java Object from JSON?

If we define a `User` class in Java like so:
```Java
    public class User{
      String name;
      int id;
      String email;

      //Getters + Setters
    }
```
The JSON representation of an instance of this class would look like this:
```json
    {"name":"Kris","email":"kkane@gmail.com","id":1}
```
Assume that we had a web page that would take in the necessary information to construct a new User object, in this case a name, email, and id. We can use a class called `ObjectMapper` to **map** the JSON fields to the Java object field.

We would use syntax like this to use the `ObjectMapper`:
```Java
    ObjectMapper mapper = new ObjectMapper();
    User user = mapper.readValue(UserJSONString, User.class);
```
##### @JsonIgnore

If you would like a field to be ignored when converting to or from JSON, you can use the `@JsonIgnore` to tell the Jackson libraries to skip that specific field. This is useful for a situation where you have two objects that refer to each other, this causes a circular reference, which will in turn throw an exception.

### Recursive json
We can get into situations where our objects have over objects within them. When these objects are translated to json we can get nested json that continuously reference each other. As you can see, it can get a little crazy.

```java
public class User {
    public int userID;
    public String fname;
    public String lname;
    public List<Account> userAccounts;
}

public class Account {
    public int id;
    public String itemName;
    public int balance;
    public User owner;
 }
 ```
 In this example out User will have a list of accounts, which in turn have a user within them... which in turn have a list of accounts. It never ends and will cause your program to hang with a stack overflow error. We have to configure our java classes with a few annotations so that the java can be properly be mapped to json.

##### @JsonManagedReferance
This is the forward part of the reference. The entity that has the list inside of it.

##### @JsonBackReferance
This is the back part of the reference. The reference back to the object with the list.

We would implement these annotations as follows:

```java
public class User {
    public int userID;
    public String fname;
    public String lname;

    @JsonBackReference
    public List<Account> userAccounts;
}

public class Account {
    public int id;
    public String itemName;
    public int balance;

    @JsonManagedReference
    public User owner;
 }
 ```
 
### [Ski Report Part 2](exercises/SkiReportPart2.md)
