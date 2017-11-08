'use strict';
const escpos = require('../');

const device  = new escpos.USB();
const printer = new escpos.Printer(device);

escpos.Image.load(__dirname + '/image.png', function(image){

  device.open(function(){
    printer
    .align('ct')
    .raster(image, 'dwdh')
    .cut();
  });
});