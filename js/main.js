let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  //
  // Iteration 1: road drawing
  // fond 
  ctx.clearRect(0,0, W, H);
  ctx.fillStyle = "grey"
  ctx.fillRect(0, 0, W, H)

  // bord 1
  ctx.fillStyle = "green"
  ctx.fillRect(0, 0 , 70, H)

  // bord 2
  ctx.fillStyle = "green"
  ctx.fillRect(W-70, 0 , 70, H);

  // ligne blanche 1 
  ctx.fillStyle = "white"
  ctx.fillRect(85, 0 , 20, H)

  // ligne blanche 2
  ctx.fillStyle = "white"
  ctx.fillRect(W-105, 0 , 20, H)

  // pointillé
  ctx.beginPath();
  ctx.lineWidth = 15;
  ctx.setLineDash([60,60]);
  ctx.strokeStyle = "white";
  ctx.moveTo(500, 0);
  ctx.lineTo(500, 1600);
  ctx.stroke();

  // TODO

  //
  // Iteration 2: car drawing
  
  car.draw();

  // TODO

  //
  // Iteration #4: obstacles
  //

  // TODO

  //
  // Iteration #5: collisions
  //

  // TODO

  //
  // Iteration #6: points
  //

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
  car = new Car(450, 1300);
  
  

  animLoop();
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();
