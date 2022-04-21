
import { Delaunay } from 'd3-delaunay'
import { displacementFromImage, scatterPoints, circle } from './utils'

const draw = async ({ context: ctx, element: canvas }, { palette }) => {

  const dispPoints = await displacementFromImage('./dist-maps/torus2.png', canvas.width, canvas.height)

  const calcDist = (coords, exponent=3.3) => 
    Math.pow(dispPoints[Math.floor(coords[0]) + Math.floor(coords[1]) * canvas.width], exponent)

  const points = scatterPoints({shape: [canvas.width, canvas.height], distanceFunction: calcDist}) // must use fxhash RNG
  const delaunay = Delaunay.from(points)
  const voronoi = delaunay.voronoi([.5, .5, canvas.width - .5, canvas.height - .5])

  
  ctx.fillStyle = palette.tertiary
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.beginPath()
  voronoi.delaunay.hull = [[-1000,-1000],[1000,1000]]
  voronoi.render(ctx)
  ctx.strokeStyle = palette.primary
  ctx.stroke()

  ctx.beginPath()
  delaunay.render(ctx)
  ctx.strokeStyle = palette.quaternary
  ctx.stroke()

  ctx.fillStyle = palette.secondary
  for (let i = 0; i < points.length; i++) {
    circle(ctx, points[i][0], points[i][1], 2)
  }

}

export default draw