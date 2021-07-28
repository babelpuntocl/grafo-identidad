class Layer{
  constructor(){
      this.sides = SIDES
      this.numShapes = this.sides
      this.angle = 360 / this.numShapes
      this.stepsOuts = 8
      this.singleStep = (CRYSTAL_SIZE/2) / this.stepsOut
      this.thinStroke = 1
      this.thickStroke = 3
      this.strokeColor = getRandomFromPalette()
  }
}

class Circles extends Layer{
  constructor(){
    super()
    this.shapeSize = (CRYSTAL_SIZE/2)* random(1) //0.98
    this.position = (CRYSTAL_SIZE/2) - (this.shapeSize/2)
  }
  render(){
    stroke(this.strokeColor)
    strokeWeight(1)
    noFill()
    push()
    translate(width/2,height/2)
      for (let i = 0; i <= this.numShapes; i++) {
        ellipse(this.position,0,this.shapeSize,this.shapeSize)
        rotate(this.angle)
      }
    pop()
  }
}
