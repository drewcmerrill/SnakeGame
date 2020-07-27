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
var sparkles = [];
let score = 0;
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

	for(let i = 0; i < width/2; i++)
	{
		sparkles.push(new Sparkle(random(width), random(height), .11));

	}


}

function draw() {
	background(51);

	for(sparkle of sparkles)
	{
		for(let i = 0; i < snake.segments.length; i++)
		{
			sparkle.attract(snake.segments[i]);
		}
		sparkle.edges();
		sparkle.update();
		sparkle.show();
	}

	snake.eat();
	snake.collide();
	food.show();
	snake.show();
	snake.update();

	textSize(32);
	push();
	fill(r, g, b);
	text("Score: " + score, 20, 40);
	pop();
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
