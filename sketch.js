let s = 1;
let dimension = 20;
var x = 0;
var y = 0;
var food;
function setup()
{
	createCanvas(400, 400);
	snake = new Snake(width/2, height/2);
	x = floor(random(width/dimension)) * dimension;
	y = floor(random(height/dimension)) * dimension;
	food = new Food(x,y);

}

function draw() {
	background(51);
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
