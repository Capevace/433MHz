# 433MHz
> A Node package to transmit data on a Raspberry Pi using a 433MHz sender.

Note: I made this for my cheap remote outlets, I don't know if this is actually useful with other devices lol.

**Be aware of command injection: the binary code you pass to `transmitCode` is passed directly into `exec` (no sanitization)!**

## Installation
```sh
npm install 433MHz
```

## Usage
```js
const { transmitCode } = require('433MHz');

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

## Changelog
### Version 2.0.0
- `transmitCode` now returns a Promise and the callback option has been removed
- `transmitCode` is no longer the exported default, use `const { transmitCode } = require('...` instead

### Version 1.1.0
- Legacy version

**Made by Lukas von Mateffy** (@Capevace)
