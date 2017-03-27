var side1 = function(side1) {
var font;
var letterj, letteri, letterm1, letterm2, lettery;
var xpos, ypos, xspeed, yspeed;
var w = 300;
var h = 300;
var j = "J";
var i = "I";
var m = "M";
var y = "Y";
  function J() {
      this.xpos = side1.random(w/2, w/2);
      this.ypos = side1.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side1.random(-0.7, 0.7);
        this.yspeed = side1.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side1.random(-2.0, 2.0);
        this.yspeed = side1.random(-2.0, 2.0);
      }
    
    this.display = function() {
      side1.text(j, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side1.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side1.constrain(this.xpos, w/6, w-(w/6));
    }
  }

  function I() {
      this.xpos = side1.random(w/2, w/2);
      this.ypos = side1.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side1.random(-0.7, 0.7);
        this.yspeed = side1.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side1.random(-2.0, 2.0);
        this.yspeed = side1.random(-2.0, 2.0);
      }
    
    this.display = function() {
      side1.text(i, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side1.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side1.constrain(this.xpos, w/6, w-(w/6));
    }
  }

  function M() {
      this.xpos = side1.random(w/2, w/2);
      this.ypos = side1.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side1.random(-0.7, 0.7);
        this.yspeed = side1.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side1.random(-2.0, 2.0);
        this.yspeed = side1.random(-2.0, 2.0);
      }
    
    this.display = function() {
      side1.text(m, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side1.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side1.constrain(this.xpos, w/6, w-(w/6));
    }
  }

  function Y() {
      this.xpos = side1.random(w/2, w/2);
      this.ypos = side1.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side1.random(-0.7, 0.7);
        this.yspeed = side1.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side1.random(-2.0, 2.0);
        this.yspeed = side1.random(-2.0, 2.0);
      }
    
    this.display = function() {
      side1.text(y, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side1.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side1.constrain(this.xpos, w/6, w-(w/6));
    }
  }


  side1.preload = function() {
    font = side1.loadFont("/portfolio/logo/assets/font.otf");
  }

  side1.setup = function() {
    var side1parent = side1.createCanvas(300,300);
    side1parent.parent("front");
    side1.textFont(font);
    side1.textSize(w/3);
    side1.fill(0);
    side1.textAlign(side1.CENTER,side1.CENTER);
    letterj = new J();
    letteri = new I();
    letterm1 = new M();
    letterm2 = new M();
    lettery = new Y();
  }

  side1.draw = function() {
    side1.background(255);
    letterj.display();
    letterj.move();
    letteri.display();
    letteri.move();
    letterm1.display();
    letterm1.move();
    letterm2.display();
    letterm2.move();
    lettery.display();
    lettery.move();
    
  }
}
var myp5 = new p5(side1);


var side2 = function(side2) {
var font;
var letterj, letteri, letterm1, letterm2, lettery;
var xpos, ypos, xspeed, yspeed;
var w = 300;
var h = 300;
var j = "J";
var i = "I";
var m = "M";
var y = "Y";
  function J() {
      this.xpos = side2.random(w/2, w/2);
      this.ypos = side2.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side2.random(-0.7, 0.7);
        this.yspeed = side2.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side2.random(-2.0, 2.0);
        this.yspeed = side2.random(-2.0, 2.0);
      }
    
    this.display = function() {
      side2.text(j, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side2.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side2.constrain(this.xpos, w/6, w-(w/6));
    }
  }

  function I() {
      this.xpos = side2.random(w/2, w/2);
      this.ypos = side2.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side2.random(-0.7, 0.7);
        this.yspeed = side2.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side2.random(-2.0, 2.0);
        this.yspeed = side2.random(-2.0, 2.0);
      }
    
    this.display = function() {
      side2.text(i, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side2.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side2.constrain(this.xpos, w/6, w-(w/6));
    }
  }

  function M() {
      this.xpos = side2.random(w/2, w/2);
      this.ypos = side2.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side2.random(-0.7, 0.7);
        this.yspeed = side2.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side2.random(-2.0, 2.0);
        this.yspeed = side2.random(-2.0, 2.0);
      }
    
    this.display = function() {
      side2.text(m, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side2.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side2.constrain(this.xpos, w/6, w-(w/6));
    }
  }

  function Y() {
      this.xpos = side2.random(w/2, w/2);
      this.ypos = side2.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side2.random(-0.7, 0.7);
        this.yspeed = side2.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side2.random(-2.0, 2.0);
        this.yspeed = side2.random(-2.0, 2.0);
      }
    
    this.display = function() {
      side2.text(y, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side2.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side2.constrain(this.xpos, w/6, w-(w/6));
    }
  }


  side2.preload = function() {
    font = side2.loadFont("/portfolio/logo/assets/font.otf");
  }

  side2.setup = function() {
    var side2parent = side2.createCanvas(300,300);
    side2parent.parent("left");
    side2.textFont(font);
    side2.textSize(w/3);
    side2.fill(0);
    side2.textAlign(side2.CENTER,side2.CENTER);
    letterj = new J();
    letteri = new I();
    letterm1 = new M();
    letterm2 = new M();
    lettery = new Y();
  }

  side2.draw = function() {
    side2.background(255);
    letterj.display();
    letterj.move();
    letteri.display();
    letteri.move();
    letterm1.display();
    letterm1.move();
    letterm2.display();
    letterm2.move();
    lettery.display();
    lettery.move();
    
  }
}
var myp5 = new p5(side2);


