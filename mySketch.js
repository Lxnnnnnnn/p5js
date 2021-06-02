function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(1);
}

function draw() {
	background(100);
	let c1=randomVertex();
	let c2=randomVertex();
	let c3=randomVertex();
	let c4=randomVertex();
	let c5=randomVertex();
	beginShape();
vertex(c1.x,c1.y);
vertex(c2.x,c2.y);
vertex(c3.x,c3.y);
vertex(c4.x,c4.y);
vertex(c5.x,c5.y);
	endShape(CLOSE);
}

function randomVertex() { 
	let vertex = {
    x: int(random(windowWidth + 1)),
    y: int(random(windowHeight + 1))
  }
	return vertex;
}
