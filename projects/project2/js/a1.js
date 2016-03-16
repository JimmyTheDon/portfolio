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

var e = function( e ) {

	e.setup = function() {
  		var emain = e.createCanvas(400, 560);
  		emain.parent("e");
	}

	e.draw = function() {
  		e.background(0);
  		var i = 0;
  		while(i<e.width) {
  			e.noStroke();
  			var distance = e.abs(e.mouseX-i);
  			e.fill(distance);
  			e.rect(i,0,10,e.height);
  			i=i+10;
  		}
	}	
}

var myp5 = new p5(e);

var f = function( f ) {

	f.setup = function() {
  		var fmain = f.createCanvas(400, 560);
  		fmain.parent("f");
	}

	f.draw = function() {
  		f.background(0);
  		var i = 400;
  		while(i>=0) {
  			f.noStroke();
  			var distance = f.abs(f.mouseX+i);
  			f.fill(distance);
  			f.rect(i,0,10,f.height);
  			i=i-10;
  		}
	}	
}

var myp5 = new p5(f);

var e1 = function( e1 ) {

	e1.setup = function() {
  		var eone = e1.createCanvas(320, 160);
  		eone.parent("e1");
	}

	e1.draw = function() {
  		e1.background(0);
  		var i = 400;
  		while(i>=-400) {
  			e1.noStroke();
  			var distance = e1.abs(e1.mouseX+i);
  			e1.fill(distance);
  			e1.rect(i+240,0,10,e1.height);
  			i=i-10;
  		}
	}	
}

var myp5 = new p5(e1);

var ee = function( e2 ) {

	e2.setup = function() {
  		var etwo = e2.createCanvas(80, 80);
  		etwo.parent("e2");
	}

	e2.draw = function() {
  		e2.background(0);
  		var i = 400;
  		while(i>=-400) {
  			e2.noStroke();
  			var distance = e2.abs(e2.mouseX+i);
  			e2.fill(distance);
  			e2.rect(i-240,0,10,e2.height);
  			i=i-10;
  		}
	}	
}

var myp5 = new p5(ee);

var eee = function( e3 ) {

	e3.setup = function() {
  		var ethree = e3.createCanvas(320, 160);
  		ethree.parent("e3");
	}

	e3.draw = function() {
  		e3.background(0);
  		var i = 400;
  		while(i>=-400) {
  			e3.noStroke();
  			var distance = e3.abs(e3.mouseX+i);
  			e3.fill(distance);
  			e3.rect(i+240,0,10,e3.height);
  			i=i-10;
  		}
	}	
}

var myp5 = new p5(eee);

var f1 = function( f1 ) {

	f1.setup = function() {
  		var fone = f1.createCanvas(320, 160);
  		fone.parent("f1");
	}

	f1.draw = function() {
  		f1.background(0);
  		var i = -400;
  		while(i<=400) {
  			f1.noStroke();
  			var distance = f1.abs(f1.mouseX-i);
  			f1.fill(distance);
  			f1.rect(i+400,0,10,f1.height);
  			i=i+10;
  		}
	}	
}

var myp5 = new p5(f1);

var f2 = function( f2 ) {

	f2.setup = function() {
  		var ftwo = f2.createCanvas(80, 80);
  		ftwo.parent("f2");
	}

	f2.draw = function() {
  		f2.background(0);
  		var i = -400;
  		while(i<=400) {
  			f2.noStroke();
  			var distance = f2.abs(f2.mouseX-i);
  			f2.fill(distance);
  			f2.rect(i+400,0,10,f2.height);
  			i=i+10;
  		}
	}	
}

var myp5 = new p5(f2);

var f3 = function( f3 ) {

	f3.setup = function() {
  		var fthree = f3.createCanvas(320, 240);
  		fthree.parent("f3");
	}

	f3.draw = function() {
  		f3.background(0);
  		var i = -400;
  		while(i<=400) {
  			f3.noStroke();
  			var distance = f3.abs(f3.mouseX-i);
  			f3.fill(distance);
  			f3.rect(i+400,0,10,f3.height);
  			i=i+10;
  		}
	}	
}

var myp5 = new p5(f3);

var g = function( g ) {

	var flip = true;

	g.setup = function() {
  		var gmain = g.createCanvas(400, 560);
  		gmain.parent("g");
	}

	g.draw = function() {
		if (flip==true) {
			g.background(255,0,0);
		}
		if (flip==false) {
			g.background(0,255,255);
		}		
	}
	g.mousePressed = function() {
		flip = !flip;
	}	
}

var myp5 = new p5(g);

var g4 = function( g4 ) {

	var flip = true;

	g4.setup = function() {
  		var gfour = g4.createCanvas(120, 80);
  		gfour.parent("g4");
	}

	g4.draw = function() {
		if (flip==true) {
			g4.background(255,0,0);
		}
		if (flip==false) {
			g4.background(0,255,255);
		}		
	}
	g4.mousePressed = function() {
		flip = !flip;
	}	
}

var myp5 = new p5(g4);

var g1 = function( g1 ) {

	var flip = true;

	g1.setup = function() {
  		var gone = g1.createCanvas(240, 170);
  		gone.parent("g1");
	}

	g1.draw = function() {
		if (flip==true) {
			g1.background(0,255,255);
		}
		if (flip==false) {
			g1.background(255,0,0);
		}		
	}
	g1.mousePressed = function() {
		flip = !flip;
	}	
}

var myp5 = new p5(g1);

var g2 = function( g2 ) {

	var flip = true;

	g2.setup = function() {
  		var gtwo = g2.createCanvas(320, 80);
  		gtwo.parent("g2");
	}

	g2.draw = function() {
		if (flip==true) {
			g2.background(0,255,255);
		}
		if (flip==false) {
			g2.background(255,0,0);
		}		
	}
	g2.mousePressed = function() {
		flip = !flip;
	}	
}

var myp5 = new p5(g2);

var g3 = function( g3 ) {

	var flip = true;

	g3.setup = function() {
  		var gthree = g3.createCanvas(240, 170);
  		gthree.parent("g3");
	}

	g3.draw = function() {
		if (flip==true) {
			g3.background(0,255,255);
		}
		if (flip==false) {
			g3.background(255,0,0);
		}		
	}
	g3.mousePressed = function() {
		flip = !flip;
	}	
}

var myp5 = new p5(g3);

var h = function( h ) {

	var flip = true;

	h.setup = function() {
  		var hmain = h.createCanvas(400, 560);
  		hmain.parent("h");
	}

	h.draw = function() {
		if (flip==true) {
			h.background(0,255,255);
		}
		if (flip==false) {
			h.background(255,0,0);
		}		
	}
	h.mousePressed = function() {
		flip = !flip;
	}	
}

var myp5 = new p5(h);

var h1 = function( h1 ) {

	var flip = true;

	h1.setup = function() {
  		var hone = h1.createCanvas(240, 240);
  		hone.parent("h1");
	}

	h1.draw = function() {
		if (flip==true) {
			h1.background(255,0,0);
		}
		if (flip==false) {
			h1.background(0,255,255);
		}		
	}
	h1.mousePressed = function() {
		flip = !flip;
	}	
}

var myp5 = new p5(h1);

var h2 = function( h2 ) {

	var flip = true;

	h2.setup = function() {
  		var htwo = h2.createCanvas(240, 240);
  		htwo.parent("h2");
	}

	h2.draw = function() {
		if (flip==true) {
			h2.background(255,0,0);
		}
		if (flip==false) {
			h2.background(0,255,255);
		}		
	}
	h2.mousePressed = function() {
		flip = !flip;
	}	
}

var myp5 = new p5(h2);