var side3 = function(side3) {
var font;
var letterj, letteri, letterm1, letterm2, lettery;
var xpos, ypos, xspeed, yspeed;
var w = 300;
var h = 300;
var j = "J";
var i = "I";
var m = "M";
var y = "Y";
  function J() {
      this.xpos = side3.random(w/2, w/2);
      this.ypos = side3.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side3.random(-0.7, 0.7);
        this.yspeed = side3.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side3.random(-2.0, 2.0);
        this.yspeed = side3.random(-2.0, 2.0);
      }    
    this.display = function() {
      side3.text(j, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side3.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side3.constrain(this.xpos, w/6, w-(w/6));
    }
  }
  function I() {
      this.xpos = side3.random(w/2, w/2);
      this.ypos = side3.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side3.random(-0.7, 0.7);
        this.yspeed = side3.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side3.random(-2.0, 2.0);
        this.yspeed = side3.random(-2.0, 2.0);
      }   
    this.display = function() {
      side3.text(i, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side3.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side3.constrain(this.xpos, w/6, w-(w/6));
    }
  }
  function M() {
      this.xpos = side3.random(w/2, w/2);
      this.ypos = side3.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side3.random(-0.7, 0.7);
        this.yspeed = side3.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side3.random(-2.0, 2.0);
        this.yspeed = side3.random(-2.0, 2.0);
      }  
    this.display = function() {
      side3.text(m, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side3.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side3.constrain(this.xpos, w/6, w-(w/6));
    }
  }
  function Y() {
      this.xpos = side3.random(w/2, w/2);
      this.ypos = side3.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side3.random(-0.7, 0.7);
        this.yspeed = side3.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side3.random(-2.0, 2.0);
        this.yspeed = side3.random(-2.0, 2.0);
      }   
    this.display = function() {
      side3.text(y, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side3.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side3.constrain(this.xpos, w/6, w-(w/6));
    }
  }
  side3.preload = function() {
    font = side3.loadFont("/portfolio/logo/assets/font.otf");
  }
  side3.setup = function() {
    var side3parent = side3.createCanvas(300,300);
    side3parent.parent("back");
    side3.textFont(font);
    side3.textSize(w/3);
    side3.fill(0);
    side3.textAlign(side3.CENTER,side3.CENTER);
    letterj = new J();
    letteri = new I();
    letterm1 = new M();
    letterm2 = new M();
    lettery = new Y();
  }
  side3.draw = function() {
    side3.background(255);
    letterj.display();
    letterj.move();
    letteri.display();
    letteri.move();
    letterm1.display();
    letterm1.move();
    letterm2.display();
    letterm2.move();
    lettery.display();
    lettery.move();    
  }
}
var myp5 = new p5(side3);

