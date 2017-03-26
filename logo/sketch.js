var font;
var letterj, letteri, letterm1, letterm2, lettery;
var xpos, ypos, xspeed, yspeed;
var w = 300;
var h = 300;

function J() {
      var j = "J";
      this.xpos = random(w/2, w/2);
      this.ypos = random(h/2, h/2);
      if (w < 600) {
        this.xspeed = random(-0.7, 0.7);
        this.yspeed = random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = random(-2.0, 2.0);
        this.yspeed = random(-2.0, 2.0);
      }
    
    this.display = function() {
      text(j, this.xpos, this.ypos);
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
      var i = "I";
      this.xpos = random(w/2, w/2);
      this.ypos = random(h/2, h/2);
      if (w < 600) {
        this.xspeed = random(-0.7, 0.7);
        this.yspeed = random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = random(-2.0, 2.0);
        this.yspeed = random(-2.0, 2.0);
      }
    
    this.display = function() {
      text(i, this.xpos, this.ypos);
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
      var m = "M";
      this.xpos = random(w/2, w/2);
      this.ypos = random(h/2, h/2);
      if (w < 600) {
        this.xspeed = random(-0.7, 0.7);
        this.yspeed = random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = random(-2.0, 2.0);
        this.yspeed = random(-2.0, 2.0);
      }
    
    this.display = function() {
      text(m, this.xpos, this.ypos);
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
      var y = "Y";
      this.xpos = random(w/2, w/2);
      this.ypos = random(h/2, h/2);
      if (w < 600) {
        this.xspeed = random(-0.7, 0.7);
        this.yspeed = random(-0.7, 0.7);
      }
      else if (w >= 600) {
        this.xspeed = random(-2.0, 2.0);
        this.yspeed = random(-2.0, 2.0);
      }
    
    this.display = function() {
      text(y, this.xpos, this.ypos);
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

var side1 = function(side1) {

  side1.preload = function() {
    font = side1.loadFont("/portfolio/logo/assets/font.otf");
  }

  side1.setup = function() {
    var side1parent = side1.createCanvas(300,300);
    side1parent.parent("front");
    side1.textFont(font);
    side1.textSize(w/3);
    side1.fill(0);
    side1.textAlign(CENTER,CENTER);
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