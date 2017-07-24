function Bird(){
    this.x = 25;
    this.y = height/2 - 200*sizeScale;
    this.speed = 0;
    this.gravity = 1.2*sizeScale;
    this.fly = -15*sizeScale;
    this.r = 20*sizeScale;
    this.alive = true;
    
    this.show = function(){
        noStroke();
        fill(255,255,0);
        ellipse(this.x,this.y,this.r,this.r);
    }
    
    this.update = function(){
        this.y += this.speed;
        this.speed += this.gravity;
        if (this.y > height) {
            this.y = height;
            this.speed = 0;
            this.alive = false;
        }
        if (this.y < 0) {
            this.y = 0;
            this.speed = 0;
            
        }
    }
    this.evaded = function(Pipe){
        if (this.x > Pipe.getX() + Pipe.getWidth() && Pipe.alredyEvaded == false){
            Pipe.gotEvaded;
            totalScore++; 
        }
    }
    
    this.hits = function(Pipe){
        if (this.x + this.r/2 > Pipe.getX() && this.x - this.r/2 < Pipe.getX() + Pipe.getWidth()){
            if (this.y + this.r/2 > Pipe.getHoleHeight() + Pipe.getHoleSize()/2 || this.y - this.r/2 < Pipe.getHoleHeight() - Pipe.getHoleSize()/2){
                this.alive = false;
                return(true);       
            }else{
                return(false);    
            }
        }else{
            return(false);
        }
    }
    
    this.flap = function(){
        this.speed = this.fly;   
        console.log(pipes.length);
    }
    
    this.lives = function(){
        
        if (this.alive == true){
            
            console.log("ALIVE");
            return(true);
        }else{
            console.log("NOT ALIVE");
            return(false);
        }
    }
    this.respawn = function(){
        this.alive = true;
        this.y = height/2 - 200*sizeScale;
        this.speed = 0;
        totalScore = 0;
    } 
}