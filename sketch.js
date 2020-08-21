
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, platform_1, platform_2, platform_3;

function setup() {
	
	createCanvas(8000, 7000);
 	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	paper= new Paper(465,100,25);
	ground= new Ground(745,800,9990,40,PI/2);
	platform_1= new Rectangle(930,785,300,20,PI/2);
	platform_2= new Rectangle(770,750,20,100,PI/2);
	platform_3= new Rectangle(1075,750,20,100,PI/2);
}


function draw() {

  rectMode(CENTER);
  background(350);

  Engine.update(engine);
  
  paper.display();
  ground.display();
  platform_1.display();
  platform_2.display();
  platform_3.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body, paper.body.position, {x: 95, y: -95})
	 }
   }
   
   



