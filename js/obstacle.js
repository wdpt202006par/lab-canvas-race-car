function random(from, to) {
  return Math.floor(Math.random() * (from - to + 1) + to);
}

class Obstacle {
  constructor() {
    // TODO
    this.w = Math.floor(Math.random() * (540 - 10 + 1) + 10);
    this.h = 50;
    this.x = random(130, 340);
    this.y = 0;
  }

  draw() {
    // TODO
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.fillStyle = 'black';
    ctx.stroke();
  }

  hits(car) {
    // TODO
  }
}