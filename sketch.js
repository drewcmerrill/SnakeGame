let s = 2;
let dimension = 50;

function setup() {
	createCanvas(400, 400);
	snake = new Snake(width/2, height/2);
}

function draw() {
	background(51);
	snake.update();
	snake.show();

}

function keyPressed() {
	console.log(keyCode);
	if(keyCode == 32)
	{
		snake.stop();
	}
  snake.changeDirection(keyCode);
}
