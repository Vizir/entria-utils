'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hexToRGBObject = exports.hexToRGBObject = function hexToRGBObject(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    throw new Error('Bad hex');
  }

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  };
};
var hexToRGB = exports.hexToRGB = function hexToRGB(hex) {
  var rgb = hexToRGBObject(hex);
  return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
};

var hexToRGBA = exports.hexToRGBA = function hexToRGBA(hex) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var rgb = hexToRGBObject(hex);
  return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + alpha + ')';
};