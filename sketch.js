var positions = [
  { x: 100, y: 650, width: 140, height: 70 }, // bottom right1
  { x: 390, y: 650, width: 300, height: 70 }, // bottom right2
  { x: 645, y: 650, width: 70, height: 70 },  // bottom left
  { x: 135, y: 510, width: 70, height: 70 },  //line3, right1;
  { x: 390, y: 510, width: 300, height: 70 }, //line3, right2;
  { x: 200, y: 370, width: 400, height: 70 }, //line5 right;
  { x: 70, y: 90, width: 140, height: 70 }, //top right1
  { x: 235, y: 230, width: 330, height: 70 }, //line7 right;
  { x: 340, y: 90, width: 260, height: 70 }, //top right2;
  { x: 540, y: 125, width: 140, height: 140 }, //top left;
  { x: 575, y: 230, width: 70, height: 70 }, //line7 left;
  { x: 595, y: 370, width: 240, height: 70 }, //line5 left;
];

var walls = [];

var button1;
var water;
var fire;
var spr2;
var box;
var spr;
var fireboy;
function setup() {
    background(0);
    createCanvas(700, 700);
    fireboy = loadImage('./fireboy.jpg')
    for (let i = 0; i < positions.length; i++) {
      let position = positions[i];
      let wall = createSprite(position.x, position.y, position.width, position.height);
      wall.shapeColor = color(0);
      walls[i] = wall;
    }
    
     //line4 left;
    fire = createSprite(510, 440, 70, 70);
    fire.shapeColor = color(100,0,0);
    //line6 right;
    water = createSprite(235, 300, 70, 70);
    water.shapeColor = color(0,0,100);
    //button
    button1=createSprite(235,180,20,20);
    //door
    door=createSprite(510,300,70,70);
    //watergirl
    spr2 = createSprite(0, 0, 50, 50);
    spr2.shapeColor = color(128);
    //fireboy
    spr = createSprite(570, 650, 50, 50);
    spr.shapeColor = color('black');
    spr.addImage(fireboy);
 }
function draw() {
    background(50);

   for(i=0;i<12;i++){
      spr2.collide(walls[i]);
      spr.collide(walls[i]);
    };
    spr2.collide(walls[1,0]);
    spr.displace(walls[3]);
    spr2.displace(walls[3]);
    spr.collide(door);
    //fire reaction
    if (spr.overlap(fire)){
      fire.shapeColor=color(100,0,0); 
    }
    else{
      fire.shapeColor=color(200,0,0)
    }
    if (spr2.overlap(fire)){
      location.replace("./index3.html");
    }
    //water reaction
    if (spr2.overlap(water)){
      water.shapeColor=color(0,0,100);
    }
    else{
      water.shapeColor=color(0,0,200);
    }
    if (spr.overlap(water)){
      location.replace("./index3.html");
    }
    

    if (spr2.overlap(button1)){
      removeSprite(door)
    }
    else{
      //drawSprites(door)
    }
    
      drawSprites();
}

var database = firebase.database(); 
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

function updateFireboyPosition(){
  database.ref("fireboy").update({
    'moveright' : spr.setSpeed(1.5, 0),
    'movedown' : spr.setSpeed(1.5, 90),
    'moveleft' : spr.setSpeed(1.5, 180),
    'moveup' : spr.setSpeed(1.5, 270),
    'stop' : spr.setSpeed(0, 0)
  })
}

function updateWatergirlPosition(){
  database.ref("watergirl").update({
    'moverightW' : spr2.setSpeed(1.5, 0),
    'movedownW' : spr2.setSpeed(1.5, 90),
    'moveleftW' : spr2.setSpeed(1.5, 180),
    'moveupW' : spr2.setSpeed(1.5, 270),
    'stopW' : spr2.setSpeed(0, 0)
  })
}

firebase.database().ref().on("value", function updateFireboyPosition(snapshot){
  var obj = snapshot.val();
  spr.setSpeed(1.5, 0) = obj.fireboy.moveright;
  spr.setSpeed(1.5, 90) = obj.fireboy.movedown;
  spr.setSpeed(1.5, 180) = obj.fireboy.moveleft;
  spr.setSpeed(1.5, 270) = obj.fireboy.moveup;
  spr.setSpeed(0, 0) = obj.fireboy.stop;
}, function (error){
  console.log("Error" + error.code);
}
)

firebase.database().ref().on("value", function updateWatergirlPosition(snapshot){
  var obj = snapshot.val();
  spr2.setSpeed(1.5, 0) = obj.fireboy.moverightW;
  spr2.setSpeed(1.5, 90) = obj.fireboy.movedownW;
  spr2.setSpeed(1.5, 180) = obj.fireboy.moveleftW;
  spr2.setSpeed(1.5, 270) = obj.fireboy.moveupW;
  spr2.setSpeed(0, 0) = obj.fireboy.stopW;
}, function (error){
  console.log("Error" + error.code);
}
)
