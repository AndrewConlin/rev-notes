### Key Press Event
* The `keypress` event is fired when a key is pressed down and that key normally produces a character value.
  
* `keypress` differs from `keydown` in that it only fires on character key press and not ANY key press.
  
```javascript
addEventListener("keypress", function(e){
    console.log(e.charCode);
});
```
  

#### Continue to [5 - Key and Char Codes](5_KeyAndCharCode.md)