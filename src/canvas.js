import { debounce } from 'lodash'
import { printCanvasToImage } from './utils'

const canvas = (draw, config, rootNode) => {
  
  const canvas         = document.createElement('canvas')
  const canvasCTX      = canvas.getContext('2d', {alpha: false})
  const printCanvas    = document.createElement('canvas')
  const printCanvasCTX = printCanvas.getContext('2d', {alpha: false})

  const setSize = size => {
    canvas.width = size
    canvas.height = size
  }

  const render = () => {
    setSize(Math.min(window.innerWidth, window.innerHeight) - config.rootPadding)
    draw({element: canvas, context: canvasCTX}, config)
  }

  const print = (size = {width: 3000, height: 3000}) => {
    printCanvas.width = size.width
    printCanvas.height = size.height
    draw({element: printCanvas, context: printCanvasCTX}, config)
    printCanvasToImage(printCanvas)
  }
  
  window.addEventListener('resize', debounce(render, 40, {leading: true}))
  window.addEventListener('keyup', (event) => {event.key === 'p' && print()})

  render()
  rootNode.appendChild(canvas)

  return {
    element: canvas,
    context: canvasCTX,
    render
  }

}

export default canvas