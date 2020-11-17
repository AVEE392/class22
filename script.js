const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world
var BALL,ground


function setup(){
    var canvas=createCanvas(400,400)
    engine=Engine.create();
    world=engine.world;
    var BALL_options={
    'restitution':0.8
    }
    BALL=Bodies.circle(200,100,50,BALL_options)
    World.add(world,BALL);
    console.log(BALL)
    console.log(BALL.position.x)
    console.log(BALL.position.y)
    var ground_options={
        isStatic:true
    }
    ground=Bodies.rectangle(200,390,200,20,ground_options)
    World.add(world,ground)
}
function draw(){
    background(0);
    Engine.update(engine)
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,400,50);
    ellipseMode(RADIUS)
    ellipse(BALL.position.x,BALL.position.y,50,50)
}