function random(from, to) {
  return Math.floor(Math.random() * (from - to + 1)) + to;
}

class Obstacle {
  constructor() {
    this.y = random(0, W-400)
    this.x = random(BOUNDRY, W)
    this.w = 80
    this.h = 400

  }

  draw() {
    ctx.fillStyle='red';
    ctx.fillRect(this.x, this.y, this.h, this.w)
  }

  hits(car) {
    const left = this.x;
    const right =  this.x + this.w;
    const top = this.y;
    const bottom = this.y + this.h;

    const car_left = car.x;
    const car_right = car.x + car.w;
    const car_top = car.y;
    const car_bottom = car.y + car.h;

   return (
    bottom > car_top && top < car_bottom
    &&
    right > car_left && left < car_right
   )

  }
}