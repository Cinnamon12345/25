class Paper
{
	constructor(x,y)
	{
		var options={
            isStatic: false,
            restitution:0.3,
			friction:0,
            density:1.2
        }
		this.x = x;
		this.y = y;
		
		this.image=loadImage("paper.png");
		this.body = Bodies.rectangle(x,y,50,50,options);
		World.add(world, this.body);
		//Matter.Body.applyForce();

	}
	display()
	{
			var pos = this.body.position;
			push()
			translate(pos.x, pos.y);
		//	rotate(this.angle);
			imageMode(CENTER);
			//strokeWeight(4);
			//angleMode(RADIANS)
			fill(255);
			image(this.image,0,0,50,50);
			pop()

			
	}

}