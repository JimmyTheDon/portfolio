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

var i = function( i ) {

	var xoff = 0.0;
	var xincrement = 0.01; 

	i.setup = function() {
  		var imain = i.createCanvas(400, 560);
  		imain.parent("i");
  		i.background(0);
	}

	i.draw = function() {
  		var n = i.noise(xoff)*i.width;
  		xoff += xincrement;
		i.stroke(i.random(0,255),i.random(0,255),i.random(0,255));
		i.noFill();
		i.ellipse(i.mouseX,i.mouseY, n, n);
	}
	i.mousePressed = function () {
		i.setup();
	}
}

var myp5 = new p5(i);

var i1 = function( i1 ) {

	var xoff = 0.0;
	var xincrement = 0.01; 

	i1.setup = function() {
  		var ione = i1.createCanvas(160, 400);
  		ione.parent("i1");
  		i1.background(0);
	}

	i1.draw = function() {
  		var n = i1.noise(xoff)*400;
  		xoff += xincrement;
		i1.fill(i1.random(0,255),i1.random(0,255),i1.random(0,255));
		i1.noStroke();
		i1.ellipse(i1.mouseX,i1.mouseY, n, n);
	}
	i1.mousePressed = function () {
		i1.setup();
	}
}

var myp5 = new p5(i1);

var i2 = function( i2 ) {

	var xoff = 0.0;
	var xincrement = 0.01; 

	i2.setup = function() {
  		var itwo = i2.createCanvas(160, 400);
  		itwo.parent("i2");
  		i2.background(0);
	}

	i2.draw = function() {
  		var n = i2.noise(xoff)*400;
  		xoff += xincrement;
		i2.fill(i2.random(0,255),i2.random(0,255),i2.random(0,255));
		i2.noStroke();
		i2.ellipse(i2.mouseX,i2.mouseY, n, n);
	}
	i2.mousePressed = function () {
		i2.setup();
	}
}

var myp5 = new p5(i2);

var j = function( j ) {

	var xoff = 0.0;
	var xincrement = 0.01; 

	j.setup = function() {
  		var jmain = j.createCanvas(400, 560);
  		jmain.parent("j");
  		j.background(255);
	}
	j.draw = function() {
  		var n = j.noise(xoff)*400;
  		xoff += xincrement;
		j.stroke(j.random(0,255),j.random(0,255),j.random(0,255));
		j.noFill();
		j.ellipse(j.mouseX,j.mouseY, n, n);
	}
	j.mousePressed = function () {
		j.setup();
	}
}

var myp5 = new p5(j);

var j1 = function( j1 ) {

	var xoff = 0.0;
	var xincrement = 0.01; 

	j1.setup = function() {
  		var jone = j1.createCanvas(320, 320);
  		jone.parent("j1");
  		j1.background(255);
	}

	j1.draw = function() {
  		var n = j1.noise(xoff)*400;
  		xoff += xincrement;
		j1.fill(j1.random(0,255),j1.random(0,255),j1.random(0,255));
		j1.noStroke();
		j1.ellipse(j1.mouseX,j1.mouseY, n, n);
	}
	j1.mousePressed = function () {
		j1.setup();
	}
}

var myp5 = new p5(j1);

var j2 = function( j2 ) {

	var xoff = 0.0;
	var xincrement = 0.01; 

	j2.setup = function() {
  		var jtwo = j2.createCanvas(240, 170);
  		jtwo.parent("j2");
  		j2.background(255);
	}

	j2.draw = function() {
  		var n = j2.noise(xoff)*400;
  		xoff += xincrement;
		j2.fill(j2.random(0,255),j2.random(0,255),j2.random(0,255));
		j2.noStroke();
		j2.ellipse(j2.mouseX,j2.mouseY, n, n);
	}
	j2.mousePressed = function () {
		j2.setup();
	}
}

var myp5 = new p5(j2);

