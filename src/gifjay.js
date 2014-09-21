var Preloader = require('./preloader');
var Settings = require('../settings.json');

var hideLoadingImage = function(gifs) {
  var loadingIndicator = document.getElementById('loading-indicator');
  loadingIndicator.parentNode.removeChild(loadingIndicator);
  return gifs;
}

var appendGifsToDom = function(gifs) {
  var gifArea = document.getElementById('gif-area');
  gifs.forEach(function(gif) {
    gif.render(gifArea);
  });
  return gifs;
}

var showNext = function(gifs, currentlyShowing) {
  if (currentlyShowing === gifs.length) {
    currentlyShowing = 0;
  }

  gifs.forEach(function(gif) { gif.hide(); });
  gifs[currentlyShowing].show();
  return ++currentlyShowing;
}

var setupListenersAndShowFirst = function(gifs) {
  var currentlyShowing = showNext(gifs, 0);
  document.addEventListener('keypress', function(e) {
    currentlyShowing = showNext(gifs, currentlyShowing);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  Preloader.preloadImages(Settings.gifs, Settings.gifDir)
    .then(hideLoadingImage)
    .then(appendGifsToDom)
    .then(setupListenersAndShowFirst)
    .catch(function(e) {
      console.log("Error loading GIFs!", e);
    });
});
