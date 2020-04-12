var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;
var wall7;
var wall8;
var wall9;
var wall10;
var wall11;
var wall12;
var wall13;
var wall14;
var wall15;
var wall16;
var spr2;
var spr4;
var spr;

function setup() {
  background(0);
  createCanvas(700, 700);
  //bottom right1;
  wall1 = createSprite(
  100, 650, 140, 70);
  wall1.shapeColor = color(0);
  //bottom right2
  wall2 = createSprite(
    390, 650, 300, 70);
    wall2.shapeColor = color(0);
   //bottom left
    wall3 = createSprite(
      645, 650, 70, 70);
      wall3.shapeColor = color(0);
      //count from bottom, line2, right;
      wall4 = createSprite(
        205, 580, 70, 70);
        wall4.shapeColor = color(100,100,0);
        //line3 right1
        wall5 = createSprite(
          135, 510, 70, 70);
          wall5.shapeColor = color(0);
          //line3 right2
          wall6 = createSprite(
            390, 510, 300, 70);
            wall6.shapeColor = color(0);
            //line5 right
            wall7 = createSprite(
              200, 370, 400, 70);
              wall7.shapeColor = color(0);
             //top right1
              wall8 = createSprite(
              70, 90, 140, 70);
              wall8.shapeColor = color(0);
              //line7 right;
              wall9 = createSprite(
                235, 230, 330, 70);
                wall9.shapeColor = color(0);
                //top right2;
                wall10 = createSprite(
                  340, 90, 260, 70);
                  wall10.shapeColor = color(0);
                  //top left;
                  wall11 = createSprite(
                    540, 125, 140, 140);
                    wall11.shapeColor = color(0);
                    //line7 left
                    wall12 = createSprite(
                      575, 230, 70, 70);
                      wall12.shapeColor = color(0);
                      //line5 left
                      wall13 = createSprite(
                        595, 370, 240, 70);
                        wall13.shapeColor = color(0);
                         //line4 left;
                        fire = createSprite(
                          510, 440, 70, 70);
                          fire.shapeColor = color(100,0,0);
                          //line6 right;
                          water = createSprite(
                            235, 300, 70, 70);
                           water.shapeColor = color(0,0,100);
                           //button
                           button1=createSprite(235,180,20,20);

                           door=createSprite(510,300,70,70)
    spr2 = createSprite(0, 0, 50, 50);
    spr2.shapeColor = color(128);
    
    spr = createSprite(
      570, 650, 40, 40);
    spr.shapeColor = color(255);
    
    
  }
  function draw() {
    background(50);
   
    

    walls=[wall1, wall2,wall3,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13];
    for(i=0;i<12;i++){
      spr2.collide(walls[i]);
      spr.collide(walls[i]);
    };
    spr2.collide(walls[1,0]);
    spr.displace(wall4);
    spr2.displace(wall4);
    spr.collide(door);
    //fire reaction
  if (spr.overlap(fire)){
    fire.shapeColor=color(200,0,0);
  }
  else{
    fire.shapeColor=(100,0,0);
  }
  if (spr.overlap(fire)){
    //game over;
  }
  //water reaction
  if (spr2.overlap(water)){
    water.shapeColor=color(0,0,200);
  }
  else{
    water.shapeColor=(0,0,100);
  }
  if (spr.overlap(water)){
    //game over;
  }
  

  if (spr2.overlap(button1)){
    removeSprite(door)
  }
  else{
    //drawSprites(door)
  }
  
    drawSprites();

  }
  
  function keyPressed() {
      if (keyCode == RIGHT_ARROW) {
        spr.setSpeed(1.5, 0);
      }
      else if (keyCode == DOWN_ARROW) {
        spr.setSpeed(1.5, 90);
      }
      else if (keyCode == LEFT_ARROW) {
        spr.setSpeed(1.5, 180);
      }
      else if (keyCode == UP_ARROW) {
        spr.setSpeed(1.5, 270);
      }
      else if (key == ' ') {
        spr.setSpeed(0, 0);
      }
      if (key == 'd') {
        spr2.setSpeed(1.5, 0);
      }
      else if (key == 's') {
        spr2.setSpeed(1.5, 90);
      }
      else if (key == 'a') {
        spr2.setSpeed(1.5, 180);
      }
      else if (key == 'w') {
        spr2.setSpeed(1.5, 270);
      }
      else if (key == 'x') {
        spr2.setSpeed(0, 0);
      }
      return false;
    }
    