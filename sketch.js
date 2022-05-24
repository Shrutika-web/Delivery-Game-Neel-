//character
var mainboy,mainboy_img;
//var mainboy2,mainboy2_img;

//bg
var bg,bg_img;
var level2_img;
//var sslevel2_img;

//speaker
var speaker,speaker_img;
var flag=0
//obstcales
var cone2,cone2animation;
var rock0,rock1;
var rock0_img,rock1_img;
var caution,cautionanimation;
var student,studentanimation;
var signal,signalanimation;
var signal2,signal2animation;
var newcone,newconeanimation;
var man,mananimation;
var boy,boyanimation;
var newcaution,newcaution_img;
var done,done_img;
var l2cone,l2coneanimation;

//hints
//var hint,hint_img;

//bricks
var brick,brick2,brick3,brick4,brick5,brick6,brick7,brick8,brick9,brick10,brick11,brick12,brick13,brick14,brick15,brick16,brick17,brick18;
var brick19,brick20,brick21,brick22,brick23,brick24,brick25,brick26,brick27,brick28,brick29,brick30,brick31,brick32;
var brick33,brick34,brick35,brick36,brick37,brick38,brick39,brick40,brick41,brick42,brick43,brick44;
var brick45;

//loacter
//var locater,locateranimation;

//tick marks
//var tick,tick_img;
//var tick2,tick2_img;

//buttons
var button;
var button2;
var button3;
var button_img;

//cars
var car,car2,car3,car4,car5;
var truck;
var newcar_img,newcar2_img,newcar3_img;
var truck2,truck2_img;
var sport,sport2;
var sport3,sport3_img;
var sport_img,sport2_img;
var truck_img;
var bike,bike_img;

//coins
var coin,coin2,coin3,coin4,coin5,coin_animation;

//house
var house2,house2_img;
//var house3,house3_img;
//var house4,house4_img;

//gamestate
var gameState=1
var text1;
 


//score
var score=0

//---------*----------

