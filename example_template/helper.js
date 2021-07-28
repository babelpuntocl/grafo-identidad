function hexagon (posX, posY, radius) { // construye el hexagono
  const rotAngle = 360 / 6
  beginShape()
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
    vertex(thisVertex.x, thisVertex.y)
  }
  endShape(CLOSE)
}

function pointOnCircle (posX, posY, radius, angle) { // ordena las lineas del hexagono
  const x = posX + radius * cos(angle)
  const y = posY + radius * sin(angle)
  return createVector(x, y)
}

function randomSelectTwo () { // entrega un numero aleatorio
  const rando = random(1)

  if (rando > 0.5) {
    return true
  } else {
    return false
  }
}

function getRandomFromPalette () { // entrega un color aleatorio
  const rando2 = floor(random(0, PALETTE.length))

  return PALETTE[rando2]
}
