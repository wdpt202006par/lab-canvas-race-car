class Car {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;
      this.w = 100;
      let imgScale = img.naturalWidth / img.naturalHeight;
      this.h = this.w / imgScale;
      this.x = (W / 2) - (this.w / 2);
      this.y = 1300;

      const imgRatio = img.naturalWidth / img.naturalHeight;

      // TODO
    };
    img.src = "images/car.png";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw

    // TODO
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  moveLeft() {
    // TODO
    this.x -= 20;
  }
  moveRight() {
    // TODO
    this.x += 20;
  }
}