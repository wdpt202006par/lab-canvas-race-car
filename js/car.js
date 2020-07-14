class Car {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      // TODO
      this.w = 100;
      this.h = this.w / imgRatio;
      this.x = 450;
      this.y = 1300;
      this.draw();
    }
    img.src = "./images/car.png";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  moveLeft() {
    if (this.x < 0) return;
    this.x -= 60;
  }

  moveRight() {
    if (this.x > 1000 - this.w) return;
    this.x += 60;
  }

  // Front() {
  //   return this.x;
  // }

  // Right() {
  //   return this.x + this.w;
  // }

  // Left() {
  //   return this.x;
  // }

}