var k = function( k ) {

	k.setup = function() {
  		var kmain = k.createCanvas(400, 560);
  		kmain.parent("k");
  		k.background(255);
	}

	k.draw = function() {
		k.rectMode(k.CENTER);
		k.fill(0,10);
		k.rect(k.width/2,k.height/2,k.width,k.height);
		var mod1 = k.random(0,20);
		var mod2 = k.random(100,200);
		k.noStroke();
		k.fill(k.random(0,255),k.random(0,255),k.random(0,255));
  		k.rect(k.mouseX+mod1,k.mouseY+mod1,mod2,mod2);
  		k.fill(k.random(0,255),k.random(0,255),k.random(0,255));
  		k.rect(k.mouseX,k.mouseY+mod1,mod2,mod2);
  		k.fill(k.random(0,255),k.random(0,255),k.random(0,255));
  		k.rect(k.mouseX+mod1,k.mouseY,mod2,mod2);
  		k.fill(k.random(0,255),k.random(0,255),k.random(0,255));
  		k.rect(k.mouseX-mod1,k.mouseY-mod1,mod2,mod2);
  		k.fill(k.random(0,255),k.random(0,255),k.random(0,255));
  		k.rect(k.mouseX-mod1,k.mouseY,mod2,mod2);
  		k.fill(k.random(0,255),k.random(0,255),k.random(0,255));
  		k.rect(k.mouseX,k.mouseY-mod1,mod2,mod2);
  		k.fill(k.random(0,255),k.random(0,255),k.random(0,255));
  		k.rect(k.mouseX+mod1,k.mouseY-mod1,mod2,mod2);
  		k.fill(k.random(0,255),k.random(0,255),k.random(0,255));
  		k.rect(k.mouseX-mod1,k.mouseY+mod1,mod2,mod2);
  		k.fill(k.random(0,255),k.random(0,255),k.random(0,255));
	}
	k.mousePressed = function () {
		k.setup();
	}
}

var myp5 = new p5(k);

var l = function( l ) {

	l.setup = function() {
  		var lmain = l.createCanvas(400, 560);
  		lmain.parent("l");
  		l.background(255);
	}

	l.draw = function() {
		l.noStroke();
		l.rectMode(l.CENTER);
		l.fill(255,10);
		l.rect(l.width/2,l.height/2,l.width,l.height);
		var mod1 = l.random(0,20);
		var mod2 = l.random(100,200);
		l.fill(l.random(0,255),l.random(0,255),l.random(0,255));
  		l.ellipse(l.mouseX+mod1,l.mouseY+mod1,mod2,mod2);
  		l.fill(l.random(0,255),l.random(0,255),l.random(0,255));
  		l.ellipse(l.mouseX,l.mouseY+mod1,mod2,mod2);
  		l.fill(l.random(0,255),l.random(0,255),l.random(0,255));
  		l.ellipse(l.mouseX+mod1,l.mouseY,mod2,mod2);
  		l.fill(l.random(0,255),l.random(0,255),l.random(0,255));
  		l.ellipse(l.mouseX-mod1,l.mouseY-mod1,mod2,mod2);
  		l.fill(l.random(0,255),l.random(0,255),l.random(0,255));
  		l.ellipse(l.mouseX-mod1,l.mouseY,mod2,mod2);
  		l.fill(l.random(0,255),l.random(0,255),l.random(0,255));
  		l.ellipse(l.mouseX,l.mouseY-mod1,mod2,mod2);
  		l.fill(l.random(0,255),l.random(0,255),l.random(0,255));
  		l.ellipse(l.mouseX+mod1,l.mouseY-mod1,mod2,mod2);
  		l.fill(l.random(0,255),l.random(0,255),l.random(0,255));
  		l.ellipse(l.mouseX-mod1,l.mouseY+mod1,mod2,mod2);
  		l.fill(l.random(0,255),l.random(0,255),l.random(0,255));
	}
	l.mousePressed = function () {
		l.setup();
	}
}

var myp5 = new p5(l);

var m = function( m ) {

	m.setup = function() {
  		var mmain = m.createCanvas(400, 560);
  		mmain.parent("m");
	}

	m.draw = function() {
  		m.background(0);
  		var i = 0;
  		while(i<m.height) {
  			m.noStroke();
  			var distance = m.abs(m.mouseY-i);
  			m.fill(m.random(0,255),distance,m.random(0,255),distance);
  			m.rect(0,i,m.width,10);
  			i=i+10;
  		}
	}	
}

