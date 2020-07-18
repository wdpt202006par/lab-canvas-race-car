function random(from, to) {
  // TODO
  return Math.floor(Math.random()*(to-from)+ from);
}

// random(100,500)

class Obstacle {
  constructor() {
    // TODO
    this.w = random(100, 400);
    this.h = 30;
    this.x = random(60, W - this.w);
    this.y = 0;
    if (this.x+ this.w>800){
      
        this.w -= 60
      
    };
    

  }
  leftObstacle() {
    return this.x
  }
  rightObstacle() {
    return this.x + this.w;
  }
  topObstacle() {
    return this.y;
  }
  bottomObstacle() {
    return this.y + this.h;
  }

  draw() {
    // TODO
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  hits(car) {
    // TODO
  }
}

