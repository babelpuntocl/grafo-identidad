const CRYSTAL_SIZE = 300
const SIDES = 6
let PALETTE = []

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
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  const cirlces = new Circles()
  cirlces.render()

  const cirlcess = new centerCircles()
  cirlcess.render()

  const simpleLines = new SimpleLines()
  simpleLines.render()

  const outlineShape = new OutlineShape()
  outlineShape.render()
}
