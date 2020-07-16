class Car {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight;

      // TODO
      this.w = 100;
      this.h = this.w/imgRatio;
      this.x = 500 - this.w/2;
      this.y = 1400;
    }
    img.src = "images/car.png";
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.w;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.h;
  }
  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw

    // TODO
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  moveLeft() {
    // TODO
    this.x-=10
  }
  moveRight() {
    // TODO
    this.x+=10
  }
  crashWith(obstacle) {
    return (

      this.bottom() > obstacle.topObstacle() &&
      this.top() < obstacle.bottomObstacle() &&
      this.right() > obstacle.leftObstacle() &&
      this.left() < obstacle.rightObstacle()
    );
  }
  oppps() {
    // ... your code goes here
    const fin = document.createElement('img');
    fin.src = "images/gameover.png";
  
    // TODO
    fin.onload = () => {
      ctx.drawImage(fin, 250, 550, 500, 400);
    }  
    
  }
  score(points) {
    ctx.font = "50px sans-serif"
    ctx.fillText(`SCORE:${points}`,650, 100);
  }
}