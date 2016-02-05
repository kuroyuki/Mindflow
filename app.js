var App = function(aCanvas) {
	var app = this;
  var canvas;
  var context;

  app.resize = function(e) {
		resizeCanvas();
	};
  var resizeCanvas = function() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	};
  app.mouseup = function(e) {
	};
  app.mousedown = function(e) {
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

  // Constructor
	(function(){
		canvas = aCanvas;
		context = canvas.getContext('2d');
		resizeCanvas();

    var thought1 = new Thought(10,10);
    var thought2 = new Thought(10,100);

    thought1.draw(context);
    thought2.draw(context);
  }());
}
