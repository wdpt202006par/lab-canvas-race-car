let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector("canvas").getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;

const background = new Image();
background.src = "images/road.png";

function draw() {
  // Iteration 1: road drawing

	ctx.drawImage(background, 0, 0, W, H);
  // Make sure the image is loaded first otherwise nothing will draw.
	
  // Iteration 2: car drawing
  // TODO
	car.draw(); //tracer la voiture après la route

  // Iteration #4: obstacles
	// TODO
	
	if (frames % 280 === 0) {
    myObstacles.push(new Obstacle()); 
  }

  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].draw();
    myObstacles[i].y += 1;
  }

  


  // Iteration #5: collisions
	// TODO
	
	// detectColision(obs) {
	// 	if (this.car.x < obs.x + obs.w && this.car.x + this.car.w > obs.x && this.car.y < obs.y + obs.h && this.car.h + this.car.y > obs.y) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }

	// setEventListeners() {
	// 	document.onkeydown = e => {
	// 		e.keyCode === 37 ? this.car.moveLeft() : null;
	// 		e.keyCode === 39 ? this.car.moveRight() : null
	// 	}
	// },

	document.onkeydown = function (e) {
		if (!car) return;
		console.log(e.keyCode);
		// TODO
		switch(e.keyCode){
			case 37: 
			car.moveLeft();
			break;
	
			case 39:
			car.moveRight();
			break;
		}
	};
	
	// clearScreen(){
	// 	this.ctx.clearRect(0, 0, this.W, this.H);
	// }

// Iteration #6: points
// TODO
}

const myObstacles = [];
let raf;
let frames = 0;
function animLoop() {
  frames++;

  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop); // 16ms
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }

  // TODO
	car = new Car();
	obstacles = new Obstacle();
  animLoop();
}

document.getElementById("start-button").onclick = function () {
  startGame();
};

// auto-start
startGame();