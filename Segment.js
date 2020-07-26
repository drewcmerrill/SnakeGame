class Segment
{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
    this.oldX = x;
    this.oldY = y;
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
    rect(this.x, this.y, dimension, dimension);
  }
}
