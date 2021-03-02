const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var Myengine,MyWorld 
function setup() {
  createCanvas(800,400);
  Myengine = Engine.create();
  MyWorld = Myengine.world;


  var obj_options={
    isStatic :true
  }
  object=bodies.rectangle(200,100,50,50,obj_options)
  World.add(myWorld,object)

  var ground_options={
    isStatic : true
  }
  ground=Bodies.rectangle(200,390,300,20,ground,options)
  World.add(myWorld,ground)

  //var ball1_options={
    //restitation : 1
    //}
    ball1 = Bodies.circle(200,200,20)
    World.add(myWorld,ball1)


    console.log(ground)
    //console.log(object.position.y)
}
function draw() {
  background(0);  
  Engine.update(myengine)
  rectMode(CENTER)
  rect(object.position.x,object.position.y,50,50)

rectMode(CENTER);
rect(ground.position.position.x,ground.position.y,300,20)

ellipseMode(RADIUS)
ellipse(ball1.position.x,ball1.position.y,20)
drawSprites();
}


  
  




