var ipsoChar = require('../index');

var ipsoObjs = ['dIn', 'dOut', 'aIn', 'aOut', 'generic', 'illuminance', 'presence', 'temperature', 
				'humidity', 'pwrMea', 'actuation', 'setPoint', 'loadCtrl', 'lightCtrl', 'pwrCtrl', 
				'accelerometer', 'magnetometer', 'barometer'];

ipsoObjs.forEach(function(name) {
	// console.log(ipsoChar.getUuid(name));
	console.log(ipsoChar.getParams(52224));
});