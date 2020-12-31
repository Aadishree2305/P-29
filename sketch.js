const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var block1,block2,block3,block4,block5,block6,block7,block8;
var string;
var log1;


function setup() {

  createCanvas(800,400);

  //blocks
  block1 = new Block();
  block2 = new Block();
  block3 = new Block();
  block4 = new Block();
  block5 = new Block();
  block6 = new Block();
  block7 = new Block();
  block8 = new Block();

  //string
  string = new String();

  //log
  log1 = new Log();


  
}

function draw() {
  background(0);  






  drawSprites();
}