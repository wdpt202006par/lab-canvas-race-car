let car;
let obstacles;
let gameover = false;
let points = 0;

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
	
	myObstacles.forEach((element, index) => {
		element.y += 10;
		element.draw();
		if (element.hits(car)) {
			gameover = true;
		}
		if (element.y > H) {
			points = index + 1;
		}
	});

	// Iteration #6: points
	// TODO
	ctx.font = "45px bold";
  ctx.fillStyle = "black";
  ctx.fillText(`Score: ${points}`, 0, 100);	

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
}

const myObstacles = [];
let raf;
let frames = 0;
function animLoop() {
  frames++;

  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop); // 16ms
  } else {
		ctx.beginPath();
		ctx.fillStyle = 'ff0000'
		ctx.fillRect(0, 0, W, H);
		ctx.closePath();
		
		ctx.beginPath();
		ctx.font = '50px sans-serif';
    ctx.fillStyle = '#ffffff'
		ctx.fillText("BOOOOM, IN YOUR FACE!", 350, 700, 300);
		ctx.closePath();
		
		ctx.beginPath();
    ctx.fillStyle = 'red'
		ctx.fillText(`Your final score: ${points}`, 300, 850)
		ctx.closePath();
	}
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }

	// TODO
	gameover = false;
	points = 0;
	car = new Car();
	obstacles = new Obstacle();
	animLoop();
	final();
}

document.getElementById("start-button").onclick = function () {
  startGame();
};

// auto-start
startGame();