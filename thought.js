var Thought = function(x, y) {
  this.x = x;
  this.y = y;
  this.focus = true;
  this.draw = function(context) {
		// do cool things with the context
    context.fillStyle = "rgba(0, 0, 200, 0.5)";
    context.fillRect(x,y,150,75);
	};
  this.onclick = function(e) {

	};
}
