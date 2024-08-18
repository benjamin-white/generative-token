import Delaunay from './lib/delaunay'
import { displacementFromImage } from './lib/utils/displacement-from-image'
import random from './lib/utils/random'
import { scatterPoints } from './lib/utils/scatter-points'

const draw = async (
  { context: ctx, element: canvas },
  { palettes, dispMaps }
) => {
  const palette = palettes[Math.floor(random() * palettes.length)]
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

  ctx.fillStyle = palette.primary
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  voronoi.delaunay.hull = [
    [-1000, -1000],
    [1000, 1000],
  ]

  ctx.beginPath()
  voronoi.render(ctx)
  ctx.strokeStyle = palette.secondary
  ctx.stroke()
}

export default draw
