### Labs

1: Use the 'Revealing Module Pattern' to model a bank account.
  
  
Create a variable named `account` and assign a new module to it. The module should:
  * take five arguments:
    * `acctNum` => a number
    * `acctHolder` => a string
    * `startingBalance` => a number (float)
      * store this in a property named `balance`
    * `pin` => a number
    * `type` => a string, either 'checking' or 'savings'
  * Be sure to type check the inputs
  
2: Create and expose a method:
  * `checkPin(pin)` => takes a pin number as an argument and returns a boolean after comparing the pin collected with the one stored


3: Create and expose a method:
  * `getCurrentBalance()` => returns the current balance


4: Create and expose a method:
  * `deposit(num)` => increments the account balance by the amount provided
  

5: Create and expose a method:
  * `withdraw(num)` => decrements the account balance by the amount provided ONLY if the current account balance is greater than the amount to be withdrawn


6: Create and expose a method:
  * `accrueInterest()` => increments the account balance by 0.01% of total value if `type` is 'checking' and 0.06% of total value if type is 'savings'
  

#### Back to [Table of Contents](../README.md)
