const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World

var engine,world
var ground, ball
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic: true
  }
ground=Bodies.rectangle(200,390,200,10,options);
  World.add(world,ground)
  var options_ball={
    restitution:1
  }
  ball=Bodies.circle(200,100,50,options_ball);
  World.add(world,ball);
}

function draw() {
  background("black"); 
  Engine.update(engine);
  rectMode(CENTER);
  fill("red"); 
  rect(ground.position.x,ground.position.y,200,10);
  ellipseMode(RADIUS);
  fill("white");
  ellipse(ball.position.x,ball.position.y,50,50);
  
}