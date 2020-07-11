function random(from, to) {
  return Math.floor(Math.random() * (from - to + 1) + to);
}

class Obstacle {
  constructor() {
    // TODO
    this.w = random(W / 4, W / 2);
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

  left() {
    return this.x; // position du bord gauche
  }
  right() {
    return this.x + this.w; // position du bord droite
  }
  top() {
    return this.y; //position du bord haut
  }
  bottom() {
    return this.y + this.h; //position du bord bas
  }

  hits(car) {
    // // TODO
    return ( // true or false
      // this.bottom() > car.y && this.top() < car.y &&
      // this.right() > car.x && this.left() < car.x
      car.x + car.w >= this.x &&
      car.x <= this.x + this.w &&
      (car.y <= this.y + this.h && car.y + car.h >= this.y)
    );
  }
}