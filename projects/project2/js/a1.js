// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill
function setup() {
  var a1 = createCanvas(400, 560);
  a1.parent("a");
  noStroke(); 
  fill(0);
}

function draw() {
  ellipse(mouseX,mouseY,50,50);
}
function mousePressed () {
	setup();
}