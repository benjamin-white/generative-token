import Chroma from '@arklo/chroma'

const config = {
  rootPadding: 50,
  palettes: [
    {
      primary: Chroma.swatches.japaneseElegance.whiteLinen,
      secondary: Chroma.swatches.japaneseElegance.casper,
    },
    {
      primary: Chroma.swatches.tokyoDawn.bitter,
      secondary: Chroma.swatches.tokyoDawn.satinLinen,
    },
    {
      primary: Chroma.swatches.nord.nordNight3,
      secondary: Chroma.swatches.oxford.stalk2,
    },
    {
      primary: Chroma.swatches.oxford.petal4,
      secondary: Chroma.swatches.revival.neptune3,
    },
  ],
  dispMaps: [
    './dist-maps/dist-map-001.png',
    './dist-maps/dist-map-002.png',
    './dist-maps/dist-map-003.png',
    './dist-maps/dist-map-004.png',
  ],
}

export default config