function preload(){

  //bg_img
  bg_img = loadImage("assets/bg.gif");

  //car_img
  sport_img = loadImage("assets/sport.png");
  sport2_img = loadImage("assets/sport2.png");
  truck_img = loadImage("assets/truck.png");
  truck2_img = loadImage("assets/xuv.png");
  newcar_img = loadImage("assets/newcar.png");
  newcar2_img = loadImage("assets/newcar2.png");
  newcar3_img = loadImage("assets/newcar3.png")
  bike_img = loadImage("assets/bike.png")
  sport3_img = loadImage("assets/sport.png")

  //speaker_img
  speaker_img = loadImage("assets/speaker.png")

  //hint_img


  //hint_img = loadImage("assets/hint1.png")

  //character_img
  mainboy_img = loadImage("assets/mainboy.png");
  //mainboy2_img = loadImage("assets/mainboy.png");

  //tick_img
  //tick_img = loadImage("assets/tick.png")
  //tick2_img = loadImage("assets/tick.png")
  //obstacle_img
  cautionanimation = loadAnimation("assets/caution1.gif","assets/caution2.gif","assets/caution1.gif","assets/caution2.gif")
  cone2animation = loadAnimation("assets/cone2.gif","assets/cone3.gif","assets/cone2.gif","assets/cone3.gif");
  done_img = loadImage("assets/done.png")
  //rock0_img = loadImage("assets/rock0.png")
  //rock1_img = loadImage("assets/rock1.png");
  studentanimation = loadAnimation("assets/student.gif","assets/student1.gif","assets/student3.gif","assets/student4.gif","assets/student5.gif","assets/student6.gif","assets/student7.gif","assets/student8.gif","assets/student9.gif","assets/student10.gif","assets/student11.gif")
  signalanimation = loadAnimation("assets/signal1.gif","assets/signal2.gif","assets/signal3.gif");
  newconeanimation  = loadAnimation("assets/newcone1.gif","assets/newcone2.gif","assets/newcone1.gif","assets/newcone3.gif","assets/newcone4.gif","assets/newcone5.gif","assets/newcone6.gif","assets/newcone7.gif","assets/newcone8.gif","assets/newcone9.gif","assets/newcone10.gif",);
  newcaution_img = loadImage("assets/newcaution.gif")
  mananimation = loadAnimation("assets/man1.gif","assets/man2.gif","assets/man3.gif","assets/man4.gif","assets/man5.gif","assets/man6.gif","assets/man7.gif","assets/man8.gif","assets/man9.gif","assets/man10.gif")
  boyanimation = loadAnimation("assets/boy1.gif","assets/boy2.gif","assets/boy3.gif","assets/boy4.gif","assets/boy5.gif","assets/boy6.gif","assets/boy7.gif","assets/boy8.gif","assets/boy9.gif","assets/boy10.gif",) 
  signal2animation = loadAnimation("assets/signal1.gif","assets/signal2.gif","assets/signal3.gif");
  l2coneanimation = loadAnimation("assets/L2cone1.gif","assets/L2cone2.gif","assets/L2cone3.gif","assets/L2cone4.gif","assets/L2cone5.gif","assets/L2cone6.gif","assets/L2cone7.gif","assets/L2cone8.gif","assets/L2cone9.gif","assets/L2cone10.gif");
  //locateranimation = loadAnimation("assets/locater1.,gif","assets/locater2.,gif","assets/locater3.,gif","assets/locater4.,gif","assets/locater5.,gif","assets/locater6.,gif","assets/locater7.,gif","assets/locater8.,gif","assets/locater9.,gif")

  //level2
  level2_img = loadImage("assets/level2.jpg")

  //house_img
  house2_img = loadImage("assets/house4.png");
  //house3_img = loadImage("assets/house8.png")
  //house4_img = loadImage("assets/house5.png")

  //button_img
  button_img = loadImage("../assets/next.png");

  //coin_img
  coin_animation = loadAnimation("assets/coin.gif","assets/coin2.gif","assets/coin3.gif","assets/coin4.gif")

}

//-----*------

