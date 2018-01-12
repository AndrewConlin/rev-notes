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


	function verifyAccount(){
		for (var i = 0 ; i < arguments.length ; i++) {
			if (arguments[i] === null) {
				throw new Error('AccountCreationError: ' + 
					arguments[i] + ' must not be null');
			}
		}
	}

	verifyAccount(acctNum,acctHolder,balance,pin,type);

	function checkPin(userPin) {
		return (userPin === pin) ? true : false;
	}

	function getCurrentBalance() {
		return balance;
	}

	function deposit(num) {
		if ((typeof num === 'number') && !isNaN(num)) {
			balance += num;
		} else {
			throw new TypeError('Deposited value must be a number');
		}
	}

	function withdraw(num) {
		if ((typeof num === 'number') && !isNaN(num) && (balance > num)) {
			balance -= num;
		} else {
			throw new TypeError('Withdrawal value must be a number');
		}
	}

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

module.exports = account;

// module.exports.acct = account;




