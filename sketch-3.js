var canvas;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1');
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	let x = mouseX;
	let y = mouseY;
	let ix = width - mouseX; // Inverse X
	let iy = height - mouseY; // Inverse Y
	background(126);
	noStroke();
	fill(255, 150);
	ellipse(x, height / 2, y, y);
	fill(0, 159);
	ellipse(ix, height / 2, iy, iy);
}
