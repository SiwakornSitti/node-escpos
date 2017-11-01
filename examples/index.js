'use strict';
const escpos = require('../');
const app = require('express')();
const SerialPort = require('serialport');
const device  = new escpos.Serial('COM2',{
  baudRate: 38400,
  stopBits: 1,
  parity: "none",
  dataBits: 8,
  parsers: SerialPort.parsers.Readline
});

device.device.on('data', (data)=>{
  console.log('data', data)
});

const printer = new escpos.Printer(device);

device.open(function(err){
  printer
  .align('ct')
  .text('The quick brown fox jumps over the lazy dog').cut()
  .close();
});

setInterval(()=>{
  device.device.write("\x10\x04\x04");
},1000)

app.listen(6555);