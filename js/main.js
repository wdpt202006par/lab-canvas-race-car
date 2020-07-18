let car;
let obstacles =[];
let gameover;
let points= 0;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width; //1000
const H = ctx.canvas.height; //1600

function draw() {
  //
  // Iteration 1: road drawing
  const imageRoad = document.createElement('img');
  imageRoad.src = "images/road.png";

  imageRoad.onload = () => {
    ctx.drawImage(imageRoad, 0, 0, W, H);
  }

  // Iteration 2: car drawing
   car.draw();


  // TODO
  
  if(frames % 120 === 0){
    let obstacle = new Obstacle();
    obstacles.push(obstacle)
  }
  obstacles.forEach(el => {
    el.y += 5;
    el.draw()
  })
  //
  // Iteration #5: collisions
  //

  // TODO
  checkGameOver();
  if(gameover){
    cancelAnimationFrame(raf);
    car.oppps();
    car.score(points)
  }
  //
  // Iteration #6: points
  //

  // TODO
  // 
  if (obstacles.length>1){
    points+= 1;
    car.score(points)
}
}

  document.addEventListener('keydown', e => {
    if (!car) return;
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
  
  });

let raf; 
let frames = 0;
function animLoop() {
  frames++;
  draw();
  console.log(`the status of game:${gameover}`)
  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }
}
function checkGameOver () {
  gameover = obstacles.some(function (obstacle) {
    return car.crashWith(obstacle);
  });
}
function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
    obstacles=[]
  }

  car = new Car();

  animLoop();
}
document.getElementById("start-button").onclick = function() {
  startGame();
};