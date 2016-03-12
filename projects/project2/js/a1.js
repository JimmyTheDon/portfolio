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
  		a.ellipse(a.mouseX, a.mouseY, 100, 100);
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
  		var c1 = c.createCanvas(400, 560);
  		c1.parent("c");
	}

	c.draw = function() {
		var alpha = c.mouseX;
		var alpha1 = c.mouseY;
		c.background(alpha1, alpha, 127);
  		
	}	
}

var myp5 = new p5(c);

var d = function( d ) {

	d.setup = function() {
  		var d1 = d.createCanvas(240, 400);
  		d1.parent("d1");
	}

	d.draw = function() {
		var alpha = d.mouseX;
		var alpha1 = d.mouseY;
		d.background(alpha, alpha1, 127);
  		
	}	
}

var myp5 = new p5(d);

var cc = function( cc ) {

	cc.setup = function() {
  		var c1 = cc.createCanvas(240, 420);
  		c1.parent("c1");
	}

	cc.draw = function() {
		var alpha = cc.mouseX;
		var alpha1 = cc.mouseY;
		cc.background(alpha, 127, alpha1);
  		
	}	
}

var myp5 = new p5(cc);

var cc = function( cc ) {

	cc.setup = function() {
  		var c2 = cc.createCanvas(80, 80);
  		c2.parent("c2");
	}

	cc.draw = function() {
		var alpha = cc.mouseX + 240;
		var alpha1 = cc.mouseY + 170;
		cc.background(alpha, 127, alpha1);
  		
	}	
}

var myp5 = new p5(cc);

var dd = function( dd ) {

	dd.setup = function() {
  		var d2 = dd.createCanvas(400, 560);
  		d2.parent("d");
	}

	dd.draw = function() {
		var alpha = dd.mouseX;
		var alpha1 = dd.mouseY;
		dd.background(alpha1,127, alpha);
  		
	}	
}

var myp5 = new p5(dd);