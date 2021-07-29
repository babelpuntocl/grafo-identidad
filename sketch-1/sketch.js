const CRYSTAL_SIZE = 300
const SIDES = 6
let PALETTE = []

const layers = []

function setup() {
  createCanvas(530, 530, SVG)
  PALETTE = [
    color(255, 190, 11),
    color(251, 86, 7),
    color(255, 0, 110),
    color(131, 56, 236),
    color(58, 134, 255)
  ]
  noLoop()
  frameRate(2)
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  background(255)

  // const externalcircles = new externalCircles()
  // externalcircles.render()
  //
  // const centercircle = new centerCircles()
  // centercircle.render()
  //
  // const simplelines = new SimpleLines()
  // simplelines.render()

  // const outlineshape = new OutlineShape()
  // outlineshape.render()




  picker = random(1)
  if (picker > 0.3) {
    layers.push(new simpleLines())
  }

  picker = random(1)
  if (picker > 0.2) { // si el numero entre 0 y 1 es mayor 0.2,  renderiza clase externalCircles
    layers.push(new externalCircles())
  }

  picker = random(1)
  if (picker > 0.2) { // si el numero entre 0 y 1 es mayor 0.2,  renderiza clase externalCircles
    layers.push(new centerCircles())
  }
  
  layers.forEach(layer => {
    layer.render()
  })
}
