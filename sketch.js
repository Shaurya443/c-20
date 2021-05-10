var tom, jerry;
var jerryTeasing
var tomHappy,garden
function preload() {
    //load the images here
    tomImg1 = loadImage("images/cat1.png");
    jerryImg1 = loadImage("images/mouse1.png");
    tomImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    jerryImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    tomImg3 = loadImage("images/cat4.png");
    jerryImg3 = loadImage("images/mouse4.png");
    bg = loadImage("images/garden.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(700,600)
    tom.addAnimation("tom",tomImg2);
    tom.scale = 0.3
    jerry = createSprite(200,600)
    jerry.addAnimation("jerry",jerryImg2)
    jerry.scale = 0.3

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x - jerry.x <(tom.width-jerry.width)/2){
    tom.velocityX = 0
    tom.x = 300
    jerry.changeAnimation(jerryImg1)
tom.changeAnimation (tomImg3)
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    jerry.addImage("jerryTeasing",jerryImg3);
    jerry.changeImage("jerryTeasing");
    jerry.frameDelay = 25;
    tom.velocityX = -5;
    
}

}
