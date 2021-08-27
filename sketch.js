
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg,bgImg;
var rocket,rocketImg;
var alien,alienImg;
var bullet,bulletImg;
var alien2,alien2Img;
var alien3,alien3Img;
var bullet2,bullet2Img;
var bullet3,bullet3Img;
var spaceship,spaceshipImg;
var ship,shipImg;
var gameOver, gameOverImg;
var restart, restartImg;

//game states      
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
	bgImg = loadImage("bg.jpg");
	rocketImg = loadImage("rocket.jpg");
	alienImg = loadImage("alien.jpg");
	bulletImg = loadImage("bullet.jpg")
    alien2Img = loadImage("alien2.jpg");
	alien3Img = loadImage("alien3.jpg");
    bullet2Img = loadImage("bullet.jpg");
	bullet3Img = loadImage("bullet.jpg");
	spaceshipImg = loadImage("spaceship.jpg");
	shipImg = loadImage("ship.png");
	gameOverImg= loadImage("assets/gameOver.png");
    restartImg = loadImage("assets/restart.png");

	
}

function setup() {
	createCanvas(800, 700);
	
	bg = createSprite(165,485,5,1);
	bg.addImage(bgImg);
	bg.scale = 1.3

	engine = Engine.create();
	world = engine.world;

	
	bg = createSprite(165,485,5,1);
	bg.addImage(bgImg);
	bg.scale = 1.3
	
	rocket = createSprite(400,600,600,100);
	rocket.addImage(rocketImg);
	rocket.scale = 0.7;

	spaceship = createSprite(710,600,600,100);
	spaceship.addImage(spaceshipImg);
	spaceship.scale = 0.6;

	ship = createSprite(100,600,600,100);
	ship.addImage(shipImg);
	ship.scale = 0.7;


	alien = createSprite(400,200,1000,100);
	alien.addImage(alienImg);
	alien.scale = 0.7;

    bullet = createSprite(400,460,100,100);
	bullet.addImage(bulletImg);
	bullet.scale = 0.1;

	bullet2 = createSprite(100,460,100,100);
	bullet2.addImage(bulletImg);
	bullet2.scale = 0.1;

	bullet3 = createSprite(700,460,100,100);
	bullet3.addImage(bulletImg);
	bullet3.scale = 0.1;

	alien2 = createSprite(100,200,100,100);
	alien2.addImage(alien2Img);
	alien2.scale = 0.7;

	
	alien3 = createSprite(700,200,100,100);
	alien3.addImage(alien3Img);
	alien3.scale = 0.2;

	//creating game over and restart sprites
gameOver = createSprite(220,200);
restart = createSprite(220,240);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.5;
restart.addImage(restartImg);
restart.scale = 0.5;
gameOver.visible = false;
restart.visible = false;




	Engine.run(engine);
  
}


  function draw() {
  rectMode(CENTER);
  background(0);
  
  if(keyDown("UP_ARROW")) {
	rocket.velocityY = -6 ;
	
  }
  if(keyDown("LEFT_ARROW")) {
	rocket.velocityX = -6 ;


  }
  if(keyDown("RIGHT_ARROW")) {
	rocket.velocityX = 6 ;


  }
  
  if(keyDown("SPACE")) {
	bullet.velocityY = -6 ;

	if(keyDown("SPACE")) {
		bullet2.velocityY = -6 ;
	}
	if(keyDown("SPACE")) {
		bullet3.velocityY = -6 ;
	}
	if(keyDown("SPACE")) {
		bullet3.velocityY = -6 ;
	}
	
	if(gameState === PLAY){

		
		
	
	//condition for END state
	if(rocket.isTouching(alien) || rocket.isTouching(spaceship)
	|| rocket.isTouching(alien) || rocket.isTouching(ship)){
	
	gameState = END;
	
	}

	  }
	
	  if(gameState === END) 
		{
			  gameOver.visible = true;
			 
			  restart.visible = true;
			 
			  
			  //all sprites should stop moving in the END state
			  rocket.velocityX = 0;
			  rocket.velocityY = 0;
			  alien.setVelocityXEach(0);
			  ship.setVelocityXEach(0);
			   spaceship.setVelocityXEach(0);
	  
			
			  rocket.y = 200;
			  
			  //resetting the game
			  if(mousePressedOver(restart)) 
			  {
					reset();
			  }
	
		} 
  



}

  






  drawSprites();
 
}



