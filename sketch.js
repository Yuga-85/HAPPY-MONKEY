//var gameState = PLAY;
//var PLAY = 1;
//var END = 0;

var monkey , monkey_running;//monkey_collided;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground;
var survivalTime;


//var gameOver,restart;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  monkey_collided = loadAnimation("sprite_3.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
 // gameOverImage = loadImage("gameOver.png");
 // restartImage = loadImage("restart.png");
  
  
}



function setup() {
  createCanvas(670, 400);
  score = 0;
  survivalTime = 0;
  
 
  
   monkey=createSprite(90,370,10,10);
  monkey.addAnimation("monkey_running",monkey_running);
  //monkey.addAnimation("collided", monkey_collided);
  monkey.scale=0.1;
  
   ground=createSprite(0,400,1500,10);
   ground.scale = 1;
  
  
 // gameOver = createSprite(300,150);
 // gameOver.addImage(gameOverImage);
  
 // restart = createSprite(300,200);
 // restart.addImage(restartImage);
  
 // gameOver.scale = 0.5;
 // restart.scale = 0.5;

 // gameOver.visible = false;
 // restart.visible = false;
  
  FoodGroup= new Group();
  obstacleGroup= new Group();

  }
function draw() {
  background("green");
  
 // if(gameState === PLAY){
    
    //fruits();
    //stones();
    //score = score + Math.round(getFrameRate()/60);
    
   // gameOver.visible = false;
     // restart.visible = false;
    
   

  // ground.velocityX = -(4 + 3* score/100)
    
   if(keyDown("space") && monkey.y >= 350){
     monkey.velocityY = -10;
   }
    
    monkey.velocityY = monkey.velocityY + 0.3
   monkey.collide(ground);
    
     if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach();
     score = score+1;
      }
    
  if(World.frameCount%200===0){ 
  Fruits();
  }
  
  if(World.frameCount%300===0){
    Stones();
    }
  //}
 // if(obstacleGroup.isTouching(monkey)){
   //     gameState = END;
    //}
// else if(gameState === END){
 //  gameOver.visible = true;
   // restart.visible = true;
   //ground.velocityX = 0;
    //monkey.velocityY = 0;
    //obstacleGroup.setVelocityXEach(0);
    //FoodGroup.setVelocityXEach(0);
   //monkey.changeAnimation("monkey_collided",monkey_collided);
   
   //obstacleGroup.setLifetimeEach(-1);
    //FoodGroup.setLifetimeEach(-1);
    
  //  if(mousePressedOver(restart)) {
    //  reset();
    //}
 // }
  
 

 
 drawSprites();
  stroke("grey");
  fill("black");
  textSize(14);
 //fill("black")
text("Score: "+score,150,100);
  var survivalTime = Math.round(frameCount/getFrameRate());
  text("Survival Time: "+ survivalTime,100,50)

}



  

function Fruits(){
var banana = createSprite(670,Math.round(random(170,230)),10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-(4+score*1.5/100);
  banana.lifetime = 220;
  FoodGroup.add(banana);

}

function Stones(){
 
  obstacle = createSprite(670,380,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX=-4;
  obstacle.scale=0.2;
  obstacleGroup.add(obstacle);
 
}

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  
  obstacleGroup.destroyEach();
  FoodGroup.destroyEach();
  
  monkey.changeAnimation("running",monkey_running);
  
 
  
  score = 0;
  
}




