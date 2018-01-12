var account = require('./_10a_export');

var acct = account(6789,'aosfdh',4567,1234,'checking');

// var acct = account.acct(6789,'aosfdh',4567,1234,'checking');


// Test 2
// console.log(acct.checkPin(1234)); // true
// console.log(acct.checkPin(4321)); // false

// Test 3
// console.log(acct.getCurrentBalance()); // 4567

// Test 4
// acct.deposit(33);
// console.log(acct.getCurrentBalance()); // 4600

// acct.deposit('not nums');
// console.log(acct.getCurrentBalance()); // TypeError: Deposited...

// Test 5
// acct.withdraw(67);
// console.log(acct.getCurrentBalance()); // 4500

// acct.withdraw('not nums');
// console.log(acct.getCurrentBalance()); // TypeError: Withdrawal...

// Test 6
// console.log(acct.getCurrentBalance()); // 4567
// acct.accrueInterest();
// console.log(acct.getCurrentBalance()); // 4612.67

// var acct2 = account(6789,'aosfdh',4567,1234,'savings');
// console.log(acct2.getCurrentBalance()); // 4567
// acct2.accrueInterest();
// console.log(acct2.getCurrentBalance()); // 4841.02