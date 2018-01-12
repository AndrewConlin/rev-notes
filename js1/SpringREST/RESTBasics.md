# Remember Spring MVC?

In weeks prior we went over developing a web application with Spring-MVC. Let's go over a brief overview of what Spring-MVC is:

- Spring-MVC is a web application framework that leverages the Model-View-Controller pattern to make dynamically generated web pages.

- Spring-MVC uses ```@Controller```, ```@RequestMapping``` to take HTTP requests and map those to a **controller** which runs a function and returns a **view**.

- A Spring-MVC ```@RequestMapping``` returns a view, which is usually a HTML or JSP (Java Server Page) file. Spring-MVC then passes data via the model(e.g a java object) to the view which then uses it to add custom data to a web page and returns it in a response to the client.

- The JSP views returned from a Spring-MVC view use a template language called *Expression Language* to access data inside of the JSP. In addition to Expression Language, JSP's use a tag library called **JSTL** or *Java Standard Template Library* to format the template page.

## What is a RESTful service?

RESTful web services is an architecture bases around HTTP Protocol. GET/PUT/POST/DELETE are the common HTTP methods used with a REST architecture. A RESTful web service will mimic those we have made in Spring MVC, but with a few slight differences.
* We will follow a standard URI convention with our ```@RequestMapping``` annotations.
* Our methods will no longer return a view (JSP or HTML page). They will instead return data only. The data is usually and object, formatted as JSON, which we will learn about later on.
* We will follow the semantic HTTP Protocol for our RESTful services.

## Using Spring @ResponseBody and @RestController Annotations

Now that we have written a working project in Spring-MVC we're going to change that project to a Spring-Rest project. It is fairly easy to do as we only need to know two new annotations, ```@RestController``` and ```@ResponseBody```.

### @ResponseBody

The ```@ResponseBody``` annotation is placed above an ```@RequestMapping``` annotation. It changes the way spring handles the return value from trying to map it to a view, to returning a JSON representation of an object, or a text value representation of a primitive type.

For our specific example of returning the snow-depth for a given resort we would return an integer value of the snow depth.

When you put ```@ResponseBody``` above the class definition, every ```@RequestMapping``` within that class will have the ```@ResponseBody``` functionality. If you have ```@ResponseBody``` at a class level, and you want a ```@RequestMapping``` to return a view, set the return type of that method to an ```@ModelAndView```.

### @RestController
@RestController is a convenience annotation that adds both the ```@ResponseBody``` and ```@Controller``` annotations to the class level.

### @PathVariable, Why It's Important For REST

The ```@PathVariable``` annotation provides and alternative way to get data from the client, where it is directly embedded in the URL of a request, instead of in a query string.

**Example:**

```
@RequestMapping("/service/{arg1}")
```
Will pull a parameter value from a URL Path such as:
```
http://localhost:8080/Project/rest/anArgumentValue
```

To do the same thing with @RequestParam, we would take data from a URL such as:
```
http://localhost:8080/Project/rest?arg1=anArgumentValue
```
```
    @RequestMapping("/employees/{id}")
    @ResponseBody
    public String getDate(@PathVariable long id){
    return dao.getEmployeeById(id);
    }
```
One of the primary reasons that we use ```@PathVariable``` to get data is that the request is cleaner, and provides a more semantic approach to getting data from an application or web service.

### [Routing with Spring](rest_routes.md)
