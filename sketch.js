var btImg1, btImg2,btImg3,btImg4;
var obstacles, battleShip,rand,backGroundImg,ground;


function preload() {
    btImg1 = loadImage("bt1Final.png")
    btImg2 = loadImage("bt2Final.jpg")
    btImg3 = loadImage("bt3Finall.png")
    btImg4 = loadImage("bt4Final.png")
    backGroundImg = loadImage("back.png")


}

function setup() {
    createCanvas(1000,1000)
    rand = Math.round(random(1,4));
    
    ground = createSprite(300,170);
    ground.addImage(backGroundImg);
    ground.velocityY = 3;

    battleShip = createSprite(500,500,10,10);
    

    

    switch(rand){
        case 1:battleShip.addImage(btImg1);
        
        break;
        case 2:battleShip.addImage(btImg2);
        break;
        case 3:battleShip.addImage(btImg3);
        break;
        case 4:battleShip.addImage(btImg4)
        break;
        default:break
    }
    
    battleShip.scale = 0.3;
  
}

function draw() {
    background(0)


    drawSprites();
    
    
    battleShip.x = mouseX;
    battleShip.y = mouseY;

    if(ground.y>600){
        ground.y = 200;
    }

}


