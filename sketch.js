var fixedRect, movingRect;
var gameObject1, gameObject2,gameObject3, gameObject4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400,200,80,30);
  fixedRect.shapeColor="purple";
  movingRect.shapeColor="lightblue";

  gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="yellow";
  gameObject2=createSprite(100,300,50,50);
  gameObject2.shapeColor="yellow";
  gameObject3=createSprite(300,100,50,50);
  gameObject3.shapeColor="yellow";
  gameObject4=createSprite(300,300,50,50);
  gameObject4.shapeColor="yellow";

  fixedRect.debug = true;
  movingRect.debug = true;

  gameObject2.velocityX=2;
  gameObject4.velocityX=-2;
}

function draw() {
  background(255,190,145);  
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  if(isTouching(gameObject1, movingRect)){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="purple";
    movingRect.shapeColor="lightblue";
  }
  
  bounceOff(gameObject2, gameObject4);

  drawSprites();
}

