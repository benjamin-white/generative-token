export const printCanvasToImage = (canvas, filename = 'sketch') => {
  const img = canvas.toDataURL('image/png')
  const link = document.createElement('a')
  link.href = img
  link.download = `${filename}_${new Date().getTime()}.png`
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
