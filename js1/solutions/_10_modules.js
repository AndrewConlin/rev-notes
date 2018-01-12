// 1
var account = (function(
					acctNum, 
					acctHolder, 
					startingBalance, 
					pin, 
					type){
	var acctNum = 
		(typeof acctNum === 'number') ? 
			acctNum : null;
	var acctHolder = 
		(typeof acctHolder === 'string') ? 
			acctHolder : null;
	var balance = 
		(typeof startingBalance === 'number') ? 
			startingBalance : null;
	var pin = (typeof pin === 'number') ? 
		pin : null;
	var type = (type === 'checking' || type === 'savings') ? 
		type : null;

	// Verify that the account has valid information
	function verifyAccount(){
		for (var i = 0 ; i < arguments.length ; i++) {
			if (arguments[i] === null) {
				throw new Error('AccountCreationError: ' + 
					arguments[i] + ' must not be null');
			}
		}
	}
	// Before proceeding, check that all necessary values exist
	verifyAccount(acctNum,acctHolder,startingBalance,pin,type);
// 2
	function checkPin(userPin) {
		return (userPin === pin) ? true : false;
	}

// 3
	function getCurrentBalance() {
		return balance;
	}

// 4
	function deposit(num) {
		if ((typeof num === 'number') && !isNaN(num)) {
			balance += num;
		} else {
			throw new TypeError('Deposited value must be a number');
		}
	}

// 5 
	function withdraw(num) {
		if ((typeof num === 'number') && !isNaN(num) && (balance > num)) {
			balance -= num;
		} else {
			throw new TypeError('Withdrawal value must be a number');
		}
	}

// 6
	function accrueInterest() {
		var interestRate = (type === 'checking') ? 0.01 : 0.06;
		balance += (balance * interestRate);
	}

	return {
		checkPin : checkPin,
		getCurrentBalance : getCurrentBalance,
		deposit : deposit,
		withdraw : withdraw,
		accrueInterest : accrueInterest
	}
});

var acct = account(6789,'aosfdh',4567,1234,'checking');

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

