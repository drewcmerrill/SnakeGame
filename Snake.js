class Snake
{
  constructor(speed)
  {
    this.head = new Segment(width/2, height/2, r, g, b);
    this.updateGradient();
    this.segments = [this.head];
    this.counter = width/2;
    this.speed = s;
    this.movementX = true;
    this.direction = createVector(1, 0);
  }
  changeDirection(arrow)
  {
    if(arrow == LEFT_ARROW && (!this.direction.equals(1, 0) || this.segments.length == 1))
    {
      this.speed = -1 * s;
      this.movementX = true;
      this.direction.set(-1, 0);
    }
    else if(arrow == RIGHT_ARROW && (!this.direction.equals(-1, 0) || this.segments.length == 1))
    {
      this.speed = s;
      this.movementX = true;
      this.direction.set(1, 0);
    }
    else if(arrow == UP_ARROW && (!this.direction.equals(0, 1) || this.segments.length == 1))
    {
      this.speed = -1 * s;
      this.movementX = false;
      this.direction.set(0, -1);
    }
    else if(arrow == DOWN_ARROW && (!this.direction.equals(0, -1) || this.segments.length == 1))
    {
      this.speed = s;
      this.movementX = false;
      this.direction.set(0, 1);
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
    let seg = new Segment(last.oldX ,last.oldY, food.red, food.green, food.blue);
    this.segments.push(seg);

    let x = floor(random(width/dimension)) * dimension
    let y = floor(random(height/dimension)) * dimension

    let covered = true;
    while(covered)
    {
      covered = false;
      for(let i = 0; i < this.segments.length; i++)
      {
        if(x == this.segments[i].x && y == this.segments[i].y)
        {
          covered = true;
          x = floor(random(width/dimension)) * dimension
          y = floor(random(height/dimension)) * dimension
          break;
        }
      }
    }
    this.updateGradient();
    food = new Food(x,y);

  }

  updateGradient()
  {
    r += random(gradient) * rDirection;
    g += random(gradient) * gDirection;
    b += random(gradient) * bDirection;
    if(r > 255 || r < 0)
    {
      if(r > 255)
      {
        r = 255 - random(gradient);
      }
      if(r < 0)
      {
        r = 0 + random(gradient);
      }
      rDirection = rDirection * -1;
    }
    if(g > 255 || g < 0)
    {
      if(g > 255)
      {
        g = 255 - random(gradient);
      }
      if(g < 0)
      {
        g = 0 + random(gradient);
      }
      gDirection = gDirection * -1;
    }
    if(b > 255 || b < 0)
    {
      if(b > 255)
      {
        b = 255 - random(gradient);
      }
      if(b < 0)
      {
        b = 0 + random(gradient);
      }
      bDirection = bDirection * -1;
    }
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
