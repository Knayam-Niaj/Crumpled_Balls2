
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var trashR, trashL, trash, trashImg;


function preload(){
	trashImg = loadImage("trash.png");
}

function setup() {
	createCanvas(1400, 600);		
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(10, 10, 70);

	ground = new Ground(700, 580, 1400, 20);

	trash = new Trash(1000, 470, 200, 20);
	trashL = new Trash(910, 470, 20, 200);
	trashR = new Trash(1090, 470, 20, 200);

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background("white");

  
  textSize(13);
  text("PRESS AND HOLD THE UP ARROW TO MAKE THE BALL IN", 530, 100);

  paper.display();

  ground.display();

  trash.display();
  trashL.display();
  trashR.display();

  imageMode(CENTER);
  image(trashImg, 1000, 470, 200, 200);

  keyPressed()


}


function keyPressed(){
	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:10, y:-12})
	}
}


