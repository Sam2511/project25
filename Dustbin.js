    class dustbin {
    constructor(x) {
    var options = {isStatic: true};
    this.body = Bodies.rectangle(x,475,100,5,options);
    this.width = 100;
    this.height = 100;
    World.add(world, this.body);
    this.image = loadImage("dustbingreen.png")
    }
    display(){
        
        imageMode(CENTER);
        image(this.image, this.body.position.x, 425, this.width, this.height);




    }




    }