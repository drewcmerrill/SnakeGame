class Sparkle
{
  constructor(x, y, m)
  {
    this.pos = createVector(x,y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.mass = m;
    this.r = sqrt(this.mass) * 10; //scales the objects according to their mass
  }


  applyForce(force)
  {
    let f = p5.Vector.div(force, this.mass); // A = F/M calculates acceleration according to mass
    this.acc.add(f);//adds new acceleration to old acceleration
  }

  attract(object)
  {
    let objectPos = createVector(object.x, object.y)
    let force = p5.Vector.sub(objectPos, this.pos);
    //this is to stop objects from shooting off when they get too close and from not being attracted when too far
    // let distanceSq = constrain(force.magSq(), 10, 1000);
    let distance = force.mag();
    let distanceSq = force.magSq();
    let G = 1000;
    let strength = (G * (this.mass * object.mass)) / distanceSq;
    force.setMag(strength);
    if(distance < 200)
    {
      force.mult(-1);
    }

    this.applyForce(force);
  }

  edges()
  {
    if (this.pos.y >= height - this.r)
    {
      this.pos.y = height - this.r;
      this.vel.y *= -.1;
    }
    if (this.pos.y <= 0 + this.r)
    {
      this.pos.y = 0 + this.r;
      this.vel.y *= -.1;
    }
    if (this.pos.x >= width - this.r)
    {
      this.pos.x = width - this.r;
      this.vel.x *= -.1;
    }
    if (this.pos.x <= 0 + this.r)
    {
      this.pos.x = 0 + this.r;
      this.vel.x *= -.1;
    }
  }


  showVelocity()
  {
    let direction = p5.Vector.add(this.pos, this.vel);//velocity vector pointing from circle of the ball
    let scale = p5.Vector.mult(this.vel, 5); //scale the direction vector
    direction.add(scale); //add the scale to the direction
    let base = this.pos.copy();
    stroke(255,0,255);
    line(base.x, base.y, direction.x, direction.y);

    let arrowSize = 10;

    let bottomRight = p5.Vector.mult(this.vel, .1);
    bottomRight.x = -1 * this.vel.y;
    bottomRight.y = this.vel.x;
    bottomRight.setMag(arrowSize/2);
    bottomRight.add(direction);
    let point1x = bottomRight.x;
    let point1y = bottomRight.y;

    let bottomLeft = p5.Vector.mult(this.vel, .1);
    bottomLeft.x = this.vel.y;
    bottomLeft.y = -1 * this.vel.x;
    bottomLeft.setMag(arrowSize/2);
    bottomLeft.add(direction);
    let point2x = bottomLeft.x;
    let point2y = bottomLeft.y;

    let tip = p5.Vector.mult(this.vel, .5);
    tip.add(direction);
    let point3x = tip.x;
    let point3y = tip.y;

    triangle(point1x, point1y, point2x, point2y, point3x, point3y);
  }

  update()
  {
    this.vel.add(this.acc);//adds acceleration to velocity to get new velocity
    this.pos.add(this.vel);//adds velocity to position to get new position
    this.acc.set(0,0); //resets acceleration
  }
  show()
  {
    push();
    fill(r, g, b);
    ellipse(this.pos.x, this.pos.y, this.r *2, this.r * 2);
    pop();
  }
}
