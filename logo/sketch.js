
var font;
var letterj, letteri, letterm1, letterm2, lettery;
var xpos, ypos, xspeed, yspeed;

function preload() {
  font = loadFont("/portfolio/logo/assets/font.otf");
}

function setup() {
  createCanvas(300,300);
  textFont(font);
  textSize(width/3);
  fill(0);
  textAlign(CENTER,CENTER);
  letterj = new J();
  letteri = new I();
  letterm1 = new M();
  letterm2 = new M();
  lettery = new Y();
  
}

function draw() {
  background(255);
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

function J() {
    var j = "J";
    this.xpos = random(width/2, width/2);
    this.ypos = random(height/2, height/2);
    if (width < 600) {
      this.xspeed = random(-0.7, 0.7);
      this.yspeed = random(-0.7, 0.7);
    }
    else if (width >= 600) {
      this.xspeed = random(-2.0, 2.0);
      this.yspeed = random(-2.0, 2.0);
    }
  
  this.display = function() {
    text(j, this.xpos, this.ypos);
  }
  this.move = function() {
    this.xpos = this.xpos + this.xspeed;
  if (this.xpos  <= width/6 || this.xpos >= width-(width/6)) {
      this.xspeed = this.xspeed * -1;
    }
    this.ypos = this.ypos + this.yspeed;
  if (this.ypos <= height/7 || this.ypos >= height-(height/5)) {
      this.yspeed = this.yspeed * -1;
    }
    this.ypos = constrain(this.ypos, height/7, height-(height/5));
    this.xpos = constrain(this.xpos, width/6, width-(width/6));
  }
}

function I() {
    var i = "I";
    this.xpos = random(width/2, width/2);
    this.ypos = random(height/2, height/2);
    if (width < 600) {
      this.xspeed = random(-0.7, 0.7);
      this.yspeed = random(-0.7, 0.7);
    }
    else if (width >= 600) {
      this.xspeed = random(-2.0, 2.0);
      this.yspeed = random(-2.0, 2.0);
    }
  
  this.display = function() {
    text(i, this.xpos, this.ypos);
  }
  this.move = function() {
    this.xpos = this.xpos + this.xspeed;
  if (this.xpos  <= width/6 || this.xpos >= width-(width/6)) {
      this.xspeed = this.xspeed * -1;
    }
    this.ypos = this.ypos + this.yspeed;
  if (this.ypos <= height/7 || this.ypos >= height-(height/5)) {
      this.yspeed = this.yspeed * -1;
    }
    this.ypos = constrain(this.ypos, height/7, height-(height/5));
    this.xpos = constrain(this.xpos, width/6, width-(width/6));
  }
}

function M() {
    var m = "M";
    this.xpos = random(width/2, width/2);
    this.ypos = random(height/2, height/2);
    if (width < 600) {
      this.xspeed = random(-0.7, 0.7);
      this.yspeed = random(-0.7, 0.7);
    }
    else if (width >= 600) {
      this.xspeed = random(-2.0, 2.0);
      this.yspeed = random(-2.0, 2.0);
    }
  
  this.display = function() {
    text(m, this.xpos, this.ypos);
  }
  this.move = function() {
    this.xpos = this.xpos + this.xspeed;
  if (this.xpos  <= width/6 || this.xpos >= width-(width/6)) {
      this.xspeed = this.xspeed * -1;
    }
    this.ypos = this.ypos + this.yspeed;
  if (this.ypos <= height/7 || this.ypos >= height-(height/5)) {
      this.yspeed = this.yspeed * -1;
    }
    this.ypos = constrain(this.ypos, height/7, height-(height/5));
    this.xpos = constrain(this.xpos, width/6, width-(width/6));
  }
}

function Y() {
    var y = "Y";
    this.xpos = random(width/2, width/2);
    this.ypos = random(height/2, height/2);
    if (width < 600) {
      this.xspeed = random(-0.7, 0.7);
      this.yspeed = random(-0.7, 0.7);
    }
    else if (width >= 600) {
      this.xspeed = random(-2.0, 2.0);
      this.yspeed = random(-2.0, 2.0);
    }
  
  this.display = function() {
    text(y, this.xpos, this.ypos);
  }
  this.move = function() {
    this.xpos = this.xpos + this.xspeed;
  if (this.xpos  <= width/6 || this.xpos >= width-(width/6)) {
      this.xspeed = this.xspeed * -1;
    }
    this.ypos = this.ypos + this.yspeed;
  if (this.ypos <= height/7 || this.ypos >= height-(height/5)) {
      this.yspeed = this.yspeed * -1;
    }
    this.ypos = constrain(this.ypos, height/7, height-(height/5));
    this.xpos = constrain(this.xpos, width/6, width-(width/6));
  }
}
