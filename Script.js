
let GridSquares = [];
let PathPos = 
[0,0,0,0,0,0,0,0,0,0,
1,1,0,0,0,0,0,0,0,0,
0,1,0,0,0,0,0,0,1,1,
0,1,0,0,0,0,0,0,1,0,
0,1,1,1,0,0,0,0,1,0,
0,0,0,1,0,0,0,0,1,0,
0,0,0,1,0,0,1,1,1,0,
0,0,0,1,0,0,1,0,0,0,
0,0,0,1,1,1,1,0,0,0,
0,0,0,0,0,0,0,0,0,0];
let count = 0
let size = 50;
let Enemies = [];

function setup() {
    createCanvas(500, 500); // Set canvas size
    background(240)
    createPixels();
    setTimeout(createEnemy,2000); // delays the creation of the apples by 2 seconds
}

function createPixels() {//function creates the grid of pixels 
    GridSquares = [];
    for (let row = 0; row < (500 / size); row++) {//loop iterates through row
      for (let column = 0; column < (500 / size); column++) {//loop iterates through column
        GridSquares.push(new GridSquare(size,column * size,row * size, PathPos[count]));
        count = count + 1;
      }
    }
  }
  function createEnemy(){ //  
    if (Enemies.length < 10) {
      Enemies.push(new Enemy(25,75,1));
      setTimeout(createEnemy,2000);
    }
}
/*function draw() {;
    stroke(0);  
    strokeWeight(0.5)    
    for (let i = 0; i < GridSquares.length; i++){//draws the pixels 
      GridSquares[i].display();
    }
    for (let i = 0; i < Enemies.length; i++){
        Enemies[i].display();
        Enemies[i].move();    
        if (Enemies[i].getXpos() > 500){
          Enemies.splice(i,1) // deletes the enemy from the array
        }
    }
    fill(230, 161, 14)
    square(205,205,40)
    for (let i = 0 ; i < Enemies[i].length; i++){
      if (Distance(Enemies[i]) == true) { 
        fill(230, 161, 14)
        square(205,205,2)
        erase()
      }
    }
  } 
function Distance(Enemies) {
  let distance = ((Enemies.getXpox-205)*(Enemies.getXpos-205)) + (Enemies.getYpox-205)*(Enemies.getYpos-205)
  if (distance  < 100*100){
    return true
  }
}*/

function draw() {
  stroke(0);  
  strokeWeight(0.5);  
  for (let i = 0; i < GridSquares.length; i++) {
    GridSquares[i].display();
  }
  for (let i = 0; i < Enemies.length; i++) {
      Enemies[i].display();
      Enemies[i].move();    
      if (Enemies[i].getXpos() > 500){
        Enemies.splice(i,1); // deletes the enemy from the array
      }
  }
  fill(230, 161, 14);
  square(205, 205, 40)
  for (let i = 0; i < Enemies.length; i++) {
    if (Distance(Enemies[i])) {
      Enemies.splice(i, 1);
      fill(0,0,0)
      for (i = 0 ; i < 100 ; i++){
        circle(220 - i,220,5)
      }
    }
  }
}
function Distance(enemy) {
  let x = enemy.getXpos() - 205;
  let y = enemy.getYpos() - 205;
  let distanceSquared = x * x + y * y;
  return distanceSquared < (100 * 100);
}