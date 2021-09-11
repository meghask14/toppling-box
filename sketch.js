//namespacing
const Engine =Matter.Engine
const World = Matter.World
const Bodies= Matter.Bodies

var engine,world

function setup() {
  createCanvas(400,400);
 
engine = Engine.create()
world = engine.world

box1 = new box(200,300,50,50)
ground1 = new ground()
box2 = new box(240,100,50,100)


}

function draw() {
  background(0); 

  Engine.update(engine)
  ground1.display()
  box1.display()
  box2.display()
  
}