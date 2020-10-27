
class Trees
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w;
        this.h=h;
        this.image=loadImage("tree.png");
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var treesPos=this.body.position;		

			push()
			translate(treesPos.x, treesPos.y);
			ImageMode(CENTER)
			strokeWeight(4);
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}

}