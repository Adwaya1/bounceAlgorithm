var fixedRect, movingRect;
var rect1,rect2,rect3,rect4;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(200,200,40,30);
  rect1.shapeColor = "green";
  rect2 = createSprite(400,200,40,30);
  rect2.shapeColor = "green";
  rect3 = createSprite(600,200,40,30);
  rect3.shapeColor = "green";
  rect4 = createSprite(800,200,40,30);
  rect4.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounce(fixedRect,movingRect);

  drawSprites();
}


