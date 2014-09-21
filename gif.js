var Promise = require('bluebird');

var Gif = function(src) {
  return new Promise(function(resolve, reject) {
    this.image = new Image();
    this.image.onload = function() {
      resolve(this);
    }.bind(this);
    this.image.onerror = function(e) {
      reject(e);
    };
    this.image.src = src;
    this.image.classList.add('gif');
  }.bind(this));
};

Gif.prototype.show = function() {
  this.image.classList.add('gif--current');
};

Gif.prototype.hide = function() {
  this.image.classList.remove('gif--current');
};

Gif.prototype.render = function(parentEl) {
  parentEl.appendChild(this.image);
};

module.exports = Gif;