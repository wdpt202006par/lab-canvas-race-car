function random(from, to) { // from 1 to 10 (1, 10)
  let randNum = Math.floor(Math.random() * (to - from)) + from // 0,122 * (10 - 1) + 1 -> 1,22 - floor -> = 1 
  return randNum
}

class Obstacle {
  constructor() {
    this.w = random(300, 500); // si random = 350
    this.h = 20; // 20 le bas du rectangle aura pour coordonnée x = 350 + 20 = 370
    this.x = random(0, 1000 - this.w); // random // Il reste 300 de place
    this.y = 0; //
  }
  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.w, this.h);

  }
  bottom() {
    return this.y + this.h;
  }

  right() {
    return this.x + this.w;
  }

  left() {
    return this.x;
  }

  hits(car) {
    if (this.bottom > car.x) return gameover = true
  }
}
// && this.right < car.x + car.w && this.left