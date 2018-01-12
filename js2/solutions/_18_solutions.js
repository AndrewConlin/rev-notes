var keys = [];

addEventListener('load', function(e){
	document.login.email.focus();
});

addEventListener('keydown',function(e){
	keys[e.keyCode] = true;
	var key = String.fromCharCode(e.keyCode);
	var log = document.getElementById('log');
	if (e.keyCode < 91 && e.keyCode > 65 && keys[16]) {
		logValueToBrowser(key, log);
	} else if (e.keyCode < 91 && e.keyCode > 47 && !keys[16]) {
		logValueToBrowser(key.toLowerCase(), log);
	} else if (e.keyCode < 58 && e.keyCode > 47 && keys[16]) {
		logSpecialCharacters(e.keyCode, log);
	} else if (e.keyCode === 190) {
		logValueToBrowser(".", log);
	} else if (e.keyCode === 32) {
		log.textContent = log.textContent + " ";
	} else if (e.keyCode === 9) {
		logValueToBrowser("|", log);
	}
});

addEventListener('keyup', function(e){
	keys[e.keyCode] = false;
});

var logValueToBrowser = function(value, element){
	element.textContent = element.textContent + value;
};

var logSpecialCharacters = function(code, element) {
	switch (code) {
			case 48:
				logValueToBrowser(")", element);
				break;
			case 49:
				logValueToBrowser("!", element);
				break;
			case 50:
				logValueToBrowser("@", element);
				break;
			case 51:
				logValueToBrowser("#", element);
				break;
			case 52:
				logValueToBrowser("$", element);
				break;
			case 53:
				logValueToBrowser("%", element);
				break;
			case 54:
				logValueToBrowser("^", element);
				break;
			case 55:
				logValueToBrowser("&", element);
				break;
			case 56:
				logValueToBrowser("*", element);
				break;
			case 57:
				logValueToBrowser("(", element);
				break;
			default:
				logValueToBrowser("", element);
		}
};