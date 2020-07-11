let car;
let obstacles =[];
let gameover;
let points;

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

  //
  // Iteration #4: obstacles
  // function updateObstacles() {
  //   let obs=new Obstacle(this.x, this.y, 'red', this.w, this.h);
  //   obstacles.push(obs);
  //   for (i = 0; i < obstacles.length; i++) {
  //     obstacles[i].y += 1;
  //     obstacles[i].draw()
  //   }
  
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

  //
  // Iteration #6: points
  //

  // TODO

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


  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  
  }

  car = new Car();

  animLoop();
}






document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();
