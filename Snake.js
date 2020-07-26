class Snake
{
  constructor(x,y)
  {
    this.head = new Segment(x,y);
    this.counter = x;
    this.speed = s;
    this.movementX = false;
  }
  changeDirection(arrow)
  {
    if(arrow == LEFT_ARROW)
    {
      console.log("left arrow");
      this.speed = -1 * s;
      this.movementX = true;
    }
    else if(arrow == RIGHT_ARROW)
    {
      console.log("right arrow");
      this.speed = s;
      this.movementX = true;
    }
    else if(arrow == UP_ARROW)
    {
      console.log("up arrow");
      this.speed = -1 * s;
      this.movementX = false;
    }
    else if(arrow == DOWN_ARROW)
    {
      console.log("down arrow");
      this.speed = s;
      this.movementX = false;
    }

  }

  update()
  {
    if(this.movementX)
    {
      this.counter += Math.abs(this.speed);
      if(this.counter % dimension == 0)
      {
        this.head.x += dimension * Math.sign(this.speed);
      }

    }
    else
    {
      this.counter += Math.abs(this.speed);
      if(this.counter % dimension == 0)
      {
        this.head.y += dimension * Math.sign(this.speed);
      }
    }
    if(this.head.x > (width - dimension))
    {
      this.head.x = 0;
    }
    if(this.head.y > (height - dimension))
    {
      this.head.y = 0;
    }
    if(this.head.x < 0)
    {
      this.head.x = width - dimension;
    }
    if(this.head.y < 0)
    {
      this.head.y = height - dimension;
    }

  }

  show()
  {
    rect(this.head.x, this.head.y, dimension, dimension);
  }
  stop()
  {
    if(this.speed != 0)
    {
      this.speed = 0;
    }
    else {
      this.speed = s;
    }

  }
}