//right
var side4 = function(side4) {
var font;
var letterj, letteri, letterm1, letterm2, lettery;
var xpos, ypos, xspeed, yspeed;
var w = 300;
var h = 300;
var j = "J";
var i = "I";
var m = "M";
var y = "Y";
  function J() {
      this.xpos = side4.random(w/2, w/2);
      this.ypos = side4.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side4.random(-0.7, 0.7);
        this.yspeed = side4.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side4.random(-2.0, 2.0);
        this.yspeed = side4.random(-2.0, 2.0);
      }    
    this.display = function() {
      side4.text(j, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side4.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side4.constrain(this.xpos, w/6, w-(w/6));
    }
  }
  function I() {
      this.xpos = side4.random(w/2, w/2);
      this.ypos = side4.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side4.random(-0.7, 0.7);
        this.yspeed = side4.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side4.random(-2.0, 2.0);
        this.yspeed = side4.random(-2.0, 2.0);
      }    
    this.display = function() {
      side4.text(i, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side4.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side4.constrain(this.xpos, w/6, w-(w/6));
    }
  }
  function M() {
      this.xpos = side4.random(w/2, w/2);
      this.ypos = side4.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side4.random(-0.7, 0.7);
        this.yspeed = side4.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side4.random(-2.0, 2.0);
        this.yspeed = side4.random(-2.0, 2.0);
      }    
    this.display = function() {
      side4.text(m, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side4.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side4.constrain(this.xpos, w/6, w-(w/6));
    }
  }
  function Y() {
      this.xpos = side4.random(w/2, w/2);
      this.ypos = side4.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side4.random(-0.7, 0.7);
        this.yspeed = side4.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side4.random(-2.0, 2.0);
        this.yspeed = side4.random(-2.0, 2.0);
      }    
    this.display = function() {
      side4.text(y, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side4.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side4.constrain(this.xpos, w/6, w-(w/6));
    }
  }
  side4.preload = function() {
    font = side4.loadFont("/portfolio/logo/assets/font.otf");
  }
  side4.setup = function() {
    var side4parent = side4.createCanvas(300,300);
    side4parent.parent("right");
    side4.textFont(font);
    side4.textSize(w/3);
    side4.fill(0);
    side4.textAlign(side4.CENTER,side4.CENTER);
    letterj = new J();
    letteri = new I();
    letterm1 = new M();
    letterm2 = new M();
    lettery = new Y();
  }
  side4.draw = function() {
    side4.background(255);
    letterj.display();
    letterj.move();
    letteri.display();
    letteri.move();
    letterm1.display();
    letterm1.move();
    letterm2.display();
    letterm2.move();
    lettery.display();
    lettery.move();    
  }
}
var myp5 = new p5(side4);

//top
var side5 = function(side5) {
var font;
var letterj, letteri, letterm1, letterm2, lettery;
var xpos, ypos, xspeed, yspeed;
var w = 300;
var h = 300;
var j = "J";
var i = "I";
var m = "M";
var y = "Y";
  function J() {
      this.xpos = side5.random(w/2, w/2);
      this.ypos = side5.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side5.random(-0.7, 0.7);
        this.yspeed = side5.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side5.random(-2.0, 2.0);
        this.yspeed = side5.random(-2.0, 2.0);
      }   
    this.display = function() {
      side5.text(j, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side5.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side5.constrain(this.xpos, w/6, w-(w/6));
    }
  }
  function I() {
      this.xpos = side5.random(w/2, w/2);
      this.ypos = side5.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side5.random(-0.7, 0.7);
        this.yspeed = side5.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side5.random(-2.0, 2.0);
        this.yspeed = side5.random(-2.0, 2.0);
      }    
    this.display = function() {
      side5.text(i, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side5.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side5.constrain(this.xpos, w/6, w-(w/6));
    }
  }
  function M() {
      this.xpos = side5.random(w/2, w/2);
      this.ypos = side5.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side5.random(-0.7, 0.7);
        this.yspeed = side5.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side5.random(-2.0, 2.0);
        this.yspeed = side5.random(-2.0, 2.0);
      }    
    this.display = function() {
      side5.text(m, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side5.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side5.constrain(this.xpos, w/6, w-(w/6));
    }
  }
  function Y() {
      this.xpos = side5.random(w/2, w/2);
      this.ypos = side5.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side5.random(-0.7, 0.7);
        this.yspeed = side5.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side5.random(-2.0, 2.0);
        this.yspeed = side5.random(-2.0, 2.0);
      }    
    this.display = function() {
      side5.text(y, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side5.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side5.constrain(this.xpos, w/6, w-(w/6));
    }
  }
  side5.preload = function() {
    font = side5.loadFont("/portfolio/logo/assets/font.otf");
  }
  side5.setup = function() {
    var side5parent = side5.createCanvas(300,300);
    side5parent.parent("top");
    side5.textFont(font);
    side5.textSize(w/3);
    side5.fill(0);
    side5.textAlign(side5.CENTER,side5.CENTER);
    letterj = new J();
    letteri = new I();
    letterm1 = new M();
    letterm2 = new M();
    lettery = new Y();
  }
  side5.draw = function() {
    side5.background(255);
    letterj.display();
    letterj.move();
    letteri.display();
    letteri.move();
    letterm1.display();
    letterm1.move();
    letterm2.display();
    letterm2.move();
    lettery.display();
    lettery.move();
  }
}
var myp5 = new p5(side5);

