let randAussen;
let figur;
let geschwindigkeit = 5;

let snake_spur = [];

function setup() {
  let cnv = createCanvas(800, 600);
  cnv.position(10,10);

  randAussen = new Group();

  let seitenWandLinks = createSprite(0, height/2, 10, height);
  seitenWandLinks.shapeColor = color("lightgray");
  seitenWandLinks.immovable = true;
  randAussen.add(seitenWandLinks);
  
	let seitenWandOben = createSprite(width/2, 0, width, 10);
  seitenWandOben.shapeColor = color("lightgray");
  seitenWandOben.immovable = true;
  randAussen.add(seitenWandOben); 
  
  let seitenWandRechts = createSprite(width, height/2, 10, height);
  seitenWandRechts.shapeColor = color("lightgray");
  seitenWandRechts.immovable = true;
  randAussen.add(seitenWandRechts);   
  
  let seitenWandUnten = createSprite(width/2, height, width, 10);
  seitenWandUnten.shapeColor = color("lightgray");
  seitenWandUnten.immovable = true;
  randAussen.add(seitenWandUnten);
  
  figur = createSprite(width/2, height/2, 10, 10);
}

function draw() {
  background(252);

  figur.collide(randAussen,stopp);
  
  let snake_position = createVector(0, 0);
  if(keyIsPressed) {
    if(keyWentDown('d')) {
        figur.velocity.x = geschwindigkeit;
    }
    if(keyWentDown('a')) {
        figur.velocity.x = -geschwindigkeit;
    }
    if(keyWentDown('s')) {
        figur.velocity.y = geschwindigkeit;
    }
    if(keyWentDown('w')) {
        figur.velocity.y = -geschwindigkeit;
    }
    snake_position.x = figur.position.x;
    snake_position.y = figur.position.y;
    snake_spur.push(snake_position);
  } else {
    figur.velocity.x = 0;
    figur.velocity.y = 0;
  }
  
  if(snake_spur.length > 1) {
    for(let i=0; i<snake_spur.length; i++){
      fill('teal');
      ellipse(snake_spur[i].x, snake_spur[i].y, 5, 5);
    }
  }
  
  if(snake_spur.length > 100) {
    snake_spur.shift();
  } 
  
  drawSprites();
}

function stopp() {
  figur.setSpeed(0,0);
}