function random(from, to) {
  // TODO
  return Math.floor(Math.random() * (+to - +from) + +from);
}

class Obstacle {
  constructor() {
    // TODO
    this.x=random(100, 700);
    this.y=0;
    this.w= random(200,ctx.canvas.width-100-this.x);
    this.h=50;
  }

  draw() {
    // TODO
    ctx.fillStyle = '#870007';
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  hits(car) {
      if (
        this.y+this.h > car.y &&
        this.y < car.y+car.h &&
        this.x+this.w > car.x &&
        this.x < car.x+car.w
      ) {
        return true;
      } 
      return false;
  }
}