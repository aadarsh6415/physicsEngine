const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var ball_options ={
       restitution:1
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
    ball = Bodies.rectangle(200,200,50,50,ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    circle(ball.position.x,ball.position.y,50,50)
}