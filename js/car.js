class Car {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;
      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.w = 100
      this.h = this.w /imgRatio
      this.x = (W - this.w) /2;
      this.y = H - this.h;
    }
    img.src = "images/car.png";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)


  }

  moveLeft() {
    if(car.x > BOUNDRY){
      this.x -= 10
    }
  }
  moveRight() {
    if(car.x < (W-BOUNDRY))
    this.x += 10
  }
}