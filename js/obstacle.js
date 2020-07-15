function random(from, to) {
  // TODO
}

class Obstacle {
  constructor() {
		// TODO
		this.x = Math.floor((Math.random() * 450) + 120);
		this.y = 0;
		this.w = Math.random() * 350;
		this.h = 30;
  }

  draw() {
		// TODO
		ctx.fillStyle = '#482b26';
		ctx.fillRect(this.x, this.y, this.w, this.h);
		ctx.stroke();
  }

  hits(car) {
		// TODO
		return (
			this.y + this.h > car.y && 
			this.y < car.y + car.h &&
			this.x + this.w > car.x &&
			this.x < car.x + car.w
		);
  }
}