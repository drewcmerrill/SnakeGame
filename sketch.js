let s = 2;
let dimension = 20;
var food;
function setup()
{
	createCanvas(600, 600);
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
