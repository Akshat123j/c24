
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 650);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper1=new Paper(100,570,50);

  dustbin1=new Dustbin(650,575,150,20);
  dustbin2=new Dustbin(565,535,20,100);
  dustbin3=new Dustbin(735,535,20,100);

  ground=new Ground(400,600,800,30);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  keyPressed()

  paper1.display();

  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode===UP_ARROW){
   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:35,y:-35})
  }
}

