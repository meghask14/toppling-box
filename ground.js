class ground{
      constructor(){
            var options = {
                  isStatic: true
            }
            this.body= Bodies.rectangle (200,390,400,20, options)
            World.add(world,this.body)
      }

      display(){
           var pos = this.body.position 
           rectMode(CENTER)
           rect(pos.x, pos.y, 400,20 )
      }
}