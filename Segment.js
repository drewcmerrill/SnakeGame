class Segment
{
  constructor(x, y, r, g, b)
  {
    this.x = x;
    this.y = y;
    this.oldX = x;
    this.oldY = y;
    this.r = r;
    this.g = g;
    this.b = b;
    this.mass = 10;
  }

  update(newX, newY)
  {
    this.oldX = this.x;
    this.oldY = this.y;
    this.x = newX;
    this.y = newY;
  }

  show()
  {
    push();
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, dimension, dimension);
    pop();
  }
}
