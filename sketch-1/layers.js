class Layer {
  constructor() {
    this.sides = SIDES
    this.numShapes = this.sides
    this.angle = 360 / this.numShapes
    this.stepsOut = 8
    this.singleStep = (CRYSTAL_SIZE / 2) / this.stepsOut
    this.thinStroke = 1
    this.thickStroke = 2
    this.strokeColor = getRandomFromPalette()
    this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke
  }
}

class externalCircles extends Layer {
  constructor() {
    super()
    this.shapeSize = (CRYSTAL_SIZE / 2.5) * random(1) // * 0.93
    this.position = (CRYSTAL_SIZE / 2) - (this.shapeSize / 2)
  }

  render() {
    noFill()
    stroke(this.strokeColor)
    strokeWeight(this.weight)
    push()
    translate(width/2, height/2)
    for (let i = 0; i < this.numShapes; i++) {
      rect(this.position, 0, this.shapeSize, this.shapeSize)
      rotate(this.angle)
    }
    pop()
  }
}

class centerCircles extends Layer {
  constructor() {
    super()
    this.shapeSize = (CRYSTAL_SIZE / 3) * random(1) // * 0.93
    this.position = (CRYSTAL_SIZE / 2)
  }

  render() {
    fill(this.strokeColor)
    noStroke()
    strokeWeight(1)
    push()
    translate(width/2, height/2)
      ellipse(0, 0, this.shapeSize, this.shapeSize)
      rotate(this.angle)
    pop()
  }
}

class simpleLines extends Layer {
  constructor() {
    super()
    this.numSteps = randomSelectTwo() ? this.stepsOut : int(this.stepsOut * 1.25)
    this.step = (CRYSTAL_SIZE / 2) / this.numSteps
    this.start = floor(random(0, this.numSteps))
    this.stop = floor(random(this.start, this.numSteps + 1))
    this.numShapes = randomSelectTwo() ? this.sides : this.sides * 2
    this.angle = 360 / this.numShapes
  }

  render() {
    noFill()
    stroke(this.strokeColor)
    strokeWeight(this.weight)
    push()
      translate(width/2, height/2)
      for (let i = 0; i < this.numShapes; i++) {
        line(this.start * this.step, 0, this.stop * this.step, 0)
        rotate(this.angle)
      }
    pop()
  }
}

class outlineShape extends Layer {
  constructor () {
    super()
    this.hexagonTrue = randomSelectTwo()
  }

  render () {
    noFill()
    stroke(this.strokeColor)
    strokeWeight(this.weight)
    push()
    translate(width/2, height/2)
    // if (this.hexagonTrue) {
    //   hexagon(0, 0, CRYSTAL_SIZE / 2)
    // } else {
    //   ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    // }
      ellipse(0, 0, CRYSTAL_SIZE+30, CRYSTAL_SIZE+30)
    pop()
  }
}

class pageRect extends Layer {
  constructor() {
    super()
    this.shapeSizeWidth = (CRYSTAL_SIZE / 2) // * 0.93
    this.shapeSizeHeight = (CRYSTAL_SIZE / 2) // * 0.93
    this.position = (CRYSTAL_SIZE / 2)
  }

  render() {
    fill(255)
    noStroke()
    strokeWeight(1)
    push()
    translate(width/2, height/2)
      rect(0, 77, width, this.shapeSizeHeight)
    pop()
  }
}
