class Food
{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
    this.red = r;
    this.green = g;
    this.blue = b;
  }

  show()
  {
    push();
    fill(this.red, this.green, this.blue);
    rect(this.x, this.y, dimension, dimension);
    pop();
  }
}
