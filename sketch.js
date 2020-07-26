let s;
let dimension;
var food;
function setup()
{
	createCanvas(600,600);
	dimension = width/10;
	s = dimension/10;
	snake = new Snake();
	food = new Food();


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
	console.log(keyCode);
	if(keyCode == 32)
	{
		snake.stop();
	}
  snake.changeDirection(keyCode);
}

function mouseClicked() {
  snake.addSegment();
}
