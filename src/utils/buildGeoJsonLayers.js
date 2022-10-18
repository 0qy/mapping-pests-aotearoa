import { GeoJsonLayer } from 'deck.gl'

const buildGeoJsonLayers = (count, url) => {
  const layers = []
  for (let i = 1; i <= count; i++) {
    layers.push(buildLayer(url, i))
  }
  return layers
}

const getColor = (abundance) => {
  if (abundance === 'H') {
    return [255, 0, 4]
  }
  if (abundance === 'M') {
    return [255, 132, 0]
  }
  if (abundance === 'L') {
    return [122, 255, 0]
  }
}

const buildLayer = (url, index) => {
  return new GeoJsonLayer({
    id: `geojson-${index}`,
    data: `${url}/${index}.json`,
    opacity: 0.8,
    stroked: false,
    filled: true,
    extruded: true,
    wireframe: true,
    getElevation: (f) => {
      if (f.properties['Abundance'] === 'H') {
        return 10
      }

      if (f.properties['Abundance'] === 'M') {
        return 5
      }
      if (f.properties['Abundance'] === 'L') {
        return 0
      }
    },
    getFillColor: (f) => getColor(f.properties['Abundance']),
    getLineColor: (f) => getColor(f.properties['Abundance']),
    pickable: true,
  })
}

export default buildGeoJsonLayers