function setup() {
  createCanvas(1440,822);
  
  //character
  mainboy = createSprite(100,760,10,10);
  mainboy.addImage(mainboy_img);
  mainboy.scale = 0.08

  //mainboy2 = createSprite(100,780,10,10);
  //mainboy2.addImage(mainboy2_img);
  //mainboy2.scale = 0.1

  //obstacles
 //rock0 = createSprite(1030,200,20,20);
 //rock0.addImage(rock0_img);
 //rock0.scale = 0.2

 //rock1 = createSprite(90,695,20,20);
 //rock1.addImage(rock1_img);
 //rock1.scale = 0.06

 //hint
 //hint = createSprite(600,400,20,20);
 //hint.loadAnimation(hint_img)
 //hint.scale = 0.1

 //bricks
 brick = createSprite(31,740,75,160);
 brick2 = createSprite(1407,200,55,400);
 brick3 = createSprite(138,745,20,65);
 brick4 = createSprite(153,695,20,70);
 brick5 =createSprite(273,596,20,250);
 brick6 =createSprite(380,585,20,100);
 brick7 = createSprite(452,706,20,200);
 brick8 =createSprite(520,757,20,170);
 brick9 = createSprite(873,787,18,57);
 brick10 =createSprite(982,760,20,80);
 brick11 =createSprite(1025,700,20,200);
 brick12 =createSprite(1120,605,20,100);
 brick13 =createSprite(1200,550,20,100);
 brick14 =createSprite(1330,494,23,240);
 brick15 =createSprite(50,620,10,150);
 brick16 =createSprite(190,568,10,160);
 brick17 =createSprite(308,496,10,150);
 brick18 =createSprite(405,410,10,120);
 brick19 =createSprite(475,312,10,123);
 brick20 =createSprite(517,210,10,110);
 brick21 =createSprite(531,80,10,160);
 brick22 =createSprite(980,19,10,770);
 brick23 =createSprite(599,35,10,80);
 brick24 =createSprite(592,297,10,100);
 brick25 =createSprite(680,278,10,100);
 brick26 =createSprite(778,279,10,100);
 brick27 =createSprite(865,299,10,100);
 brick28 =createSprite(935,330,10,100);
 brick29 =createSprite(1000,380,10,100);
 brick30 =createSprite(1055,475,10,130);
 brick31 =createSprite(1070,537,10,55);
 brick32 =createSprite(1070,167,20,175);
 brick33 =createSprite(1310,167,20,175);
 brick34 =createSprite(1191,74,15,257);
 brick35 = createSprite(1235,248,25,140);
 brick36 =createSprite(1088,248,25,53);
 brick37 =createSprite(580,235,10,170);
 brick38 = createSprite(631,125,10,80);
 brick39 = createSprite(682,87,10,65);
 brick40 = createSprite(849,74,13,270);
 brick41 = createSprite(984,215,32,150);
 brick42 = createSprite(1015,270,10,100);
 brick43 = createSprite(1165,308,10,300);
 brick44 = createSprite(1312,348,10,89);
 brick45 = createSprite(1190,480,10,300)

 //tick
 //tick = createSprite(340,25,20,20);
 //tick.addImage(tick_img);
 //tick.scale = 0.05

 //tick2 = createSprite(588,448,20,20);
 //tick2.addImage(tick2_img);
 //tick2.scale = 0.05

 
 //speaker
 //speaker = createSprite(1250,710,10,10);
 //speaker.addImage(speaker_img);
 //speaker.scale = 0.6

//obstacles
 done = createSprite(700,620,20,20);
 done.addImage(done_img)
 done.scale = 0.22

 cone2 = createSprite(270,105,20,20);
 cone2.addAnimation("move",cone2animation)
 cone2.scale = 0.3

 caution = createSprite(565,20,20,20);
 caution.addAnimation("blink",cautionanimation);  
 caution.scale = 0.13

 student = createSprite(750,330,20,20);
 student.addAnimation("walk",studentanimation);
 student.scale = 0.15

 man = createSprite(330,160,20,20);
 man.addAnimation("walk",mananimation);
 man.scale = 0.17
 
 boy = createSprite(420,590,20,20);
 boy.addAnimation("walk",boyanimation);
 boy.scale = 0.15

 signal = createSprite(250,20,20,20);
 signal.addAnimation("bulb",signalanimation);
 signal.scale = 0.08;

 signal2 = createSprite(1410,635,80,80);
 signal2.addAnimation("bulb",signal2animation);
 signal2.scale = 0.07;

 newcaution = createSprite(80,400,20,20);
 newcaution.addImage(newcaution_img);
 newcaution.scale = 0.14

 newcone = createSprite(1030,190,20,20);
 newcone.addAnimation("round",newconeanimation);
 newcone.scale = 0.1


 l2cone = createSprite(500,500,20,20);
 l2cone.addAnimation("moving",l2coneanimation)
 l2cone.scale = 0.5
 //l2cone.shapeColor = "red"
 l2cone.visible=true



  //coins
  coin = createSprite(450,453,20,20)
  coin.addAnimation("moving",coin_animation)
  coin.scale = 0.09
  coin2 = createSprite(1200,509,20,20);
  coin2.addAnimation("moving",coin_animation)
  coin2.scale = 0.09
  coin3 = createSprite(900,113,20,20);
  coin3.addAnimation("moving",coin_animation)
  coin3.scale = 0.09
  coin4 = createSprite(1350,150,20,20);
  coin4.addAnimation("moving",coin_animation)
  coin4.scale = 0.09
  coin5 = createSprite(565,50,20,20);
  coin5.addAnimation("moving",coin_animation)
  coin5.scale = 0.09

  
  //house
    house2 = createSprite(132,155,20,20);
    house2.addImage(house2_img);
    house2.scale = 0.37

  //house3 = createSprite(130,150,20,20);
  //house3.addImage(house3_img);
  //house3.scale = 0.35

  //house4 = createSprite(1195,162,20,20);
  //house4.addImage(house4_img);
  //house4.scale = 0.34

  //cars
  car = createSprite(420,480,23,40);
  car.addImage(newcar_img);
  car.scale = 0.14

  car2 = createSprite(472,400,23,49);
  car2.addImage(newcar2_img);
  car2.scale = 0.13

  car3 = createSprite(957,741,26,43);
  car3.addImage(newcar3_img);
  car3.scale = 0.13;

  car4 = createSprite(770,110,20,54);
  car4.addImage(newcar_img);
  car4.scale = 0.15

  car5 = createSprite(420,80,10,10)
  car5.addImage(newcar2_img);
  car5.scale = 0.14

  truck = createSprite(1345,60,29,55);
  truck.addImage(truck_img)
  truck.scale = 0.25

  truck2 = createSprite(417,145,50,20);
  truck2.addImage(truck2_img);
  truck2.scale = 0.32

  sport = createSprite(257,300,20,20);
  sport.addImage(sport_img)
  sport.scale = 0.1

  sport2 = createSprite(290,330,20,20);
  sport2.addImage(sport2_img)
  sport2.scale = 0.16

  sport3 = createSprite(980,500,20,20);
  sport3.addImage(sport3_img)
  sport3.scale = 0.1
  //btn
  button=createSprite(1400,20,30,30);
  button.addImage(button_img)
  button.scale = 0.2

  button2=createSprite(1390,100,30,30);
  button2.shapeColor = "red"

  bike = createSprite(1350,450,20,20);
  bike.addImage(bike_img);
  bike.scale = 0.12

  //text2 = text( "Hint 1: Deliver at the location",400,500);
  fill("black")
  text1 = text( "Hint 1: Deliver at the location",);
  //button3=createSprite(1390,100,30,30)
  //button3.shapeColor= "blue"
}

