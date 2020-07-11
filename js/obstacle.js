function random(from, to) {
  // TODO
  return Math.floor(Math.random() * (to - from) + from);
}

class Obstacle {
  constructor() {
    // TODO
  
  this.x = 0;
  this.y = 0;
  this.w = 0;
  this.h = 0;
  this.color = "red";
  }

  draw() {
    // TODO
  }

  hits(car) {
    // TODO
  }
}

