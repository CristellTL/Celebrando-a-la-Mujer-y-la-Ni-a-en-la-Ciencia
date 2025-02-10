var girl, girl_running;
var ground, groundImg, invisibleGround;
var treasureImg, treasuresGroup;
var score = 0;
var gameState = "play";
var cloudsGroup, gameOver, gameOverImg;
var girl_collided, obstImg, obstGroup;
var dieSound, jumpSound;

function preload(){
  girl_running = loadAnimation("n1.png");
  //girl_running = loadAnimation("n1.png","n2.png", "n3.png", "n4.png",
  //  "n5.png","n6.png","n7.png");
  groundImg = loadImage("ground2.png");
  treasureImg = loadImage("treasure.png");
  gameOverImg = loadImage("gameOver.png");
  girl_collided = loadAnimation("n1.png");
  obstImg = loadAnimation("obs1.png", "obs2.png");
  dieSound = loadSound("die.mp3");
  jumpSound = loadSound("jump.mp3");
}

function setup(){
  createCanvas(800,500);
  ground = createSprite(500,360,400,20);
  girl = createSprite(50,355,20,40);
  girl.addAnimation("running", girl_running);
  girl.addAnimation("collided", girl_collided);
  girl.scale = 0.3;
  
  ground.addImage(groundImg);
  invisibleGround = createSprite(200,460,400,10);
  invisibleGround.visible = false;
  
  treasuresGroup = new Group();
  obstGroup = new Group();
  gameOver = createSprite(400,250,10,10);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.8;
  gameOver.visible = false;
  girl.setCollider("rectangle",-30,-20,80,200);
}

function draw(){
  // background(255);
  // textSize(20)
  // text("Puntuación: " + score, 600,50);
  // girl.collide(invisibleGround);
  
  // if(gameState === "play"){
  //   ground.velocityX = -4;
  //   if (keyDown("space") && girl.y > 150){
  //     girl.velocityY = -10;
  //     jumpSound.play();
  //   }
  //   if(ground.x < 400){
  //     ground.x = 450;
  //   }
  //   girl.velocityY += 0.5;

  //   spawnTreasures();
  //   spawnobst();
    
  //   girl.overlap(treasuresGroup, function(collector, collected) {
  //     score++;
  //     collected.remove();
  //   });
    
  //   if(girl.isTouching(obstGroup)){
  //     gameState = "end";
  //     dieSound.play();
  //   }
  // }
  
  // if(gameState === "end"){
  //   ground.velocityX = 0;
  //   girl.velocityY = 0;
  //   gameOver.visible = true;
  //   treasuresGroup.setVelocityXEach(0);
  //   obstGroup.setVelocityXEach(0);
  //   treasuresGroup.setLifetimeEach(-1);
  //   obstGroup.setLifetimeEach(-1);
  //   girl.changeAnimation("collided", girl_collided);
  // }
  
  // drawSprites();
}

function spawnTreasures(){
  // if(frameCount % 60 === 0){
  //   var treasure = createSprite(900, random(50, 400), 20, 20);
  //   treasure.velocityX = -4;
  //   treasure.addImage(treasureImg);
  //   treasure.scale = 0.02;
  //   treasure.lifetime = 300;
  //   treasuresGroup.add(treasure);
  // }
}

function spawnobst(){
  // if(frameCount % 100 === 0){
  //   var obst = createSprite(900, random(10, 120), 40, 20);
  //   obst.scale = 0.1
  //   obst.velocityX = -10;
  //   obst.addAnimation("obst", obstImg);
  //   obst.lifetime = 300;
  //   obstGroup.add(obst);
  // }
}