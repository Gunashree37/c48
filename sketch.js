var tieFighter, x_Wing, tieFighter_Vader, tieSound, x_WingSound, deathStarImage
var bg, pew_pew
var gameState = "PLAY"

var tie1, tie3, vaderTie, luke_X_wing, pew_pew, bad_pew_pew;
var count = 5;

function preload(){
deathStarImage = loadImage("deathStarImage.png")
tieFighter_Vader = loadImage("tieVader.png")
tieFighter = loadImage("tieFighter.png")
x_Wing = loadImage("X-wing.png")
pew_pew= loadImage("lazer_pew_pew.png")
tieSound = loadSound("tieFighterSound.mp3")
x_WingSound = loadSound("xWingSound.mp3")
tsar_bomba = loadImage("proton_pew_pew.png")
}




function setup() {
  createCanvas(400, 600);
  bg=createSprite(200,200)
  bg.addImage(deathStarImage)
  bg.scale=2.3
 
  tie1 = createSprite(120, 550)
  tie1.addImage(tieFighter)
  tie1.scale=0.15

  vaderTie = createSprite(200, 550)
  vaderTie.addImage(tieFighter_Vader)
  vaderTie.scale=0.05
  
  tie3 = createSprite(275, 550)
  tie3.addImage(tieFighter)
  tie3.scale=0.15
 
  luke_X_wing = createSprite(205, 390)
	luke_X_wing.addImage(x_Wing)
  luke_X_wing.scale=0.05
	luke_X_wing.rotation = 180
  luke_X_wing.rotateToDeirection = true

  bulletGroup= new Group()
  b1Group= new Group()
	 
}


function draw() {
  background("black");  

  if(gameState==="PLAY"){
    //x_WingSound.play()
    //tieSound.play()
    
    bg.velocityY=1

    
  
  if(keyDown("RIGHT_ARROW")){
    luke_X_wing.x+=5
  }
 
  if(keyDown("LEFT_ARROW")){
    luke_X_wing.x-=5
  }

  if(keyWentDown("s")){
    protonBomb()
  }
  createBullet()
  drawSprites();

  if(bulletGroup.isTouching(luke_X_wing)){
 
  for(var i=0;i<bulletGroup.length;i++){     
       
   if(bulletGroup[i].isTouching(luke_X_wing)){
        bulletGroup[i].destroy()
       
       count-=1
       console.log(count)
        } 
  
  }
 }
 if(count<=0){
   luke_X_wing.destroy();
 }

  
}
  
 
}   

function createBullet() {
  if(frameCount%80===0){
  var bullet= createSprite(random(120, 275), vaderTie.y);                                          
  bullet.velocityY = -2;
 
  bullet.addImage(pew_pew)
  bullet.scale=0.05
  bullet.lifetime = 300;
  bulletGroup.add(bullet);
  }
}

function protonBomb() {
  var b1= createSprite(luke_X_wing.x, luke_X_wing.y);                                          
  b1.velocityY = -2;
  b1.addImage(tsar_bomba)
  b1.rotation = 270
  b1.rotateToDeirection = true
  b1.scale=0.04
  b1.lifetime = 300;
  b1Group.add(b1);
  
}