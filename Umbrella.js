class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        this.batmanAnimation = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png")
        this.batmanImage = loadImage("Walking Frame/batman.png");
        //this.batman = createSprite(x,y,300,300)
        //this.batman.visible = false;
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        if (frameCount > 200) 
        {
        //this.batman.addAnimation("running",this.batmanAnimation)
        //this.batman.visible = true;
        image(this.batmanImage,pos.x,pos.y+70,300,300);
        }
        else{
        image(this.image,pos.x,pos.y+70,300,300);
        }
    }
}