let car;
let obstacles = [];
let gameover;
let points;


const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;
const BOUNDRY = 140;

const roadImg = new Image()
roadImg.src = 'images/road.png'

function draw() {
  //
  // Iteration 1: road drawing
  //
  ctx.drawImage(roadImg, 0,0,W,H)

  //
  // Iteration 2: car drawing
  //
  car.draw()

  //
  // Iteration #4: obstacles
  //
  for (ob of obstacles){
    ob.draw()
    ob.y++;    
  }

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
  switch (e.keyCode) {
    case 37: 
      car.moveLeft();
      break;
    case 39:
      car.moveRight();
      break;
  }
}

let raf;
let frames = 0;
function animLoop() {
  frames++;
  //ctx.clearRect(0,0,W,H);
  if (frames % 360 === 0){
    obstacles.push(new Obstacle())
    ctx.clearRect(0,0,W,H);
  }  
  draw();
  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }
  car = new Car()
  animLoop();
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();
