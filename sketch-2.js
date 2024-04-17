let x = 60,
	x1 = 340,
	y = 60,
	y1 = 340,
	d = 100,
	d1 = 100,
	speedx = 4,
	speedy = 3,
	speedx1 = 2,
	speedy1 = 3;


function setup() {
	createCanvas(windowWidth, windowHeight);
}
		
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
	 
function draw() {
	background(0, 0, 100, 100);
	fill('red');
	x += speedx;
	y += speedy;
	circle(x, y, d);

	x1 += speedx1;
	y1 += speedy1;
	circle(x1, y1, d1);

	//edges
	if (x <= d / 2 || x >= width - d / 2) {
		speedx *= -1;
	}
	if (y <= d / 2 || y >= height - d / 2) {
		speedy *= -1;
	}
	if (x1 <= d1 / 2 || x1 >= width - d1 / 2) {
		speedx1 *= -1;
	}
	if (y1 <= d1 / 2 || y1 >= height - d1 / 2) {
		speedy1 *= -1;
	}
	//collision
	if (dist(x, y, x1, y1) <= d1 / 2 + d / 2) {
		let tempSpeedx = speedx;
		let tempSpeedy = speedy;
		speedx = speedx1;
		speedy = speedy1;
		speedx1 = tempSpeedx;
		speedy1 = tempSpeedy;
		//the ball takes over the speed/value of the other .Since you cannot equate the values, a third variable must be added
	}
}
