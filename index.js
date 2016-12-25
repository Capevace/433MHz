const exec = require('child_process').exec;
const path = require('path');

function transmitCode(code, settings) {
	settings = settings || {};
	var shortDelay = settings.shortDelay || 0.00037;
	var longDelay = settings.longDelay || 0.00101;
	var packetDelay = settings.packetDelay || 0.01102;
	var transmitPin = settings.transmitPin || 18;
	
	var command = 'python'
		+ ' ' + path.resolve(__dirname, 'transmit.py')
		+ ' ' + code
		+ ' ' + transmitPin
		+ ' ' + shortDelay
		+ ' ' + longDelay
		+ ' ' + packetDelay;
	
	exec(command, function (err, stdout, stderr) {
		if (err) throw err;
	});

}

module.exports = transmitCode;

