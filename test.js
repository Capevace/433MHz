const transmitCode = require('./index');

console.log('Turning on, waiting...');
transmitCode('1111111111111111111010101', err => {
	console.log(err);
	console.log('Turned on... waiting...');
	
	setTimeout(() => {
		console.log('Turning off...');
		transmitCode('1111111111111111111010111', err => {
			console.log(err);
			console.log('Done!');
		});
	}, 2000);
});
