class Snake
{
  constructor(speed)
  {
    this.head = new Segment(width/2, height/2, random(255), random(255), random(255));
    this.segments = [this.head];
    this.counter = width/2;
    this.speed = s;
    this.movementX = true;

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

  eat()
  {
    if(this.head.x == food.x && this.head.y == food.y)
    {
      this.addSegment();
    }
  }

  collide()
  {
    for(let i = 1; i < this.segments.length; i++)
    {
      if(this.head.x == this.segments[i].x && this.head.y == this.segments[i].y)
      {
        this.die();
      }
    }
  }

  update()
  {
    if(this.movementX)
    {
      this.counter += Math.abs(this.speed);
      if(this.counter % dimension == 0)
      {
        this.head.update(this.head.x + dimension * Math.sign(this.speed), this.head.y);
        for(let i = 1; i < this.segments.length; i++)
        {
          this.segments[i].update(this.segments[i - 1].oldX, this.segments[i - 1].oldY);
        }
      }

    }
    else
    {
      this.counter += Math.abs(this.speed);
      if(this.counter % dimension == 0)
      {
        this.head.update(this.head.x, this.head.y + dimension * Math.sign(this.speed));
        for(let i = 1; i < this.segments.length; i++)
        {
          this.segments[i].update(this.segments[i - 1].oldX, this.segments[i - 1].oldY);
        }
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

  addSegment()
  {
    let last = this.segments[this.segments.length - 1];
    let seg = new Segment(last.x - dimension,last.y, food.r, food.g, food.b);
    this.segments.push(seg);
    food = new Food();
  }

  show()
  {
    for(let i = 0; i < this.segments.length; i++)
    {
      this.segments[i].show();
    }
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

  die()
  {
    this.speed = 0;
    for(let i = 0; i < this.segments.length; i++)
    {
      this.segments[i].r = 255;
      this.segments[i].g = 0;
      this.segments[i].b = 0;
    }
  }

}
