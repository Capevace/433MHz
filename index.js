const exec = require('child_process').exec;
const path = require('path');

function transmitCode(code, settings, callback) {
	// If there are no settings supplied, use callback function instead
	if (!callback && typeof settings === 'function') {
		callback = settings;
		settings = {};
	}
	
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
		// If there is a callback,
		// call it
		// if theres an error
		// supply the error that occurred
		if (callback) {
			if (err) {
				callback(err);
			} else if (stderr !== '') {
				callback(stdout.toString());
			} else if (stdout !== '') { // there should be no output
				callback(stdout.toString());
			} else {
				callback(null);
			}
		}
	});

}

module.exports = transmitCode;

