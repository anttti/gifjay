var Promise = require('bluebird');
var Gif = require('./gif');

var preloadImage = function(src, gifDir) {
  return new Gif(gifDir + src + '.gif');
}

var preloadImages = function(gifNames, gifDir) {
  return Promise.all(gifNames.map(function(src) {
    return preloadImage(src, gifDir);
  }));
}

module.exports = {
  preloadImages: preloadImages
}