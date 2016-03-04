// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill
function setup() {
  var a1 = createCanvas(80, 160);
  a1.parent("a1");
  noStroke(); 
  fill(0);
}

function draw() {
  ellipse(mouseX,mouseY,50,50);
}
function mousePressed () {
	setup();
}