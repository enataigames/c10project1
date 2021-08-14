var ship;
var shipMoving;
var sea;
var seaImage;
function preload(){
  seaImage = loadImage("sea.png");
  shipMoving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  shipStill = loadImage("ship-1.png");
}

function setup(){
  createCanvas(600,400);
  
  sea = createSprite(300,200,600,400);
  sea.addImage(seaImage);
  sea.scale = 0.5;
  ship = createSprite(200,250,50,50);
  ship.addAnimation("running",shipMoving);
  ship.scale = 0.25;
}

function draw() {
  background("blue");
  sea.velocityX = -10;
  if(sea.x < 100){
    sea.x = 600;
  }
  
  drawSprites();
  
}