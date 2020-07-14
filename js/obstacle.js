function random(from, to) {
  // TODO
  return Math.floor(Math.random() * (+to - +from) + +from);
}

class Obstacle {
  constructor() {
    // TODO
    this.w= random(200,800);
    this.h=50;
    this.x=random(0, 1500-this.w);
    this.y=0;
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
        this.x < car.x+this.w
      ) {
        return true;
      } 
      return false;
    
  }
}