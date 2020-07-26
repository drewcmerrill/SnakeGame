let s = .5;
let dimension = 20;

function setup()
{
	createCanvas(500, 500);
	snake = new Snake(width/2, height/2);
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
