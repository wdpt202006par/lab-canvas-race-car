class Car {
  constructor() {
    const img = document.createElement("img");
    img.onload = () => {
      this.img = img;
      this.w = 100; //pas de précision de unité
      this.x = W / 2 - this.w / 2;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      this.h = this.w / imgRatio;
			this.y = H - this.h;

      // TODO
    };
    img.src = "images/car.png";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw

    // TODO
    console.log("je trace ma voiture");
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

	moveLeft() {
	// TODO
	if(this.x <= 75){
		this.x -= 0
		} else {
			this.x -= 5;
		}
	}

  moveRight() {
		// TODO
		if(this.x >= W - 180){
			this.x += 0
		} else {
			this.x +=5;
		}
		}
};
