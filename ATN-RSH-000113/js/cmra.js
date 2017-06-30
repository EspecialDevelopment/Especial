'use strict';
var video = document.getElementById('video'),
  canvas = document.getElementById('camera'),
  context = canvas.getContext('2d');

navigator.getUserMedia =
  navigator.getUserMedia || navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia || navigator.oGetUserMedia ||
  navigator.msGetUserMedia;

if (navigator.getUserMedia) {
  navigator.getUserMedia({video: true}, seeCam, camNotAllowedError);
}

function seeCam(stream) {
  video.src = window.URL.createObjectURL(stream);
  video.play();
}

function camNotAllowedError(e) {
  console.log(e);
}

function takePicture() {
  canvas.width = video.clientWidth;
  canvas.height = video.clientHeight;
  context.drawImage(video, 0, 0);
}
