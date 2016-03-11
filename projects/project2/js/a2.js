// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

function setup() {
  var b1 = createCanvas(240, 160);
  b1.parent("b1");
  noStroke(); 
  fill(0);
}

function draw() {
  ellipse(mouseX,mouseY,50,50);
}
function mousePressed () {
	setup();
	background(random(0,255))
}