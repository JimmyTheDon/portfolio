// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

var a = function( a ) {

	a.setup = function() {
  		var a1 = a.createCanvas(400, 560);
  		a1.parent("a");
  		a.noStroke(); 
  		a.fill(0);
	}

	a.draw = function() {
  		a.ellipse(a.mouseX, a.mouseY, 50, 50);
	}
	a.mousePressed = function() {
		a.setup();
	}
}

var myp5 = new p5(a);

var b = function( b ) {

	b.setup = function() {
  		var b1 = b.createCanvas(240, 160);
  		b1.parent("b1");
  		b.noStroke(); 
  		b.fill(255);
	}

	b.draw = function() {
  		b.ellipse(b.mouseX, b.mouseY, 50, 50);
	}
	b.mousePressed = function() {
		b.setup();
	}
}

var myp5 = new p5(b);

var b2 = function( b2 ) {

	b2.setup = function() {
  		var b1 = b2.createCanvas(240, 160);
  		b1.parent("b2");
  		b2.noStroke(); 
  		b2.fill(255);
	}

	b2.draw = function() {
  		b2.ellipse(b2.mouseX, b2.mouseY, 50, 50);
	}
	b2.mousePressed = function() {
		b2.setup();
	}
}

var myp5 = new p5(b2);

var c = function( c ) {

	c.setup = function() {
  		var c1 = c.createCanvas(240, 420);
  		c1.parent("c1");
  		c.noStroke(); 
  		c.fill(0);
	}

	c.draw = function() {
  		c.ellipse(c.mouseX, c.mouseY, 50, 50);
	}
	c.mousePressed = function() {
		c.setup();
	}
}

var myp5 = new p5(c);

var c = function( c ) {

	c.setup = function() {
  		var c2 = c.createCanvas(80, 80);
  		c2.parent("c2");
  		c.noStroke(); 
  		c.fill(0);
	}

	c.draw = function() {
  		c.ellipse(c.mouseX, c.mouseY, 50, 50);
	}
	c.mousePressed = function() {
		c.setup();
	}
}

var myp5 = new p5(c);

var d = function( d ) {

	d.setup = function() {
  		var d1 = d.createCanvas(240, 400, d.webgl);
  		d1.parent("d1");
	}

	d.draw = function() {
		var alpha = d.mouseX;
		var alpha1 = d.mouseY;
		d.background(alpha, alpha1, 127);
  		
	}	
}

var myp5 = new p5(d);