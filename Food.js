class Food
{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }

  show()
  {
    push();
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, dimension, dimension);
    pop();
  }
}
