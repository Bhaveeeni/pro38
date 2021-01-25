var PLAY=1
var END=0
gameState=1
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300)
  
   monkey=createSprite(100,270)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  
   ground=createSprite(0,295,1200,5)
    //ground.velocityX=-4;
//ground.x=ground.width/2
  console.log(ground.x)
  
  FoodGroup=new Group();
  obstacleGroup = new Group();
  
  score=0
  
}
 
                          


function draw() {
  background("white")
  text("Survival Time : "+score,500,50)
 score=Math.ceil(frameCount/frameRate())
  
  if(keyDown("space")){
   monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY+0.8
  
 //if(ground.x<0){
   //ground.x=ground.width/2
 //}
  
  monkey.collide(ground);

   if(FoodGroup.isTouching(monkey)){
     score=score+1
 }
 camera.position.x=monkey.x
 camera.position.y=displayHeight/4
  
  
  spawnbanana()
  spawnobstacles()
  
  if(obstacleGroup.isTouching(monkey)){
    FoodGroup.destroyEach()
    obstacleGroup.setVelocityXEach=0
  monkey.velocityX=0
  }
drawSprites();
   
}

function spawnbanana(){
  if(frameCount%80===0){
    var banana=createSprite(300,120,4,5)
    banana.y=Math.round(random(120,220))
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-5
    banana.lifetime=90
    FoodGroup.add(banana)
  }
}

function spawnobstacles(){
  if(frameCount%300===0){
    var obstacle=createSprite(300,290,2,3)
    obstacle.addImage(obstaceImage)
    obstacle.scale=0.1
    obstacle.velocityX=-5
    obstacle.lifetime=90
    obstacleGroup.add(obstacle)
  }
}






