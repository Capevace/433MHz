# 433MHz
This is a npm package, used for transmitting data via 433 MHz transmitters on a raspberry pi.

## Usage
```js
const transmitCode = require('433MHz');

// Input the code that you want to be transmitted
transmitCode('1111111111111111111010111');

// You have multiple options to customize the transmission
transmitCode('1111111111111111111010111', {
  transmitPin: 18,
  shortDelay: 0.001,
  longDelay: 0.005,
  packetDelay: 0.05,
});
```

### Options
#### transmitPin
This is the pin, the data pin of the transmitter is connected to on the GPIO.
**Default:** 18

#### shortDelay
The short delay between pin output state changes.
**Default:** 0.00037

#### longDelay
The longer delay between pin output state changes.
**Default:** 0.00101

#### packetDelay
The delay between attempts (packets) of code data transmitted.
**Default:** 0.01102

**Made by Lukas von Mateffy** (@Capevace)
