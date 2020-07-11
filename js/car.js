class Car {
  constructor(x,y) {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;
      
      const imgRatio = img.naturalWidth/img.naturalHeight;

      // TODO
      this.w = 100;
      this.x = x;
      this.h = this.w/imgRatio;
      this.y = y;
      //this.draw();
    }
    img.src = "images/car.png";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    // TODO
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

  moveLeft() {
    this.x -= 30;
  }
  
  moveRight() {
    this.x +=30;
  }
}