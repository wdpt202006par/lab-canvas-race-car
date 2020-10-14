class Car {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;
      
      const imgRatio = img.naturalWidth/img.naturalHeight;

      this.w=100;
      this.h=this.w/imgRatio;
      this.x= 450;
      this.y= 1300;
    
    }
    img.src = "images/car.png";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw

    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }

  moveLeft() {
    if (this.x >100) {
      this.x=this.x-this.w;
    }
  }
  moveRight() {
    if (this.x<800) {
      this.x=this.x+this.w;
    }
  }
}