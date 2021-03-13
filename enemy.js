let t=false;
class Enemy{
    constructor(){
        this.x= 0
        this.y=-10
        this.r=20
       
    }
    show(speed,score){
        this.x=random(200)
        let r = random(0,255);
        let g = random(0,255);
        let b = random(0,255);
        fill(r,g,b)
        ellipse(this.x,this.y,this.r*2)
        strokeWeight(5)
        
        
       // console.log(speed)
        this.y+=this.speed;
        //console.log(speed)
        
        console.log(x)
        console.log(mouseX)

        while( y>height-10 &&this.x>mouseX-10 ){
            
            y=-20
            console.log("Out2")
                score-=1
                t=true
           
                       break
            }
          return t;
           //else{ console.log("Out")}
           
    }
    
  
}