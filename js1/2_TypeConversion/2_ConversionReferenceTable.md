### Automatic Type Conversion Reference
      
|Value   |String   |Number   |Boolean   |Object   |
|---|---|---|---|---|
|undefined|"undefined"|NaN|false|typeError|
|null|"null"|0|false|typeError|
|true|"true"|1||new Boolean(true)|
|false|"false"|0|new Boolean(false)|
|""||0|false|new String("")|
|"1.2"||1.2|true|new String("1.2")|
|"Hello"||true|new String("Hello")|
|0|"0"||false|new Number(0)|
|-999|"-999"|true|new Number(-999)|
|NaN|"NaN"|NaN|false|new Number(NaN)|
|{ }|"[object Object]"||true|new Object()|
|[ ]|""|0|true|new Array()|

  
#### Continue to [3 - Identity & Equality Operator](3_Identity_Equality.md)
