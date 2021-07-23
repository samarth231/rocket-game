var space, spaceImg, rocket, rocketImg, asteroid, asteroidImg;
var score = 0;
var asteroidGroup;
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
    spaceImg = loadImage("space.jpg");
    rocketImg = loadImage("rocket.png");
    asteroidImg = loadImage("asteroid.png");
    endImg =loadAnimation("gameOver.png");
}

function setup() {
   
    createCanvas(windowWidth,windowHeight);
    
    space=createSprite(width/2,200);
    space.addImage(spaceImg);
    spaceImg.velocityY = 4;
    
    
    
    rocket = createSprite(width/2,height-20,20,20);
    rocket.addImage("rocket",rocketImg);
    rocket.scale=0.08;
      
      
    asteroidGroup=new Group();
  
}

function draw() {
    if(gameState===PLAY){
        background(0);
        rocket.x = World.mouseX;
        
        edges= createEdgeSprites();
        rocket.collide(edges);
        
        
        if(space.y > height ){
          space.y = height/2;
        }
        
          createAsteroids();
          
        if (frameCount%60 == 0){
            score + 100

        }    
         
            
       
            if(asteroidGroup.isTouching(rocket)) {
              gameState=END;
              
            rocket.velocityY = 0
              
              asteroidGroup.destroyEach();
             
              
              asteroidGroup.setVelocityYEach(0);
      
           
          }
        }
        
        drawSprites();
        textSize(20);
        fill(255);
        text("Score: "+ score,150,30);
        }


function createAsteroids() {
    if (World.frameCount % 200 == 0) {
    var asteroids = createSprite(Math.round(random(50, width-50),40, 10, 10));
    asteroids.addImage(asteroidImg);
    asteroids.scale=0.3;
    asteroids.velocityY = 3;
    asteroids.lifetime = 250;
    asteroidGroup.add(asteroids);
    }
  }
