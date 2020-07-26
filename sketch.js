let s = 1;
let dimension = 20;

function setup()
{
	createCanvas(400, 400);
	snake = new Snake(width/2, height/2);
	//noLoop();
}

function draw() {
	background(51);
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
