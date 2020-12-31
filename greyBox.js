class GreyBox
{
    constructor(x,y)
    {
      var options =
      {
        'restitution':0.8,
        'friction':0,
        
      }

      this.body = Bodies.rectangle(x,y,30,40,options);
      this.x = x;
      this.y = y;

      World.add(world,this.body);
     
    }

    display()
    {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      pop();
      var pos = this.body.position;
      rectMode(CENTER);
      fill("grey");
      rect(pos.x, pos.y, 30,40);
    }
}