function draw() {
  createEdgeSprites();
  mainboy.bounce(car);
  mainboy.bounce(car2);
  mainboy.bounce(car3);
  mainboy.bounce(car4);
  mainboy.bounce(truck);
  
  //text1.visible = true
//rotations
house2.rotation = 34
car.rotation=8
car2.rotation=58
car3.rotation=28
car4.rotation=90
car5.rotation=90
truck.rotation=170
truck2.rotation=270
sport.rotation = 105
sport2.rotation = 114
sport3.rotation = 260
//house2.rotation = 180
bike.rotation = 75
//brick3.rotation = 20
newcaution.rotation = 270
signal2.rotation = 450
//brick rotation
brick4.rotation = 30
brick5.rotation = 56
brick6.rotation = 349;
brick7.rotation = 320;
brick8.rotation = 300;
brick9.rotation = 70;
brick10.rotation= 30;
brick11.rotation = 41;
brick12.rotation = 52;
brick13.rotation = 59;
brick14.rotation = 68;
brick15.rotation = 75;
brick16.rotation = 64;
brick17.rotation = 53;
brick18.rotation = 42;
brick19.rotation = 30;
brick20.rotation = 14;
brick22.rotation = 90;
brick24.rotation = 74;
brick25.rotation = 84;
brick26.rotation = 95;
brick27.rotation = 110;
brick28.rotation = 300;
brick29.rotation = 318;
brick30.rotation = 340;
brick31.rotation = 356;
brick34.rotation = 90;
brick35.rotation = 90;
brick36.rotation = 90;
brick37.rotation = 18;
brick38.rotation = 42;
brick39.rotation = 70;
brick40.rotation = 90;
brick42.rotation = 320;
brick43.rotation = 90;
brick45.rotation = 55

if (gameState===1) {
 background(bg_img)
 done.visible =false
 l2cone.visible = false;

 text1.visible=true;

 fill("black")

  //ellipse(720,543,355);
  //fill("red");
  //ellipse(630,545,280);
  //fill("blue")
  //ellipse(815,545,280);
  //fill("pink");
  //ellipse(800,573,260)
  
  fill("white")
  rect(600,420,200,40)
  fill("black")
  textSize(14)
  text("Hint 1: Deliver at the location",604,440)
  fill("white")
  //rect(600,460,200,40)
  fill("black")
  textSize(14)
  //text("Hint 2: Deliver at the location",604,480)
  fill("black")
  textSize(20)
  text("Score:"+score,80,30)
  fill("black")
  textSize(15)
  text("Target Score: 100",350,30)
  fill("white")
  rect(330,20,15,15);
  
//mainboy2.visible = false;
 mainboy.visible=true
 button.visible=true
// button2.visible=false
 //l2cone.visible = false
 //car.visible = false
 //car2.visible = false
 //car3.visible = false
 //car4.visible = false
// button.visible = false;
 car5.visible = false
 //tick.visible = false;
 //bricks
 //tick2.visible = false
 
 brick.visible = false;
 brick2.visible = false;
 brick3.visible = false;
 brick4.visible = false;
 brick5.visible = false;
 brick6.visible = false;
 brick7.visible = false;
 brick8.visible = false;
 brick9.visible = false;
 brick10.visible = false;
 brick11.visible = false;
 brick12.visible = false;
 brick13.visible = false;
 brick14.visible = false;
 brick15.visible = false;
 brick16.visible = false;
 brick17.visible = false;
 brick18.visible = false;
 brick19.visible = false;
 brick20.visible = false;
 brick21.visible = false;
 brick22.visible = false;
 brick23.visible = false;
 brick24.visible = false;
 brick25.visible = false;
 brick26.visible = false;
 brick27.visible = false;
 brick28.visible = false;
 brick29.visible = false;
 brick30.visible = false;
 brick31.visible = false;
 brick32.visible = false;
 brick33.visible = false;
 brick34.visible = false;
 brick35.visible = false;
 brick36.visible = false;
 brick37.visible = false;
 brick38.visible = false;
 brick39.visible = false;
 brick40.visible = false;
 brick41.visible = false;
 brick42.visible = false;
 brick43.visible = false;
 brick44.visible = false;
 brick45.visible = false;


 //truck.visible = false
//if(mainboy.isTouching(brick)||mainboy.isTouching(brick2)||mainboy.isTouching(brick3)||mainboy.isTouching(brick4)||mainboy.isTouching(brick5)||mainboy.isTouching(brick6)||mainboy.isTouching(brick7)||mainboy.isTouching(brick8)||mainboy.isTouching(brick9)||mainboy.isTouching(brick10)||mainboy.isTouching(brick11)||mainboy.isTouching(brick12)||mainboy.isTouching(brick13)||mainboy.isTouching(brick14)||mainboy.isTouching(brick15)||mainboy.isTouching(brick16)||mainboy.isTouching(brick17)||mainboy.isTouching(brick18)||mainboy.isTouching(brick19)||mainboy.isTouching(brick20)||mainboy.isTouching(brick21)||mainboy.isTouching(brick22)||mainboy.isTouching(brick23)||mainboy.isTouching(brick24)||mainboy.isTouching(brick25)||mainboy.isTouching(brick26)||mainboy.isTouching(brick27)||mainboy.isTouching(brick28)||mainboy.isTouching(brick29)||mainboy.isTouching(brick30)||mainboy.isTouching(brick31)||mainboy.isTouching(brick32)||mainboy.isTouching(brick33)||mainboy.isTouching(brick34)||mainboy.isTouching(brick35)||mainboy.isTouching(brick36)||mainboy.isTouching(brick37)||mainboy.isTouching(brick38)||mainboy.isTouching(brick39)||mainboy.isTouching(brick40)||mainboy.isTouching(brick41)||mainboy.isTouching(brick42)||mainboy.isTouching(brick43)||mainboy.isTouching(brick44)||mainboy.isTouching(brick45)){
  //mainboy.x=110
  //mainboy.y=760
//}
 
  if(keyDown("up"))
  {
    mainboy.y=mainboy.y-8
    mainboy.rotation=360
  }

  if(keyDown("down"))
  {
    mainboy.y=mainboy.y+8
  }

  if(keyDown("right"))
  {
    mainboy.x=mainboy.x+8
    mainboy.rotation=90
  }


  if(keyDown("left"))
  {
    mainboy.rotation=315
    mainboy.x=mainboy.x-8
  }
  if(mainboy.isTouching(coin4)){
   score=score+20
   coin4.remove()
  }
  if(mainboy.isTouching(coin2)){
    score=score+20
    coin2.remove()
   }
   if(mainboy.isTouching(coin3)){
    score=score+20
    coin3.remove()
   }
   if(mainboy.isTouching(coin)){
    score=score+20
    coin.remove()
   }
  if(mainboy.isTouching(coin5)){
    score=score+20
    coin5.remove()
  }
  if(score===100){
    button.visible = true;

  }
  

  if(mainboy.isTouching(truck)){

     text1.visible=false
     var trick2=text("hello",500,500);
    //text("Delivery 1 successfully delivered",500,300)
    done.visible = true
    fill("white")
    rect(600,450,240,40)
    fill("black")
    //textSize(14)
     flag=1
    //text("Hint 2:",630,450)
   }
   if(flag===1){
    text("Hint 2: Deliver at the next location",604,470)
   }
   if(mainboy.isTouching(car4)){
     fill("blue")
     rect(610,490,180,30)
    fill("black")
    textSize(17)
     text("Delivery 2 successful",622,516)
     fill("pink")
     rect(597,580,250,33)
     fill("black")
     text("PLS GO TO THE NEXT LEVEL", 600,600)
   }
    
}
 if (mousePressedOver(button)) {
   gameState=2
 }

 //ellipseMode(RADIUS);
   
if (gameState===2) {
text("level 2", 200,200)
  background(level2_img)
  var character=createSprite(800,500,150,150)
  character.shapeColor="blue"
   //visible = false for level2
   mainboy.x = 100
   mainboy.y = 760
   //mainboy2.visible = true
 
   l2cone.visible = true
   mainboy.visible = true
 
   
 //l2cone.addAnimation("rotate",l2coneanimation) 
 //l2cone.scale = 0.8;
 
   button.visible=false
   button2.visible = true
   cone2.visible = false;
   //rock0.visible = false;
   //rock1.visible = false;
   caution.visible = false;
   //person.visible = false;
   signal.visible = false;
   newcone.visible = false;
   newcaution.visible = false;
   car.visible = false;
   car2.visible = false;
   car3.visible = false;
   car4.visible = false;
   car5.visible = false;
   truck.visible = false;
   truck2.visible = false;
   sport.visible = false;
   sport2.visible = false;
   bike.visible = false;
   //coin.visible = false;
   coin2.visible = false;
   coin3.visible = false;
   coin4.visible = false;
   coin5.visible = false;
   house2.visible = false;
   //house3.visible = false;
   //house4.visible = false;
 
   if(keyDown("up"))
   {
     mainboy.y=mainboy.y-4
     mainboy.rotation=360
   }
 
   if(keyDown("down"))
   {
     mainboy.y=mainboy.y+4
   }
 
   if(keyDown("right"))
   {
     mainboy.x=mainboy.x+4
     mainboy.rotation=45
   }
 
 
   if(keyDown("left"))
   {
     mainboy.rotation=315
     mainboy.x=mainboy.x-4
   }
 
  }

  drawSprites();

}