let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector("canvas").getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  //
  // Iteration 1: road drawing
  //

    const img = document.createElement('img');
    img.src = 'images/road.png';
    ctx.drawImage(img,0,0,W,H);
  

  //
  // Iteration 2: car drawing
  //
    car.draw();
    

  //
  // Iteration #4: obstacles
  //

    obstacles.draw();


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
  switch (e.keyCode) {
    case 37:
      car.moveLeft();
      break;
    case 39:
      car.moveRight();
      break
  }
  console.log(e.keyCode);
};

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

  car = new Car();
  obstacles = new Obstacle();

  animLoop();
}

document.getElementById("start-button").onclick = function () {
  startGame();
};

// auto-start
startGame();
