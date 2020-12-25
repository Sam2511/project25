
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var cage1,cage2,cage3,cage4,cage5,cage6;
var bin;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	
bin = new dustbin(1450,425);
paper = new Paper(100,490,70);
ground = new Ground(800,500,1600,40);
cage1 = new cage(1410,425,10,100);
cage2 = new cage(1490,425,10,100);
//cage3 = new cage(1450,470,100,10);

}


function draw() {
  rectMode(CENTER);

  background(255);
  


  cage1.display();
  cage2.display();
  paper.display();
  bin.display();
  ground.display();
  

  

  drawSprites();
 
}

function keyPressed(){
	
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:135 ,y:-100});
		
	}
}













