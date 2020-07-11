function random(from, to) {
  // TODO
    return Math.floor(Math.random() * (to - from) + from);
  }


class Obstacle {
  constructor() {
    // TODO
  
  this.x = Math.floor(Math.random()*700);;
  this.y = 0;
  this.w = random(30,500);
  this.h = 20;
  this.color ="red";
  }

  draw() {
    ctx.fillRect(this.x,this.y,this.w,this.h);
    ctx.fillStyle = this.color;
  }

  hits(car) {
      return (
        this.w > car.y && this.w < car.y
        &&
        this.h> car.x && this.h < car.x
      )
      console.log("touchhhhhé")
  }
}

