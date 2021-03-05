const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;
var ground;
var ground2;
var ground3;
var slingShot;
var polygonIMG;

function preload()
{
    polygonIMG = lodImage("polygon.png")
}

function setup()
{
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world; 

    ground = new Ground(500, height, 1200, 30);
    ground2 = new Ground(200, 325, 300, 10);
    ground3 = new Ground(600, 150, 200, 10);

    //ground 1 - tier 1
    block1 = new Box(120,275,30,40);
    block2 = new Box(150,275,30,40);
    block3 = new Box(180,275,30,40);
    block4 = new Box(210,275,30,40);
    block5 = new Box(240,275,30,40);
    block6 = new Box(270,275,30,40);
    block9 = new Box(90, 275,30,40)

    //ground1 - tier 2
    block10 = new Box(120,230,30,40);
    block11 = new Box(150,230,30,40);
    block12 = new Box(180,230,30,40);
    block13 = new Box(210,230,30,40);
    block14 = new Box(240,230,30,40);

    //ground1 - tier 3
    block15 = new Box(150, 190, 30, 40);
    block16 = new Box(180, 190, 30, 40);
    block17 = new Box(210, 190, 30, 40);

    //ground 1 - tier 4
    block18 = new Box(180, 150, 30, 40);

    //ground 2 - tier 1
    block19 = new Box(600, 50, 30, 40)
    block20 = new Box(540, 50, 30, 40);
    block21 = new Box(570, 50, 30, 40);
    block22 = new Box(630, 50, 30, 40);
    block23 = new Box(660, 50, 30, 40);

    //ground 2 - tier 2
    block24 = new Box (570, 10, 30, 40)
    block25 = new Box (600, 10, 30, 40)
    block26 = new Box (630, 10, 30, 40)

    //ground 2 - tier 3
    block27 = new Box (600, 0, 30, 40);

    ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});
}

function draw()
{
    background(66, 31, 31);
    Engine.update(engine);
    
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
    ground.display();
    ground2.display();
    ground3.display();

    fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block9.display();

  fill("pink");
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  
  fill("white")
  block15.display();
  block16.display();
  block17.display();
  block24.display();
  block25.display();
  block26.display();

  fill("grey")
  block18.display();
  block27.display();

  imageMode(CENTER)
  image(polygonIMG ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}

function mouseDragged()
{
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  slingShot.fly();
}
 
 

  

