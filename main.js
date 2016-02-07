var app;

$(document).ready(function(){
  initApp();
})

function initApp(){
  addNewItem(10,100);
  addNewItem(20,140);
  addNewItem(340,180);

}
function addNewItem(x, y){
  var id = Date.now();
  var newDiv= $('<div/>', { id: id, class: 'thought'});
  $(newDiv).css({left : x, top : y});
  var newButton =  $('<button/>').text(id);
  $(newDiv).append(newButton);
  $("#workspace").append(newDiv);
}
/*
function initCanvas(){
  app = new App(document.getElementById('mainCanvas'));

  window.addEventListener('resize', app.resize, false);

	document.addEventListener('mousemove', app.mousemove, false);
	document.addEventListener('mousedown', app.mousedown, false);
	document.addEventListener('mouseup', app.mouseup, false);

	document.addEventListener('keypress', app.keypress, false);
}
*/
