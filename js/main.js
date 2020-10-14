let car;
let obstacles = [];
let gameover=false;
let points = 0;

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
      gameover = true;
    }
    
  })

  //
  // Iteration #6: points
  //
  ctx.font = '80px serif'
  ctx.fillText(`Score: ${points}`,100, 1200);
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
  if (frames % 300 ===0) {
   obstacles.push(new Obstacle());
  }
 for (let i=0; i<obstacles.length;i++){
  obstacles[i].y += 2;
  if (obstacles[i].y>car.y+car.h) {
    points++;
    obstacles.splice(i,1);
  }
 }
  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  } else {
    ctx.fillStyle = 'black'
    ctx.fillRect(100,600,800,600);
    
    ctx.font = '100px serif'
    ctx.fillStyle = '#870007'
    ctx.textAlign = 'center';
    ctx.fillText('Game Over!',W/2,H/2);

    ctx.font = '100px serif'
    ctx.fillStyle = 'white'
    ctx.textAlign = 'center';
    ctx.fillText('Your final score',W/2,H/2+150);

    ctx.font = '100px serif'
    ctx.fillStyle = 'white'
    ctx.textAlign = 'center';
    ctx.fillText(`${points}`,W/2,H/2+300);

  }
}


function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }
  ctx.clearRect(0,0,W,H);
  gameover = false;
  obstacles = [];
  points=0;

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
