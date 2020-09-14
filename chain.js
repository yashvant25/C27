class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.2,
            length:20
        }
      this.link=Constraint.create(options);
      World.add(world,this.link);
    }
    display(){
        var pointA=this.link.bodyA.position;
        var pointB=this.link.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }

}