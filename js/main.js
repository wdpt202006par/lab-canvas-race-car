let car;
let obstacles = [];
let gameover=false;
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

    obstacles.forEach(function (ob) {
      ob.draw();
    })
   

  //
  // Iteration #5: collisions
  //

  obstacles.forEach(function (ob) {
    if (ob.hits(car)) {
      gameover = true
    }
    
  })

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
};

let raf;
let frames = 0;
function animLoop() {
  frames++;
  if (frames % 400 ===0) {
   obstacles.push(new Obstacle());
  }
 for (let i=0; i<obstacles.length;i++){
  obstacles[i].y += 2;
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
  ctx.clearRect(0,0,W,H);
  gameover = false;
  obstacles = [];

  car = new Car();
  let obstacle = new Obstacle();
  obstacles.push(obstacle);

  animLoop();
}

document.getElementById("start-button").onclick = function () {
  startGame();
};

// auto-start
startGame();
