// create outlineShape function
// draw ellipse
// add random weight and color
// add hexagon

const CRYSTAL_SIZE = 300
const SIDES = 6
let PALETTE = []

function setup() {
  createCanvas(530, 530, SVG)

  PALETTE = [
    color(255, 52, 154), // pink
    color(4, 0, 152) // blue
  ]

  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  //testLines()
  outlineShape()
  simpleLines()
}

function simpleLines(){
  const stepsOut = 8
  const numSteps = randomSelectTwo ? stepsOut : int(stepsOut*1.25) // entre 8 y 10 (8*1.25)
  const step = (CRYSTAL_SIZE/2) / numSteps
  const start = floor(random(0, numSteps))
  const stop = floor(random(start,numSteps+1))

  let numShapes = randomSelectTwo() ? SIDES : SIDES * 2
  const strokeColor = getRandomFromPalette()
  const weight = 1 //randomSelectTwo() ? 1 : 3
  const angle = 360 / numShapes

  noFill()
  stroke(strokeColor)
  push()
    translate(width/2, height/2)
    stroke(strokeColor)
    strokeWeight(weight)
    for (let i = 0; i < numShapes; i++) {
      line(start*step, 0, stop*step, 0)
      rotate(angle)
    }
  pop()
}

function outlineShape () {
  const strokeColor = getRandomFromPalette()
  const weight = 1 // randomSelectTwo() ? 1 : 3
  const hexagonTrue = randomSelectTwo()

  stroke(strokeColor)
  strokeWeight(weight)

  if (hexagonTrue) {
    push()
      translate(width/2, height/2)
      rect(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE) //hexagon(0, 0, CRYSTAL_SIZE / 2)
    pop()
  } else {
    push()
      translate(width/2, height/2)
      ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE) //hexagon(0, 0, CRYSTAL_SIZE / 2)
    pop()
  }

}


function testLines () {
  let numShapes = randomSelectTwo() ? SIDES : SIDES * 2
  const strokeColor = getRandomFromPalette()

  noFill()
  stroke(PALETTE[0])
  push()
    translate(width/2, height/2)
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)

    stroke(strokeColor)
    const angle = 360 / numShapes
    for (let i = 0; i < numShapes; i++) {
      line(0, 0, 0, CRYSTAL_SIZE / 2)
      rotate(angle)
    }
  pop()
}
