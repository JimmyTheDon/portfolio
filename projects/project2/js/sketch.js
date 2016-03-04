// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill
function setup() {
  var a2 = createCanvas(240, 240);
  a2.parent("a2");
  noStroke(); 
  fill(0);
}

function draw() {
  ellipse(mouseX,mouseY,50,50);
}
function mousePressed () {
	setup();
}