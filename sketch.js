const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	paperI = loadImage("paper.png");
	dustbinImg = loadImage('dustbin.png');
	//dustbinImg = loadImage('sprites/dustbin.png');

}

function setup() {
	var canvas = createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

	// db = createSprite(1100,575,200,200);
	// db.addImage(dustbinImg);	
	// db.scale = 0.9; 
	
	 

	//Create the Bodies Here.

	// paper = new Paper(200,665,70);

	// dustbin1 = new Dustbin(1015,595,20,200);
	// dustbin2 = new Dustbin(1182,595,20,200);
	// dustbin3 = new Dustbin(1098,680,180,20);

	// db = Bodies.rectangle(300,300,70,70,{isStatic: true})
	// db.image = dustbinImg;

	// ground = new Ground(700,690,1400,10);

	ground = new Ground(500,490,1000,20);

	paper = new Paper(100,100,20);

	dustbin = new Dustbin(900,425);

	
	Engine.run(engine);
	
}


function draw() {
  //background(200);
 
  

//   paper.display();
//   dustbin1.display();
//   dustbin2.display();
//   dustbin3.display();
//   ground.display();

rectMode(CENTER);
  	background("lightblue");
  
  	paper.display();
	ground.display();
	dustbin.display();

	
  	drawSprites();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
	
		if(keyWentDown(UP_ARROW) || keyWentDown("w")){
			Body.applyForce(paper.body,paper.body.position,{x:77,y:-77});
		}
	
	
}


