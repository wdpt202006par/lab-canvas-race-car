function random(from, to) {
  return Math.floor(from +(Math.random()*(to-from)))
}

class Obstacle {
  constructor() {
    this.w = random(W/5, W/2);
    this.h = 50;
    this.x = random(105, W-105);
    this.y = 0; 
  }

  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.w,this.h)
  }

  hits(car) {
    // TODO
  }
}