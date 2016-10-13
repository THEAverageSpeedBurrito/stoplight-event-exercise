'use strict';
/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
var stopLight = document.getElementById('stopLight');
var slowLight = document.getElementById('slowLight');
var goLight = document.getElementById('goLight');

function reset () {
  var color = "background-color: #111";
  stopLight.style.cssText = color;
  slowLight.style.cssText = color;
  goLight.style.cssText = color;
}

var stopButton = document.getElementById('stopButton');
var slowButton = document.getElementById('slowButton');
var goButton = document.getElementById('goButton');

stopButton.addEventListener("click", function() {
  reset();
  stopLight.style.cssText = "background-color: red";
});

slowButton.addEventListener("click", function() {
  reset();
  slowLight.style.cssText = "background-color: yellow";
});

goButton.addEventListener("click", function(){
  reset();
  goLight.style.cssText = "background-color: green";
});
