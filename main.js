var app;

$(document).ready(function(){
  initCanvas(document);
})

function initCanvas(){
  app = new App(document.getElementById('mainCanvas'));

  window.addEventListener('resize', app.resize, false);

	document.addEventListener('mousemove', app.mousemove, false);
	document.addEventListener('mousedown', app.mousedown, false);
	document.addEventListener('mouseup', app.mouseup, false);

	document.addEventListener('keypress', app.keypress, false);
}
