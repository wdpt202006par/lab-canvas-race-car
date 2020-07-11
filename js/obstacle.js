function random(from, to) {
  return Math.floor(from +(Math.random()*(to-from)))
}

class Obstacle {
  constructor() {
    this.w = random(W/5, W/2);
    this.h = 50;
    this.x = random(0, W);
    this.y = 0; 
  }

  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.w,this.h)
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.w;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.h;
  }

  hits(car) {
    // TODO

    
      if (this.bottom() > car.top() && this.top() < car.bottom() &&
      this.right() > car.left() && this.left() < car.right()
    
      ) {
        return gameover = true;
      } 


  }
  
}