let s;
let dimension;
var food
var r;
var g;
var b;
var gradient = 10;
var rDirection = 1;
var gDirection = 1;
var bDirection = 1;
function setup()
{
	createCanvas(700,700);
	r = random(255);
	g = random(255);
	b = random(255);
	dimension = width/20;
	s = dimension/10;
	snake = new Snake();
	food = new Food(floor(random(width/dimension)) * dimension, floor(random(height/dimension)) * dimension);
}

function draw() {
	background(51);
	snake.eat();
	snake.collide();
	food.show();
	snake.show();
	snake.update();
}

function keyPressed() {
	if(keyCode == 32)
	{
		snake.stop();
	}
  snake.changeDirection(keyCode);
}

function mouseClicked() {
  snake.addSegment();
}
