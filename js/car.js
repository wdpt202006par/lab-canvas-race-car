class Car {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;
      const imgRatio = img.naturalWidth/img.naturalHeight;

      this.x = 500;
      this.y = 1400;
      this.w = 100;
      this.h = this.w/imgRatio;

      // TODO
    }
    img.src = "images/car.png";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    // TODO
  }

  moveLeft() {
    // TODO
    if(this.x >= 100){
      this.x -= 25;
    }
  }
  moveRight() {
    // TODO
    if(this.x <= 800){
      this.x += 25;
    }
  }
}

