
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var boyImage,boy;
var mango1,mango2,mango3,mango4,mango5;
var stoneObject;
var tree;
var launchers;

function preload()
{
	boyImage=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	mango1=new Mango(700,540,20);
	mango2=new Mango(300,670,20);
	mango3=new Mango(650,620,20);
	mango4=new Mango(500,550,20);
  mango5=new Mango(600,620,20);
  stoneObject=new Stone(80,480,10);
  launchers=new Launcher(stoneObject.body,{x:90,y:480});
  tree=new Trees(500,350,150,250);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  image(boyImage,80,480,200,300);
  boyImage.scale=0.5;
  
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  tree.display();
  stoneObject.display();
  launchers.display();
  detectCollision(stoneObject,mango1);
  detectCollision(stoneObject,mango2);
  detectCollision(stoneObject,mango3);
  detectCollision(stoneObject,mango4);
  detectCollision(stoneObject,mango5);
  
  drawSprites();
 
}

function keyPressedOver(){
	if(keyCode === 32){
    Matter.Body.setPosition(stoneObject.body,{x:235,y:420});
    launchers.attach(stoneObject.body)
	}
}

function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position;
stoneBodyPosition=lstone.body.position;

var distance =dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObject.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  launchers.fly();
}



