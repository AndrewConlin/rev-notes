### Global Object
* When the JavaScript interpreter starts, it creates a special object called the *global object*
  
* When you create variables and functions they become the properties of this *global object*
  
* You can reference the *global object* in the global scope on the browser with the `this` keyword (referring to the `window` object), and in Node with the `this` keyword (referring to the `global` object):
  
```javascript
// in Node
this;
/* { DTRACE_NET_SERVER_CONNECTION: [Function],
  DTRACE_NET_STREAM_END: [Function],
  DTRACE_HTTP_SERVER_REQUEST: [Function],
  DTRACE_HTTP_SERVER_RESPONSE: [Function],
  DTRACE_HTTP_CLIENT_REQUEST: [Function],
  DTRACE_HTTP_CLIENT_RESPONSE: [Function],
  global: [Circular],
  process: 
   process {
     title: 'node',
     version: 'v4.2.1',
     ...
*/

// in browser
this; // Window {external: Object, chrome: Object, document: document, docCookies: Object, Prism: Object…}
```
  
* The global object also defines:
  * properties: `undefined`, `Infinity`, ...
  * functions: `isNaN()`, `parseInt()`, ...
  * constructors: `Object()`, `String()`, ...
  * objects: `Math`, `JSON`, ...  
  

#### Continue to [3 - Wrapper Objects](3_WrapperObjects.md)