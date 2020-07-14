let car;
let obstacles = [];
let gameover = false;
let points = 0;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

const roadimg = document.createElement("img");
roadimg.src = './images/road.png';


function draw() {
  // EXECUTEE TOUTES LES 16ms
  // Iteration 1: road drawing
  ctx.drawImage(roadimg, 0, 0, 1000, 1600); // 

  // Iteration 2: car drawing
  car.draw() // apres la route

  // Iteration #4: obstacles
  if (frames % 80 === 0) {
    const obstacle = new Obstacle();
    obstacles.push(obstacle);

  }
  obstacles.forEach((el, index) => {
    el.y += 10;
    el.draw();
    if (el.hits(car)) {
      gameover = true;
    }
    if (el.y > H) {
      points = index + 1
    }
  })
  // Iteration #6: points
  ctx.font = "50px sans-serif";
  ctx.fillStyle = "white";
  ctx.fillText(`Score: ${points}`, 150, 100);
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
  } else {
    //BLACK OUT SCREEN
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, W, H);
    ctx.closePath();
    //GAME OVER WRITTING
    ctx.beginPath();
    ctx.font = "50px sans-serif";
    ctx.fillStyle = "red";
    // ctx.textAlign = 'center';
    ctx.fillText('GAME OVER', W / 2 - 130, H / 2, 350);
    ctx.closePath();
    // SCORE WRITTING
    ctx.beginPath();
    ctx.font = "30px sans-serif";
    ctx.fillStyle = "white";
    // ctx.textAlign = 'center';
    ctx.fillText(`Score: ${points}`, W / 2 - 75, H / 2 + 70), 200;
    ctx.closePath();
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }
  gameover = false;
  points = 0;
  obstacles.splice(0, Infinity);
  car = new Car();
  animLoop();
}

document.getElementById("start-button").onclick = function () {
  startGame();
};

// auto-start
startGame();