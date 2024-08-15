import Delaunay from './lib/delaunay'
import { displacementFromImage } from './lib/utils/displacement-from-image'
import randomiseObject from './lib/utils/randomise-object'
import random from './lib/utils/random'
import { scatterPoints } from './lib/utils/scatter-points'

const draw = async (
  { context: ctx, element: canvas },
  { palettes, dispMaps }
) => {
  const palette = randomiseObject(
    palettes[Math.floor(random() * palettes.length)]
  )
  const dispMap = dispMaps[Math.floor(random() * dispMaps.length)]

  const dispPoints = await displacementFromImage(
    dispMap,
    canvas.width,
    canvas.height
  )

  const calcDist = (coords, exponent = 3.3) => {
    const rawDist = Math.pow(
      dispPoints[Math.floor(coords[0]) + Math.floor(coords[1]) * canvas.width],
      exponent
    )
    return rawDist < 0.05
      ? rawDist - random() * 0.01
      : rawDist + random() * 0.01
  }

  const points = scatterPoints({
    shape: [canvas.width, canvas.height],
    distanceFunction: calcDist,
  })
  const delaunay = Delaunay.from(points)
  const voronoi = delaunay.voronoi([
    0.5,
    0.5,
    canvas.width - 0.5,
    canvas.height - 0.5,
  ])

  ctx.fillStyle = palette.tertiary
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // ctx.fillStyle = palette.secondary + '46'
  // // 'gather/create cells'
  // ;[6, 12, 56, 99, 134, 162].forEach((i) => {
  //   voronoi.renderCell(i, ctx)
  // })
  // ctx.fill()

  ctx.beginPath()
  voronoi.delaunay.hull = [
    [-1000, -1000],
    [1000, 1000],
  ]
  voronoi.render(ctx)
  ctx.strokeStyle = palette.primary
  ctx.stroke()
}

export default draw
