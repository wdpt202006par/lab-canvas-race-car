function random(from, to) {
  // TODO
  return Math.floor(Math.random()*(to-from)+ from);
}

// random(100,500)

class Obstacle {
  constructor() {
    // TODO
    this.w = random(100, 400);
    this.h = 10;
    this.x = random(36, W-this.w);
    this.y = 0;
  }

  draw() {
    // TODO
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  hits(car) {
    // TODO
  }
}

