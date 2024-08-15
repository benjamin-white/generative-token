export const displacementFromImage = (imageSrc, width, height) => {
  const handlePromise = (resolve, reject) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const image = new Image()
    canvas.width = width
    canvas.height = height

    image.onload = () => {
      ctx.drawImage(image, 0, 0, width, height)
      const imageData = ctx.getImageData(0, 0, width, height)
      const pixels = []
      for (let i = 0; i < imageData.data.length; i += 4) {
        pixels.push(imageData.data[i] / 255)
      }
      resolve(pixels)
    }

    image.onerror = (err) => {
      reject(err)
    }

    image.src = imageSrc
  }

  return new Promise(handlePromise)
}
