import React, { useState } from "react";
import { StaticMap, MapContext, NavigationControl } from "react-map-gl";
import DeckGL, { PolygonLayer, GeoJsonLayer } from "deck.gl";
import {
  LightingEffect,
  AmbientLight,
  _SunLight as SunLight,
} from "@deck.gl/core";

import { dataMap } from "../data/dataMap";

const INITIAL_VIEW_STATE = {
  latitude: -40.946,
  longitude: 174.167,
  zoom: 4,
  bearing: 0,
  pitch: 30,
};

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json";
const NAV_CONTROL_STYLE = {
  position: "absolute",
  top: 10,
  left: 10,
};

const landCover = [
  [
    [-32.824211, 163.755384],
    [-31.858897, 182.834421],
    [-48.618385, 184.593381],
    [-48.092757, 160.583575],
  ],
];

function Map({ currentPest }) {
  const ambientLight = new AmbientLight({
    color: [255, 255, 255],
    intensity: 1.0,
  });

  const dirLight = new SunLight({
    timestamp: Date.UTC(2019, 7, 1, 22),
    color: [255, 255, 255],
    intensity: 1.0,
    _shadow: true,
  });

  const [effects] = useState(() => {
    const lightingEffect = new LightingEffect({ ambientLight, dirLight });
    lightingEffect.shadowColor = [0, 0, 0, 0.5];
    return [lightingEffect];
  });

  const onClick = (info) => {
    if (info.object) {
      // eslint-disable-next-line
      alert(
        `${info.object.properties.name} (${info.object.properties.abbrev})`
      );
    }
  };

  const layers = [
    // only needed when using shadows - a plane for shadows to drop on
    new PolygonLayer({
      id: "ground",
      data: landCover,
      stroked: false,
      getPolygon: (f) => f,
      getFillColor: [0, 0, 0, 0],
    }),
    new GeoJsonLayer({
      id: "geojson",
      data: dataMap(currentPest),
      opacity: 0.8,
      stroked: false,
      filled: true,
      extruded: true,
      wireframe: true,
      getElevation: (f) => {
        if (f.properties["Abundance"] === "H") {
          return 5000;
        }

        if (f.properties["Abundance"] === "M") {
          return 2500;
        }
        if (f.properties["Abundance"] === "L") {
          return 5;
        }
      },
      getFillColor: (f) => getColor(f.properties["Abundance"]),
      getLineColor: (f) => getColor(f.properties["Abundance"]),
      pickable: true,
    }),
  ];

  const getColor = (abundance) => {
    if (abundance === "H") {
      return [255, 0, 4];
    }
    if (abundance === "M") {
      return [255, 132, 0];
    }
    if (abundance === "L") {
      return [122, 255, 0];
    }
  };

  return (
    <DeckGL
      effects={effects}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
      ContextProvider={MapContext.Provider}
    >
      <StaticMap mapStyle={MAP_STYLE} />
      <NavigationControl style={NAV_CONTROL_STYLE} />
      {/* <Map mapboxAccessToken={process.env.MapboxAccessToken} /> */}
    </DeckGL>
  );
}

export default Map;