var myp5 = new p5(m);

var n1 = function( n1 ) {

	n1.setup = function() {
  		var none = n1.createCanvas(200, 440);
  		none.parent("n1");
	}

	n1.draw = function() {
  		n1.background(255);
  		var i = 0;
  		while(i<n1.height) {
  			n1.noStroke();
  			var distance = n1.abs(n1.mouseY-i);
  			n1.fill(distance,n1.random(0,255),n1.random(0,255),distance);
  			n1.rect(0,i,n1.width,10);
  			i=i+10;
  		}
	}	
}

var myp5 = new p5(n1);

var n2 = function( n2 ) {

	n2.setup = function() {
  		var ntwo = n2.createCanvas(200, 440);
  		ntwo.parent("n2");
	}

	n2.draw = function() {
  		n2.background(255);
  		var i = 0;
  		while(i<n2.height) {
  			n2.noStroke();
  			var distance = n2.abs(n2.mouseY-i);
  			n2.fill(distance,n2.random(0,255),n2.random(0,255),distance);
  			n2.rect(0,i,n2.width,10);
  			i=i+10;
  		}
	}	
}

var myp5 = new p5(n2);

var o = function(o) {

	o.setup = function() {
		var oone = o.createCanvas(240,420)
		oone.parent("o1")
		o.background(0);
	}
	o.draw = function() {
		o.noStroke();
		var color = o.map(o.mouseX,0,o.width,0,255);
		o.fill(color);
		o.ellipse(o.mouseX,o.mouseY,o.mouseX,o.mouseX);
	}
}

var myp5 = new p5(o);

var o1 = function(o1) {

	o1.setup = function() {
		var omain = o1.createCanvas(400,560)
		omain.parent("o")
		o1.background(255);
	}
	o1.draw = function() {
		o1.noStroke();
		var color = o1.map(o1.mouseY,0,o1.height,0,255);
		o1.fill(color);
		o1.ellipse(o1.mouseX,o1.mouseY,o1.mouseY,o1.mouseY);
	}
}

var myp5 = new p5(o1);

var p = function(p) {

	p.setup = function() {
		var pmain = p.createCanvas(400,560)
		pmain.parent("p")
		p.background(255);
	}
	p.draw = function() {
		p.noStroke();
		var color = p.map(p.mouseY,0,p.height,0,255);
		p.fill(color);
		p.ellipse(p.mouseX,p.mouseY,p.mouseY,p.mouseY);
	}
}

var myp5 = new p5(p);

var p3 = function(p3) {

	p3.setup = function() {
		var pthree = p3.createCanvas(400,320)
		pthree.parent("p3")
		p3.background(255);
	}
	p3.draw = function() {
		p3.noStroke();
		var color = p3.map(p3.mouseY,0,p3.height,0,146);
		p3.fill(color);
		p3.ellipse(p3.mouseX,p3.mouseY,p3.mouseY,p3.mouseY);
	}
}

var myp5 = new p5(p3);

var p1 = function(p1) {

	p1.setup = function() {
		var pone = p1.createCanvas(240,160)
		pone.parent("p1")
		p1.background(0);
	}
	p1.draw = function() {
		p1.noStroke();
		var color = p1.map(p1.mouseX,0,p1.width,0,255);
		p1.fill(color);
		p1.ellipse(p1.mouseX,p1.mouseY,p1.mouseX,p1.mouseX);
	}
}

var myp5 = new p5(p1);

var p2 = function(p2) {

	p2.setup = function() {
		var ptwo = p2.createCanvas(320, 400)
		ptwo.parent("p2")
		p2.background(0);
	}
	p2.draw = function() {
		p2.noStroke();
		var color = p2.map(p2.mouseX,0,p2.width,0,255);
		p2.fill(color);
		p2.ellipse(p2.mouseX,p2.mouseY,p2.mouseX,p2.mouseX);
	}
}

var myp5 = new p5(p2);

