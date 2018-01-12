## Ski Report Part 1

Let's do some hands on work with configuring a new Spring-MVC project and transforming it into a RESTful Project.

The goal of this project will be to provide a web utility to see the snow-depth of a given ski resort. We will load the pages into memory from a CSV file, and create and configure a DAO in the Spring Application Context for use in our controllers.

**Below are step by step directions, you DO NOT have to follow these verbatim as long as you get the end goal project done, these directions are for reference only**

### Directions:
* Create a new Dynamic Web Project in Eclipse.
* Right click your project in the package explorer and click configure -> Maven Project.
* Open your pom.xml and copy the following code into the source code, below the closing build tag. Maven is a dependency management tool for Java Libraries, by specifying a library you need in the pom.xml, Maven will grab all of the libraries that your specified libraries need.
```
    <dependencies>
      	<dependency>
    		<groupId>org.springframework</groupId>
    		<artifactId>spring-webmvc</artifactId>
    		<version>4.2.3.RELEASE</version>
    	</dependency>

    	<dependency>
    		<groupId>org.springframework</groupId>
    		<artifactId>spring-web</artifactId>
    		<version>4.2.3.RELEASE</version>
    	</dependency>

    	<dependency>
    		<groupId>org.springframework</groupId>
    		<artifactId>spring-core</artifactId>
    		<version>4.2.3.RELEASE</version>
    	</dependency>

    	<dependency>
    		<groupId>jstl</groupId>
    		<artifactId>jstl</artifactId>
    		<version>1.2</version>
    	</dependency>

    </dependencies>
```
* Now that we have our dependencies in place, go to WebContent / Web-INF / web.xml.

* Configure your web.xml deployment descriptor.

* Configure your -servlet.xml to be annotation driven, later we will create and configure a single spring bean DAO (Data-Access Object) for accessing the snow depth of a given ski resort from the application context.

* Create a new Java Package / Class that matches the package statement in your -servlet.xml, this is where we will put our controllers and request mappings

* Create an ```@RequestMapping``` to get the snow depth, have it return a JSP ModelAndView that will display the snow depth and resort name. The ```@RequestMapping``` needs to take an ```@RequestParam``` that will take the resort name.

* Create a ```SnowFallDAO``` class, that will act as our utility for getting the snow-depth for a given resort.
   The Class will load in data from the resortReport.csv file, which is provided. The data is organized as resortName, snowDepth, numChairLifts. Create a Resort Object that has 3 fields (resortName, snowDepth, numChairLifts). Implement a 3 arg constructor as well as the appropriate gets and sets. Put the data into a ```HashMap<String, Resort>``` where the key is the resort name, and the Resort is the Resort object.

   In the ```SnowFallDAO``` autowire the ApplicationContext and create an init method.
   ```
      @PostConstruct
      public void init(){}
   ```
   Spring will call this method **AFTER** the constructor has finished executing. Write the logic to read in the file and create your Map of values.

* In your controller class access the SnowFallDAO to check the resortName from the `@PathVariable` and see if it's in the `SnowFallDAO` and return a view.

* Start writing your view in JSTL / EL in the JSP, all you need is a resort name, and snow depth displayed.

### [JSON data](../JSON.md)
