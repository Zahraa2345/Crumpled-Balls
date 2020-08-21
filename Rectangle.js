class Rectangle{
    
    constructor(x, y, width, height, angle){

        var options = {
            isStatic: true
        }
    
     this.body=Bodies.rectangle(x, y, width, height, options);
     this.width=width;
     this.height=height;
     Matter.Body.setAngle(this.body, angle);
     World.add(world,this.body);

    }
    
 display(){
 var pos= this.body.position;
 var ang= this.body.angle
 push();
 translate(pos.x,pos.y);
 rotate(ang)
 rectMode(CENTER);
 fill(255);
 pop();
 rect(pos.x, pos.y, this.width, this.height)
 }
}