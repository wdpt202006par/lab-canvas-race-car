let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

const img = document.createElement('img')
// let speedY = -1;
// let x = 0;
// let y = 0;

img.src = "./images/road.png"

function draw() {
  //
  // Iteration 1: road drawing
  //
  ctx.drawImage(img, 0, 0, W, H);
  // ctx.drawImage(img, x, H, W, H);

  // y += speedY;
  // y %= H;


  // TODO

  //
  // Iteration 2: car drawing
  //
  car.draw();
  // TODO

  //
  // Iteration #4: obstacles
  if (frames % 150 === 0) {
    myObstacles.push(new Obstacle());

  }

  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].draw();
    myObstacles[i].y += 5;
  }
  //

  // TODO

  //
  // Iteration #5: collisions
  myObstacles.forEach(function (el) {
    if (el.hits(car)) {
      gameover = true;
    }
  })
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
      console.log('left', car);
      break;
    case 39:
      car.moveRight();
      console.log('right', car);
      break;
  }
}


let raf;
let frames = 0;
const myObstacles = [];

function animLoop() {
  frames++;

  draw()

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }
}

function startGame() {
  car = new Car();
  if (raf) {
    cancelAnimationFrame(raf);
  }
  gameover = false;
  // TODO
  animLoop();
}

document.getElementById("start-button").onclick = function () {
  startGame();
};

// auto-start
startGame();