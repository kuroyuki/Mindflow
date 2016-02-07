var App = function(aCanvas) {
	var app = this;
  var canvas;
  var context;

	var activeItem = null;
	var items = [];

  app.resize = function(e) {
		resizeCanvas();
		//redraw all items
		items.forEach(function(item){	item.draw(context);})
	};
  var resizeCanvas = function() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	};
  app.mouseup = function(e) {
	};
  app.mousedown = function(e) {
		//find click point
		var rect = canvas.getBoundingClientRect();
		var clickPos = {
			x: e.clientX - rect.left,
			y: e.clientY - rect.top
		};
		//check if item is clicked
		for(var i=0;i<items.length;i++){
			//if clicked position inside an item
			if((items[i].x < clickPos.x) && ((items[i].x + items[i].width) > clickPos.x)
				&&(items[i].y < clickPos.y) && ((items[i].y + items[i].height) > clickPos.y))
			{
				//make it active item
				app.setFocus(items[i]);
				//one is enough
				return;
			}
		}
  };
	app.mousemove = function(e) {
	};

  app.keypress = function(e) {
    if(e.ctrlKey){
      if(e.key == "ArrowDown" ) {
          console.log('You pressed Down + Ctrl!');
      }
      else if(e.key == "ArrowUp") {
          console.log('You pressed Up + Ctrl!');
      }
      else if(e.key == "ArrowLeft" ) {
          console.log('You pressed Left + Ctrl!');
      }
      else if(e.key == "ArrowRight") {
          console.log('You pressed Right + Ctrl!');
      }
    }
  };

	app.setFocus = function(focusedItem){
		if(activeItem != null){
			activeItem.changeFocus(false, context);
		}
		focusedItem.changeFocus(true, context);
		activeItem = focusedItem;
	};

	app.addNewItem = function(x,y){
		var thought = new Thought(x,y, new Date());
		app.setFocus(thought);
		items.push(thought);
	};
	
  // Constructor
	(function(){
		canvas = aCanvas;
		context = canvas.getContext('2d');
		resizeCanvas();

		//set background
		canvas.style.backgroundColor = 'rgba(100, 100, 100, 1)';

		//set up items
   	app.addNewItem(10,10);
		app.addNewItem(10,150);
		app.addNewItem(10,300);
  }());
}
