let screen = 0;
let y=-20;
let x=200
let e1;
let speed = 0.2;
let score= 0;

function setup() {
  createCanvas(600, 400);
  e=new Enemy()
 
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
  fill(255,0,255)
  ellipse(x,y,20,20)
  
  rectMode(CENTER)
  fill(255,255,255)
  rect(mouseX,height-10,50,30)
	y+= speed;
	
  if(y>height){
  	screen =2
	 }
  if(y>height-10 && x>mouseX-20 && x<mouseX+20){
	console.log(x)

	console.log(y)

    speed+=.1
    score+= 1
	console.log('good')
	
	e1=e.show(speed,score)
	console.log(e1)
	if(e1==true)
	{
		score-=1
		screen =2
	}
	y=-20
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

