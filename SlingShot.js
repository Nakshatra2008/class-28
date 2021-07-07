class Chain{

constructor(bodyA,pointB){

var option={
bodyA:bodyA,
pointB:pointB,
stiffness:0.04,
length:10
}
this.pointB = pointB

this.body=Constraint.create(option)
World.add(world,this.body)

}
fly (){
    this.body.bodyA =null
}


display(){
if(this.body.bodyA){


var A = this.body.bodyA.position
var B = this.pointB
push()
stroke("blue")
strokeWeight(10)
line(A.x,A.y,B.x,B.y)
pop()
}

}


}




