## HTTP Status codes
Status codes give us information on the status of our request. There are five classes of HTTP response codes indicated by the first digit of the code.

**100's**  Informational- Im going to send you some information

**200's**  Success- Your request was successful!  
* 200: OK  

**300's**  Redirect- I'm going to send you somewhere else  
* 304: Not modified  
* 307: Temporary redirect  

**400's** Client error- You messed up
* 400: Bad request
* 401: Unauthorized
* 403: Forbidden
* 404: Not found

**500's** Server error- I messed up
* 500: Internal server error

For a full list of status codes look at the following resources!
* [HTTP status codes for beginners][Status codes for beginners]
* [Full list of status codes][Full List]

#### Browser tool
Download a browser tool called Redirect Path. This utility allows you to see the HTTP response codes as you are browsing the web.

## Curl

Curl is a command line utility to pull down the data from a HTTP request to the command line and local file system. You can use Curl to test your RESTFul services.

Example: `curl localhost:8080/MyFirstRestBuild/rest/ping`

Will give us the `pong` response associated with this address.

###### Common Command Line Arguments

Try using and see what comes back `curl https://www.google.com`
- -X specify the method you want to use

### [Ski Report Part 1](exercises/SkiReportPart1.md)

[Status codes for beginners]:https://www.addedbytes.com/articles/for-beginners/http-status-codes/
[Full List]:http://www.restapitutorial.com/httpstatuscodes.html
