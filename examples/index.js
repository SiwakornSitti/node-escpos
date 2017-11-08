'use strict';
const escpos = require('../');

const device  = new escpos.USB();
const printer = new escpos.Printer(device);

device.open(function(err){
  printer
  .align('ct')
  .text('The quick brown fox jumps over the lazy dog').cut()
  .cut();
});

