var screen = 0;
var y=-40;
var x=200;

var speed = 2;
var score= 0;

function setup() {
  createCanvas(600, 400);
 
}

function draw() {
	if(screen == 0){
    startScreen()
  }else if(screen == 1){
	//enemyOn()
	
	gameOn()
	

	
	  
  }else if(screen==2){
  	endScreen()
  }	
}

function startScreen(){
		stroke(0)
		strokeWeight(5)
		background(96, 157, 255)
		fill(255)
		textAlign(CENTER);
		text('WELCOME', width / 2, height / 2)
		text('click to start', width / 2, height / 2 + 30);
		reset();
}

function gameOn(){
	background(102,102,255)
  text("score = " + score, 30,20)
  
  ellipse(x,y,20,20)
  
  rectMode(CENTER)
  rect(mouseX,height-10,50,30)
	y+= speed;
	
  if(y>height){
  	screen =2
	 }
  if(y>height-10 && x>mouseX-20 && x<mouseX+20){
  	y=-20
    speed+=.5
    score+= 1
	
	
	if(y==-20){
  	pickRandom();
  		      }
	
 	}
	

function pickRandom(){
	x= random(20,width-20)
}
}


function endScreen(){
		background(150)
		textAlign(CENTER);
		text('GAME OVER', width / 2, height / 2)
  	text("SCORE = " + score, width / 2, height / 2 +60)
	  text(" ")
		
}

function mousePressed(){
	if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }
}

function reset(){
	  score=0;
  	speed=2;
  	y=-20;
}

