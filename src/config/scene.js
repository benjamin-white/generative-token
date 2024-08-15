const config = {
  rootPadding: 50,
  // Found and taken from https://coolors.co/
  palettes: [
    {
      primary: '#e63946',
      secondary: '#f1faee',
      tertiary: '#a8dadc',
      quaternary: '#457b9d',
      quinary: '#1d3557',
    },
    {
      primary: '#390099',
      secondary: '#9E0059',
      tertiary: '#FF0054',
      quaternary: '#FF5400',
      quinary: '#FFBD00',
    },
    {
      primary: '#9C89B8',
      secondary: '#F0A6CA',
      tertiary: '#EFC3E6',
      quaternary: '#F0E6EF',
      quinary: '#B8BEDD',
    },
    {
      primary: '#353535',
      secondary: '#3C6E71',
      tertiary: '#FFFFFF',
      quaternary: '#D9D9D9',
      quinary: '#284B63',
    }
  ],
  dispMaps: [
    './dist-maps/torus2.png',
    './dist-maps/torus.png',
    './dist-maps/circle.png',
  ]
}

export default config