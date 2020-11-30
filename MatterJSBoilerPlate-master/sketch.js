const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = []
var plinkos = []
var divisions = []

var divisionHeight=300;

function setup() {
	createCanvas(480,800);


	engine = Engine.create();
	world = engine.world;

	groundObj1 = new Ground(240,795,800,10);
	groundObj2 = new Ground(475,400,10,800);
	groundObj3 = new Ground(5,400,10,800);

	divisionObj = new Divisions(200,200,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj1.display();
  groundObj2.display();
  groundObj3.display();
  
  divisionObj.display();
}



