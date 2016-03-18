// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

var a = function( a ) {

	a.setup = function() {
  		var a1 = a.createCanvas(400, 560);
  		a1.parent("1");
  		a.noStroke(); 
  		a.fill(127);
	}

	a.draw = function() {
  		a.ellipse(a.mouseX, a.mouseY, 100, 100);
	}
	a.mousePressed = function() {
		a.setup();
	}
}

var myp5 = new p5(a);