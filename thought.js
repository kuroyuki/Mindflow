var Thought = function(x, y, id) {
  this.x = x;
  this.y = y;
  this.width = 250;
  this.height = 100;
  this.focus = false;
  this.id = id;

  this.div;

  //Drawing function
  this.draw = function(context) {
    //Draw main shape
    if(this.focus == true){
      context.fillStyle = "rgba(0, 200, 255, 1)";
    }
    else{
      context.fillStyle = "rgba(0, 150, 150, 1)";
    }
    context.fillRect(x,y, this.width, this.height);
    context.clearRect(x+5, y+5, 240, 90);

    //Create id as Date
    context.font = "10px sans serif";
    var idString =  this.id.getDate()+"/"+this.id.getMonth()+"/"+this.id.getFullYear()
      +" "+this.id.getHours()+":"+this.id.getMinutes()+":"+this.id.getSeconds()+"."+this.id.getMilliseconds();
    context.fillText(idString, x+10, y+15);

	};
  this.onclick = function(e) {

	};
  this.changeFocus = function(newFocus, context){
    //save new focus
    this.focus = newFocus;
    //redraw content
    this.draw(context);
  };
  // Constructor
	(function(){
    var p = $( "p" );
    var idString =  id.getDate()+"/"+id.getMonth()+"/"+id.getFullYear()
      +" "+id.getHours()+":"+id.getMinutes()+":"+id.getSeconds()+"."+id.getMilliseconds();
    $(p)
    .text(idString)
    .css("position", "absolute")
    .offset({ top: x, left: y });
    $(".mainContainer").append(p);
  }());
}
