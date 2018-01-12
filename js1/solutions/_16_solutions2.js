//\\//\\ states //\\//\\
var usStates = [
    { name: 'ALABAMA', abbr: 'AL'},
    { name: 'ALASKA', abbr: 'AK'},
    { name: 'AMERICAN SAMOA', abbr: 'AS'},
    { name: 'ARIZONA', abbr: 'AZ'},
    { name: 'ARKANSAS', abbr: 'AR'},
    { name: 'CALIFORNIA', abbr: 'CA'},
    { name: 'COLORADO', abbr: 'CO'},
    { name: 'CONNECTICUT', abbr: 'CT'},
    { name: 'DELAWARE', abbr: 'DE'},
    { name: 'DISTRICT OF COLUMBIA', abbr: 'DC'},
    { name: 'FEDERATED STATES OF MICRONESIA', abbr: 'FM'},
    { name: 'FLORIDA', abbr: 'FL'},
    { name: 'GEORGIA', abbr: 'GA'},
    { name: 'GUAM', abbr: 'GU'},
    { name: 'HAWAII', abbr: 'HI'},
    { name: 'IDAHO', abbr: 'ID'},
    { name: 'ILLINOIS', abbr: 'IL'},
    { name: 'INDIANA', abbr: 'IN'},
    { name: 'IOWA', abbr: 'IA'},
    { name: 'KANSAS', abbr: 'KS'},
    { name: 'KENTUCKY', abbr: 'KY'},
    { name: 'LOUISIANA', abbr: 'LA'},
    { name: 'MAINE', abbr: 'ME'},
    { name: 'MARSHALL ISLANDS', abbr: 'MH'},
    { name: 'MARYLAND', abbr: 'MD'},
    { name: 'MASSACHUSETTS', abbr: 'MA'},
    { name: 'MICHIGAN', abbr: 'MI'},
    { name: 'MINNESOTA', abbr: 'MN'},
    { name: 'MISSISSIPPI', abbr: 'MS'},
    { name: 'MISSOURI', abbr: 'MO'},
    { name: 'MONTANA', abbr: 'MT'},
    { name: 'NEBRASKA', abbr: 'NE'},
    { name: 'NEVADA', abbr: 'NV'},
    { name: 'NEW HAMPSHIRE', abbr: 'NH'},
    { name: 'NEW JERSEY', abbr: 'NJ'},
    { name: 'NEW MEXICO', abbr: 'NM'},
    { name: 'NEW YORK', abbr: 'NY'},
    { name: 'NORTH CAROLINA', abbr: 'NC'},
    { name: 'NORTH DAKOTA', abbr: 'ND'},
    { name: 'NORTHERN MARIANA ISLANDS', abbr: 'MP'},
    { name: 'OHIO', abbr: 'OH'},
    { name: 'OKLAHOMA', abbr: 'OK'},
    { name: 'OREGON', abbr: 'OR'},
    { name: 'PALAU', abbr: 'PW'},
    { name: 'PENNSYLVANIA', abbr: 'PA'},
    { name: 'PUERTO RICO', abbr: 'PR'},
    { name: 'RHODE ISLAND', abbr: 'RI'},
    { name: 'SOUTH CAROLINA', abbr: 'SC'},
    { name: 'SOUTH DAKOTA', abbr: 'SD'},
    { name: 'TENNESSEE', abbr: 'TN'},
    { name: 'TEXAS', abbr: 'TX'},
    { name: 'UTAH', abbr: 'UT'},
    { name: 'VERMONT', abbr: 'VT'},
    { name: 'VIRGIN ISLANDS', abbr: 'VI'},
    { name: 'VIRGINIA', abbr: 'VA'},
    { name: 'WASHINGTON', abbr: 'WA'},
    { name: 'WEST VIRGINIA', abbr: 'WV'},
    { name: 'WISCONSIN', abbr: 'WI'},
    { name: 'WYOMING', abbr: 'WY' }
];

// Build the table
function createTable(states) {
	var statesDiv = document.getElementById('states');
	var table = document.createElement('table');
	table.id = 'statesTable';

	states.forEach(function(val,ind,arr) {

		var tr = document.createElement('tr');

		var name = document.createElement('td');

		var abbr = document.createElement('td');

		name.textContent = val.name;
        
		abbr.textContent = val.abbr;

		tr.appendChild(name);
		tr.appendChild(abbr);
		table.appendChild(tr);
	});
	statesDiv.appendChild(table);
}


// 3b
function clearTable(e) {
	var statesTable = document.getElementById('statesTable');
	statesTable.parentElement.removeChild(statesTable);

	var statesDiv = e.target.parentElement;

	statesDiv.removeChild(e.target);

    // Reset List Button
	var listStates = document.createElement('button');
	listStates.textContent = 'List States';
	listStates.addEventListener('click', tableListener);

	statesDiv.appendChild(listStates);


}

// 3a
function tableListener(e) {
	var statesDiv = document.getElementById('states');

    // Set Clear Button
	var clearStates = document.createElement('button');
    clearStates.textContent = 'Clear States';

    // Assign event listener to 'Clear States'
	clearStates.addEventListener('click', clearTable);

	statesDiv.appendChild(clearStates);

	createTable(usStates);

	e.target.parentElement.removeChild(e.target);
}

// 2
var listStates = document.getElementById('listStates');

// Assign event listener to 'List States'
listStates.addEventListener('click', tableListener);