//bottom
var side6 = function(side6) {
var font;
var letterj, letteri, letterm1, letterm2, lettery;
var xpos, ypos, xspeed, yspeed;
var w = 300;
var h = 300;
var j = "J";
var i = "I";
var m = "M";
var y = "Y";
  function J() {
      this.xpos = side6.random(w/2, w/2);
      this.ypos = side6.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side6.random(-0.7, 0.7);
        this.yspeed = side6.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side6.random(-2.0, 2.0);
        this.yspeed = side6.random(-2.0, 2.0);
      }
    this.display = function() {
      side6.text(j, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side6.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side6.constrain(this.xpos, w/6, w-(w/6));
    }
  }
  function I() {
      this.xpos = side6.random(w/2, w/2);
      this.ypos = side6.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side6.random(-0.7, 0.7);
        this.yspeed = side6.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side6.random(-2.0, 2.0);
        this.yspeed = side6.random(-2.0, 2.0);
      }
    this.display = function() {
      side6.text(i, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side6.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side6.constrain(this.xpos, w/6, w-(w/6));
    }
  }
  function M() {
      this.xpos = side6.random(w/2, w/2);
      this.ypos = side6.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side6.random(-0.7, 0.7);
        this.yspeed = side6.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side6.random(-2.0, 2.0);
        this.yspeed = side6.random(-2.0, 2.0);
      }
    this.display = function() {
      side6.text(m, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side6.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side6.constrain(this.xpos, w/6, w-(w/6));
    }
  }
  function Y() {
      this.xpos = side6.random(w/2, w/2);
      this.ypos = side6.random(h/2, h/2);
      if (w < 600) {
        this.xspeed = side6.random(-0.7, 0.7);
        this.yspeed = side6.random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = side6.random(-2.0, 2.0);
        this.yspeed = side6.random(-2.0, 2.0);
      }
    this.display = function() {
      side6.text(y, this.xpos, this.ypos);
    }
    this.move = function() {
      this.xpos = this.xpos + this.xspeed;
    if (this.xpos  <= w/6 || this.xpos >= w-(w/6)) {
        this.xspeed = this.xspeed * -1;
      }
      this.ypos = this.ypos + this.yspeed;
    if (this.ypos <= h/7 || this.ypos >= h-(h/5)) {
        this.yspeed = this.yspeed * -1;
      }
      this.ypos = side6.constrain(this.ypos, h/7, h-(h/5));
      this.xpos = side6.constrain(this.xpos, w/6, w-(w/6));
    }
  }
  side6.preload = function() {
    font = side6.loadFont("/portfolio/logo/assets/font.otf");
  }
  side6.setup = function() {
    var side6parent = side6.createCanvas(300,300);
    side6parent.parent("bottom");
    side6.textFont(font);
    side6.textSize(w/3);
    side6.fill(0);
    side6.textAlign(side6.CENTER,side6.CENTER);
    letterj = new J();
    letteri = new I();
    letterm1 = new M();
    letterm2 = new M();
    lettery = new Y();
  }
  side6.draw = function() {
    side6.background(255);
    letterj.display();
    letterj.move();
    letteri.display();
    letteri.move();
    letterm1.display();
    letterm1.move();
    letterm2.display();
    letterm2.move();
    lettery.display();
    lettery.move();
  }
}
var myp5 = new p5(side6);

var mouse = function(mouse){
        var xoff = 255.0;
        var xincrement = 0.01;
        var r,g,b;
        mouse.setup = function() {
          var mouseparent = mouse.createCanvas(mouse.windowWidth, mouse.windowHeight);
          mouseparent.parent("body");
          mouse.noCursor();
          mouse.background(255);
        }
        mouse.draw = function() {
          r=mouse.map(mouse.mouseX,0,mouse.windowWidth,0,255);
          g=mouse.map(mouse.mouseY,0,mouse.windowHeight,0,255);
          b=127;
          mouse.noStroke();
          mouse.fill(255,75);
          mouse.rect(0,0,mouse.width,mouse.height);
          mouse.strokeWeight(5);
          mouse.stroke(r,g,b);
          var n = mouse.noise(xoff)*mouse.width;
          xoff -= xincrement;
          mouse.noFill();
          mouse.beginShape();
          mouse.vertex(mouse.mouseX,mouse.mouseY);
          mouse.vertex(mouse.mouseX,mouse.mouseY+50);
          mouse.vertex(mouse.mouseX+10,mouse.mouseY+40);
          mouse.vertex(mouse.mouseX+10,mouse.mouseY+40);
          mouse.vertex(mouse.mouseX+20,mouse.mouseY+60);
          mouse.vertex(mouse.mouseX+30,mouse.mouseY+55);
          mouse.vertex(mouse.mouseX+21.36,mouse.mouseY+35.36);
          mouse.vertex(mouse.mouseX+35.36,mouse.mouseY+35.36);
          mouse.endShape(mouse.CLOSE);
          mouse.strokeWeight(5);
          mouse.stroke(mouse.random(0,255),20);
          /*beginShape();
          for(var x=50; x<=windowWidth-50;x+=15) {
              var modx=random(0-(windowHeight/10),windowHeight/10);
              vertex(x,(windowHeight/2)+modx);
          }
          endShape();*/
        }
        mouse.windowResized = function() {
          mouse.resizeCanvas(mouse.windowWidth, mouse.windowHeight);
        }
}
var myp5 = new p5(mouse);