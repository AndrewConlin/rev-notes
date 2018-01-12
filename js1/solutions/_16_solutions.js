// Test that file loads
addEventListener('load', function(e){
	console.log('LOADED');
});

// 3
function logFormData(form) {
	console.log(form.fname.value);
	console.log(form.lname.value);
	console.log(form.email.value);
	console.log(form.street.value);
	console.log(form.city.value);
	console.log(form.state.value);
	console.log(form.zip.value);
}

// 4
function verifyFormData(form) {
	var fields = form.children;
	var errors = [];
	// Verify that fields are not empty
	errors = errors.concat(verifyNotEmpty(fields));
	// Verify that email is an email
	if (verifyEmail(form.email)) {
		errors.push('email must be valid');
	}
	// Verify state
	if (verifyState(form.state.value)) {
		errors.push(verifyState(form.state.value))
	}
	// Verify zip
	errors = errors.concat(verifyZip(form.zip.value));

	console.log(errors);
	return errors;
}

function verifyNotEmpty(formInputs) {
	var blankFieldErrors = [];
	for (var i = 0 ; i < formInputs.length ; i++) {
		// if a value is empty, push an error message into
		// the errors array
		if (!formInputs[i].value) {
			blankFieldErrors.push(formInputs[i].name + 
				' must not be blank');
		}
	}
	// return the array
	return blankFieldErrors;
}

function verifyEmail(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

function verifyState(state) {
	if (state.length > 2) {
		return 'state must be two digits';
	}
	return false;
}

function verifyZip(zip) {
	var zipErrors = [];
	if (zip.length !== 5) {
		zipErrors.push('zip must be 5-digits');
	}
	if (isNaN(parseInt(zip))) {
		zipErrors.push('zip must be a number');
	}
	return zipErrors;
}

function displayErrors(errors) {
	var errDiv = document.getElementById('errors');

	var ul = document.createElement('ul');

	errors.forEach(function(val,ind,arr){

		var li = document.createElement('li');

		li.textContent = val;

		ul.appendChild(li);
	});

	errDiv.appendChild(ul);
}

function displayContent(fields) {
	var contact = document.getElementById('contact');

	var ul = document.createElement('ul');

	for (var i = 0 ; i < fields.length ; i++) {

		if (fields[i].name !== 'submit') {
			
			var li = document.createElement('li');
			li.textContent = fields[i].value;
			ul.appendChild(li);
		}
	}
	contact.appendChild(ul)
}

function displayPersonFromObject(person) {
	var contact = document.getElementById('contact');
	var table = document.createElement('table');
	for (p in person) {
		var row = document.createElement('tr');
		var labelTd = document.createElement('td');
		var valueTd = document.createElement('td');
		labelTd.textContent = p;
		valueTd.textContent = person[p];
		row.appendChild(labelTd);
		row.appendChild(valueTd)
		table.appendChild(row);
	}
	contact.appendChild(table)
}



// 2
var form = document.contactForm;


form
	.submit
	.addEventListener('click', function(e){
		e.preventDefault();

		var form = e.target.parentElement;

		// logFormData(form); // 3
		var errors = verifyFormData(form);

		// 6
		if (errors.length > 0) {
			displayErrors(errors);
		// 7
		} else {
			var contact = person(
				form.fname.value,
				form.lname.value,
				form.email.value,
				form.street.value,
				form.city.value,
				form.state.value.toUpperCase(),
				form.zip.value
				);
			// displayContent(form.children);
			displayPersonFromObject(contact.getShippingDetails())

			form.parentElement.removeChild(form);
		}
});

// bonus
var person = (function(fname,lname,email,street,city,state,zip) {
	var fname = (typeof fname === 'string') ? fname : '';
	var lname = (typeof lname === 'string') ? lname : '';
	var email = (typeof email === 'string') ? email : '';
	var street = (typeof street === 'string') ? street : '';
	var city = (typeof city === 'string') ? city : '';
	var state = ((typeof state === 'string') && (state.length === 2)) ? state : '';
	var zip = (zip) ? zip : '';

	function getShippingDetails() {
		return {
			fname : fname,
			lname : lname,
			email : email,
			street : street,
			city : city,
			state : state,
			zip : zip
		}
	}

	return {
		getShippingDetails : getShippingDetails
	}
});
