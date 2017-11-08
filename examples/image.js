'use strict';
const escpos = require('../');

// const device  = new escpos.USB();
const device  = new escpos.Serial('COM2',{
  baudRate: 38400,
  stopBits: 1,
  parity: "none",
  dataBits: 8,
})

const printer = new escpos.Printer(device);

escpos.Image.load(__dirname + '/image.png', function(image){
  device.open(function(){
    printer
    .align('ct')
    .raster(image, 'dwdh')
    .cut();
  });
});