var q = function(q) {

	var r = 0;
	var g = 0;
	var b = 0;

	q.setup = function() {
		var q1 = q.createCanvas(240, 420)
		q1.parent("q1");
	}
	q.draw = function() {
		q.background(r,g,b);
	}
	q.mousePressed = function() {
		r = q.random(0,255);
		g = q.random(0,255);
		b = q.random(0,255);
	}
}

var myp5 = new p5(q);

var rr = function(rr) {

	var r = 0;
	var g = 0;
	var b = 0;

	rr.setup = function() {
		var rmain = rr.createCanvas(400, 560)
		rmain.parent("r");
	}
	rr.draw = function() {
		rr.background(r,g,b);
	}
	rr.mousePressed = function() {
		r = rr.random(0,255);
		g = rr.random(0,255);
		b = rr.random(0,255);
	}
}
var myp5 = new p5(rr);

var s = function(s) {

	var r = 0;
	var g = 0;
	var b = 0;

	s.setup = function() {
		var smain = s.createCanvas(400, 560)
		smain.parent("s");
	}
	s.draw = function() {
		s.fill(r,g,b);
		s.noStroke();
		s.ellipse(s.mouseX,s.mouseY,75,75);
	}
	s.mousePressed = function() {
		r = s.random(0,255);
		g = s.random(0,255);
		b = s.random(0,255);
	}
}
var myp5 = new p5(s);

var s3 = function(s3) {

	var r = 0;
	var g = 0;
	var b = 0;

	s3.setup = function() {
		var smain = s3.createCanvas(200, 320)
		smain.parent("s3");
	}
	s3.draw = function() {
		s3.fill(r,g,b);
		s3.noStroke();
		s3.ellipse(s3.mouseX,s3.mouseY,100,100);
	}
	s3.mousePressed = function() {
		r = s3.random(0,255);
		g = s3.random(0,255);
		b = s3.random(0,255);
	}
}
var myp5 = new p5(s3);

var s4 = function(s4) {

	var r = 0;
	var g = 0;
	var b = 0;

	s4.setup = function() {
		var smain = s4.createCanvas(200, 320)
		smain.parent("s4");
	}
	s4.draw = function() {
		s4.fill(r,g,b);
		s4.noStroke();
		s4.ellipse(s4.mouseX,s4.mouseY,100,100);
	}
	s4.mousePressed = function() {
		r = s4.random(0,255);
		g = s4.random(0,255);
		b = s4.random(0,255);
	}
}
var myp5 = new p5(s4);

var tl = function(tl) {

	var r = 0;
	var g = 0;
	var b = 0;

	tl.setup = function() {
		var smain = tl.createCanvas(200, 560)
		smain.parent("tl");
	}
	tl.draw = function() {
		tl.fill(r,g,b);
		tl.noStroke();
		tl.ellipse(tl.mouseX,tl.mouseY,100,100);
	}
	tl.mousePressed = function() {
		r = tl.random(0,255);
		g = tl.random(0,255);
		b = tl.random(0,255);
	}
}
var myp5 = new p5(tl);

var tr = function(tr) {

	var r = 0;
	var g = 0;
	var b = 0;

	tr.setup = function() {
		var smain = tr.createCanvas(200, 560)
		smain.parent("tr");
	}
	tr.draw = function() {
		tr.fill(r,g,b);
		tr.noStroke();
		tr.ellipse(tr.mouseX,tr.mouseY,100,100);
	}
	tr.mousePressed = function() {
		r = tr.random(0,255);
		g = tr.random(0,255);
		b = tr.random(0,255);
	}
}
var myp5 = new p5(tr);

var u = function( u ) {

	u.setup = function() {
  		var umain = u.createCanvas(400, 560);
  		umain.parent("u");
	}

	u.draw = function() {
  		u.background(0);
  		var i = 0;
  		while(i<u.height) {
  			u.noStroke();
  			var distance = u.abs(u.mouseY-i);
  			u.fill(u.random(0,255),distance,u.random(0,255),distance);
  			u.rect(0,i,u.width,10);
  			i=i+10;
  		}
	}	
}
var myp5 = new p5(u);

