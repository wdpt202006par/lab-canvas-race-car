let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  
	// Iteration 1: road drawing
	const background = new Image();
	background.src = "images/road.png";

// Make sure the image is loaded first otherwise nothing will draw.
background.onload= function(){
    ctx.drawImage(background,0, 0, W, H);   
}

  // const img = new Image();
 	// img.src = 'images/road.png';

	//  let canvas, ctx, mainCanvas, mainCtx;

	// img.onload = function() {
  // // Create background canvas
	// backgroundCanvas = document.getElementById('canvas');
	
	// const backgroundImage = {
	// 	img: img,
	// 	x: 0,
	// 	y:0,
	// 	speed: -1,
	
	// 	move: function() {
	// 		this.y += this.speed;
	// 		this.y %= canvas.height;
	// 	},
  
  // Iteration 2: car drawing
  // TODO

  // Iteration #4: obstacles

  // TODO

  // Iteration #5: collisions
  // TODO

  // Iteration #6: points
  // TODO

}

document.onkeydown = function (e) {
  if (!car) return;

  // TODO
}

let raf;
let frames = 0;
function animLoop() {
  frames++;

  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }

  // TODO

  animLoop();
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();
