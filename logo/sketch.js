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