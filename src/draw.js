const draw = ({ context: ctx, element: canvas }, { palette }) => {

  ctx.fillStyle = palette.primary
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.strokeStyle = palette.tertiary

  let pos = [500, 500]
  ctx.moveTo(...pos)
  ctx.lineTo(200, 200)
  ctx.lineTo(400, 300) // store 'lastPos' in loop
  ctx.stroke()
  ctx.beginPath()
  ctx.lineWidth = 1 + 5 * Math.random()
  ctx.moveTo(400, 300)
  ctx.lineTo(100, 400)
  ctx.stroke()

}

export default draw