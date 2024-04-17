function setup() {
	var canvas = createCanvas(1200, 600);
	canvas.parent('sketch-container');
}
function windowResized() {
	resizeCanvas(1200, 600);
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
