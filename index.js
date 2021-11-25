const exec = require('child_process').exec;
const path = require('path');

/**
 * Transmit a 433MHz signal, by using a python script.
 *
 * @async
 * @param  {string}   code     Binary code to send
 * @param  {object}   settings Settings
 * @return {Promise}
 */
function transmitCode(code, settings) {
	return new Promise((resolve, reject) => {
		settings = settings || {};
		const shortDelay = settings.shortDelay || 0.00037;
		const longDelay = settings.longDelay || 0.00101;
		const packetDelay = settings.packetDelay || 0.01102;
		const transmitPin = settings.transmitPin || 18;
		
		const command = `python ${path.resolve(__dirname, 'transmit.py')} ${code} ${transmitPin} ${shortDelay} ${longDelay} ${packetDelay}`;
		
		exec(command, function (err, stdout, stderr) {
			if (err) {
				reject(err);
			} else if (stderr !== '') {
				reject(new Error(stdout.toString()));
			} else if (stdout !== '') { // there should be no output
				reject(new Error(stdout.toString()));
			} else {
				resolve();
			}
		});
	});
}

module.exports = {
	transmitCode
};

