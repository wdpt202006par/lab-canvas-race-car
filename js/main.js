let car;
let obstacles = [];
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

const roadimg = document.createElement("img");
roadimg.src = './images/road.png';


function draw() {
  // EXECUTEE TOUTES LES 16ms

  // Iteration 1: road drawing
  ctx.drawImage(roadimg, 0, 0, 1000, 1600); // 
  car.draw() // apres la route

  // Iteration 2: car drawing

  // Iteration #4: obstacles
  if (frames % 80 === 0) {
    const obstacle = new Obstacle();
    obstacles.push(obstacle);
  }
  obstacles.forEach(el => {
    el.y += 10;
    el.draw();
  })


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
  frames++; // nbr de tour de boucles // rafraichissement de l'écran 

  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop); // toutes les 16ms
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }
  car = new Car();
  animLoop();
}

document.getElementById("start-button").onclick = function () {
  startGame();
};

// auto-start
startGame();