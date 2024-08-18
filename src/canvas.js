import { debounce } from 'lodash'
import { printCanvasToImage } from './lib/utils/canvas-to-image'

const canvas = (draw, config, rootNode) => {
  const canvas = document.createElement('canvas')
  const canvasCTX = canvas.getContext('2d', { alpha: false })
  const printCanvas = document.createElement('canvas')
  const printCanvasCTX = printCanvas.getContext('2d', { alpha: false })

  const setSize = (size) => {
    canvas.width = size
    canvas.height = size
  }

  const upScale = (canvas, context, [sizeX, sizeY], multiplier = 2) => {
    canvas.width = sizeX * multiplier
    canvas.height = sizeY * multiplier
    context.scale(multiplier, multiplier)
    canvas.style.width = `${sizeX}px`
    canvas.style.height = `${sizeY}px`
  }

  const render = () => {
    setSize(1000, 1000)
    draw({ element: canvas, context: canvasCTX }, config)
  }

  const print = (size = { width: 3000, height: 3000 }) => {
    printCanvas.width = size.width
    printCanvas.height = size.height
    draw({ element: printCanvas, context: printCanvasCTX }, config)
    printCanvasToImage(printCanvas)
  }

  window.addEventListener('resize', debounce(render, 40, { leading: true }))
  window.addEventListener('keyup', (event) => {
    event.key === 'p' && print()
  })

  render()
  rootNode.appendChild(canvas)

  return {
    element: canvas,
    context: canvasCTX,
    render,
  }
}

export default canvas
