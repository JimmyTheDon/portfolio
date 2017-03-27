var font;
var letterj, letteri, letterm1, letterm2, lettery;
var xpos, ypos, xspeed, yspeed;
var w = 300;
var h = 300;
var j = "J";
var i = "I";
var m = "M";
var y = "Y";

var side1 = function(side1) {
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
      this.ypos = constrain(this.ypos, h/7, h-(h/5));
      this.xpos = constrain(this.xpos, w/6, w-(w/6));
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
      this.ypos = constrain(this.ypos, h/7, h-(h/5));
      this.xpos = constrain(this.xpos, w/6, w-(w/6));
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
      this.ypos = constrain(this.ypos, h/7, h-(h/5));
      this.xpos = constrain(this.xpos, w/6, w-(w/6));
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
      this.ypos = constrain(this.ypos, h/7, h-(h/5));
      this.xpos = constrain(this.xpos, w/6, w-(w/6));
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