var uu = function( uu ) {

	uu.setup = function() {
  		var uumain = uu.createCanvas(240, 490);
  		uumain.parent("u1");
	}

	uu.draw = function() {
  		uu.background(0);
  		var i = 0;
  		while(i<uu.width) {
  			uu.noStroke();
  			var distance = uu.abs(uu.mouseX-i);
  			uu.fill(distance,uu.random(0,255),uu.random(0,255),distance);
  			uu.rect(i,0,10,uu.height);
  			i=i+10;
  		}
	}	
}
var myp5 = new p5(uu);

var v = function( v ) {

	v.setup = function() {
  		var vmain = v.createCanvas(400, 560);
  		vmain.parent("v");
	}

	v.draw = function() {
  		v.background(255);
  		var i = 0;
  		while(i<v.width) {
  			v.noStroke();
  			var distance = v.abs(v.mouseX-i);
  			v.fill(distance,v.random(0,255),v.random(0,255),distance);
  			v.rect(i,0,10,v.height);
  			i=i+10;
  		}
	}	
}
var myp5 = new p5(v);

var v1 = function( v1 ) {

	v1.setup = function() {
  		var vmain = v1.createCanvas(240, 480);
  		vmain.parent("v1");
	}

	v1.draw = function() {
  		v1.background(255);
  		var i = 0;
  		while(i<v1.height) {
  			v1.noStroke();
  			var distance = v1.abs(v1.mouseY-i);
  			v1.fill(v1.random(0,255),distance,v1.random(0,255),distance);
  			v1.rect(0,i,v1.width,10);
  			i=i+10;
  		}
	}	
}
var myp5 = new p5(v1);

var w = function( w ) {

	w.setup = function() {
  		var wmain = w.createCanvas(400, 560);
  		wmain.parent("w");
	}

	w.draw = function() {
  		w.background(255);
  		for (i=0; i<=w.width; i=i+10) {
  			var color = w.map(i,0,w.width,0,255);
  			w.stroke(w.random(0,255),w.random(0,255),w.random(0,255),color);
  			w.line(w.mouseX+i,0,w.mouseX+i,w.height);
  			w.line(w.mouseX-i,0,w.mouseX-i,w.height);
  		}
	}	
}
var myp5 = new p5(w);

var x = function( x ) {

	x.setup = function() {
  		var xmain = x.createCanvas(400, 560);
  		xmain.parent("x");
	}

	x.draw = function() {
  		x.background(255);
  		for (i=0; i<=x.height; i=i+10) {
  			var color = x.map(i,0,x.height,0,255);
  			x.stroke(x.random(0,255),x.random(0,255),x.random(0,255),color);
  			x.line(0,x.mouseY+i,x.width,x.mouseY+i);
  			x.line(0,x.mouseY-i,x.width,x.mouseY-i);
  		}
  	
	}	
}
var myp5 = new p5(x);

var y = function( y ) {

	var xoff = 0.0;
	var xincrement = 0.01; 

	y.setup = function() {
  		var ymain = y.createCanvas(400, 560);
  		ymain.parent("y");
  		y.background(0);
	}

	y.draw = function() {
		y.noStroke();
		y.fill(0,10);
		y.rect(0,0,y.width,y.height)
		var n = y.noise(xoff)*y.width;
  		xoff += xincrement;
		y.stroke(y.random(0,255),y.random(0,255),y.random(0,255));
		y.noFill()
		y.ellipse(y.mouseX,y.mouseY, n, n);
  	
	}	
}
var myp5 = new p5(y);

var z = function( z ) {

	var xoff = 0.0;
	var xincrement = 0.01; 

	z.setup = function() {
  		var zmain = z.createCanvas(400, 560);
  		zmain.parent("z");
  		z.background(0);
	}

	z.draw = function() {
		z.noStroke();
		z.fill(0,10);
		z.rect(0,0,z.width,z.height);
		var n = z.noise(xoff)*z.width;
  		xoff += xincrement;
		z.stroke(z.random(0,255),z.random(0,255),z.random(0,255));
		z.noFill();
		z.ellipse(z.mouseX,z.mouseY, n, n);
	}	
}
var myp5 = new p5(z);





