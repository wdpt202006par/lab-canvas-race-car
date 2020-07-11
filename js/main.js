let car;
let obstacles = [];
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  //
  // Iteration 1: road drawing
  //

  const imgRoad = new Image();
  imgRoad.src = "./images/road.png"
  // const img = document.createElement('img')

  ctx.drawImage(imgRoad, 0, 0, W, H);
  
  
  //
  // Iteration 2: car drawing
  //
  car.draw()

  // Iteration #4: obstacles
  //
  if (frames % 250 === 0) {
    const obst = new Obstacle()
    obstacles.push(obst)
  }

  obstacles.forEach(element => {
    element.draw();
    element.y += 1; 
  });

  // TODO

  //
  // Iteration #5: collisions
  Obstacle1.hits(car)
  
  // TODO

  //
  // Iteration #6: points
  //

  // TODO

}

document.onkeydown = function (e) {
  if (!car) return; // si car est undefined STOP
  switch (e.keyCode) {
    case 37: car.moveLeft();  console.log('left',  car); break;
    case 39: car.moveRight(); console.log('right', car); break;
  }
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
  //création de la voiture
  car = new Car()
  Obstacle1 = new Obstacle ()
 

  animLoop();
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();
