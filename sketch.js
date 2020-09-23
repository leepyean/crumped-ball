
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Bodies;
var engine,world;
var paper,paperimage,binimage;
function preload(){
paperimage = loadImage("paper.jpg")
binimage = loadImage("dustbingreen.png")
}



	function setup() {
	createCanvas(800, 700);

	ground = createSprite(400, 700,5000,30);
	ground.shapeColor = "red";
	ground.debug = true;
   
	
	bin = createSprite(350, 650,10,300);
	bin.shapeColor = "green";
	bin.debug = true;
	
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(300,250,10,10);
    
	
	Engine.run(engine);
}


function draw() {
	background("blue");
	rectMode(CENTER);
    imageMode(CENTER);
	paper.x= mouseX;
  rect (paper.position.x,paper.position.y,70,70);	
  image(paperimage,paper.position.x,paper.position.y,70,70)
  rect (bin.position.x,bin.position.y,100,100);	
  image(binimage,bin.position.x,bin.position.y,200,300)
  drawSprites();
  
}