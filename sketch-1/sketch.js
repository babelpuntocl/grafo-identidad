const CRYSTAL_SIZE = 250
const SIDES = 12
let PALETTE = []

const layers = []

function setup() {
  createCanvas(530, 530, SVG)
  PALETTE = [
    //color(255, 190, 11),
    color(251, 86, 7),
    //color(255, 0, 110),
    //color(131, 56, 236),
    //color(58, 134, 255)
  ]
  noLoop()
  frameRate(2)
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  background(255)

  picker = random(1)
  if (picker > 0.15) { // si el numero entre 0 y 1 es mayor a 0.2,  renderiza clase externalCircles
    layers.push(new externalCircles())
  }
  picker = random(1)
  if (picker > 0.15) {
    layers.push(new simpleLines()) // añade el valor al array layers
  }
  picker = random(1)
  if (picker > 0.15) {
    layers.push(new centerCircles())
  }
  // picker = random(1)
  // if (picker > 0) {
  //   layers.push(new pageRect())
  // }

  layers.forEach(layer => {
    layer.render()
  })
}
