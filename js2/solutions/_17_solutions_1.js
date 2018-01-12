addEventListener('load', function() {
	// Check that js file loads
	console.log('LOADED');
	
	// Call function to build table with initial request
	buildTableWithRequest();
});

// Create convenience function to remove table
var clearResortTable = (function(){
	var table = document.getElementById('resortTable');
	table.parentElement.removeChild(table);
});

// Show individual resort information
var showResort = (function(data){
	// Remove the table
	clearResortTable();
	var resortDiv = document.getElementById('resorts');
	
	// Create HTML to display resort
	var nameHeader = document.createElement('h2');
	nameHeader.textContent = data.resortName;
	resortDiv.appendChild(nameHeader);
	
	var snowDiv = document.createElement('div');
	snowDiv.innerHTML = '<b>Snow Depth: </b>' + data.snowDepth;
	resortDiv.appendChild(snowDiv);
	
	var chairDiv = document.createElement('div');
	chairDiv.innerHTML = '<b>Snow Depth: </b>' + data.numLifts;
	resortDiv.appendChild(chairDiv);
	
	var listResortsBtn = document.createElement('button');
	listResortsBtn.textContent = 'List Resorts';
	listResortsBtn.addEventListener('click', function(e){
		// remove the resort content
		var resortDiv = e.target.parentElement;
		while (resortDiv.firstChild) {
			resortDiv.removeChild(resortDiv.firstChild);
		}
		// put the table back
		buildTableWithRequest();
	});
	resortDiv.appendChild(listResortsBtn);
	
});


// Make request for resorts data, use response to build table
var buildTableWithRequest = (function (){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'rest/resorts');

	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			var data = JSON.parse(xhr.responseText);

			// Call function construct table with available data
			buildResortTable(data);
		}
	};

	xhr.send(null);
});

// Construct Table
var buildResortTable = (function(data){
	// Sort data by snowDepth
	data.sort(function(a,b){
		return b.snowDepth - a.snowDepth;
	});


	var resortsDiv = document.getElementById('resorts');

	var table = document.createElement('table');

	table.id = 'resortTable';

	// Construct Headers
	var trHead = document.createElement('tr');
	var headers = ["Resort Name", "Snow Fall", "Chair Lifts"];
	
	headers.forEach(function(val,ind,arr){
		var th = document.createElement('th');
		th.textContent = val;
		trHead.appendChild(th);
	});

	table.appendChild(trHead); // Add headers to table
	
	data.forEach(function(val,ind,arr){
		// Construct resort table rows
		var tr = document.createElement('tr');
		
		for (p in val) {
			var td = document.createElement('td');
			td.textContent = val[p];
			tr.appendChild(td);
		}

		// create 'View' button
		var viewBtn = document.createElement('button');
		viewBtn.textContent = 'View';

		// set resortName property on the button
		viewBtn.setAttribute('resortName', val.resortName);

		// listen for click
		viewBtn.addEventListener('click', function(e) {
			// grab resort name from button
			var resort = e.target.getAttribute('resortName');
			var xhr = new XMLHttpRequest();

			xhr.open('GET', 'rest/resorts/' + resort);
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4 && xhr.status < 400) {
					var data = JSON.parse(xhr.responseText);
					// Call showResort method with data
					showResort(data);
				}
			};
			
			xhr.send(null);
		});
		tr.appendChild(viewBtn);
		// append row
		table.appendChild(tr);
	});
	// append table
	resortsDiv.appendChild(table);
});
