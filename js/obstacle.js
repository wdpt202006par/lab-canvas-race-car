function random(from, to) {
  // TODO
}

class Obstacle {
  constructor() {
		// TODO
		this.x = Math.random() * 250;
		this.y = 0;
		this.w = Math.random() * 250;
		this.h = 30;
		this.obstacleSpeed = 3;
  }

  draw() {
		// TODO
		this.ctx.fillStyle = '#482b26';
		this.ctx.fillRect(this.x, this.y, this.w, this.h)
  }

  hits(car) {
    // TODO
  }
}