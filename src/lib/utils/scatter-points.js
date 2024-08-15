import PoissonDiskSampling from 'poisson-disk-sampling'

export const scatterPoints = (settings, RNG = Math.random) => {
  const defaults = {
    shape: [500, 500],
    minDistance: 5,
    maxDistance: 200,
    tries: 20,
  }

  return new PoissonDiskSampling({ ...defaults, ...settings }, RNG).fill()
}
