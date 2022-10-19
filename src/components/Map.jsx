import React, { useState } from "react";
import { StaticMap, MapContext, NavigationControl } from "react-map-gl";
import DeckGL from "deck.gl";
import {
  LightingEffect,
  AmbientLight,
  _SunLight as SunLight,
} from "@deck.gl/core";

import { dataMap } from "../data/dataMap";
import buildGeoJsonLayers from "../utils/buildGeoJsonLayers";

const INITIAL_VIEW_STATE = {
  latitude: -40.946,
  longitude: 174.167,
  zoom: 5,
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

function Map({ currentPest }) {
  const ambientLight = new AmbientLight({
    color: [255, 255, 255],
    intensity: 1.0,
  });

  const dirLight = new SunLight({
    timestamp: Date.UTC(2019, 7, 1, 22),
    color: [255, 255, 255],
    intensity: 1.0,
    _shadow: false,
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

  const data = dataMap(currentPest);

  return (
    <DeckGL
      effects={effects}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={buildGeoJsonLayers(data.split, data.url)}
      ContextProvider={MapContext.Provider}
    >
      <StaticMap mapStyle={MAP_STYLE} />
      <NavigationControl style={NAV_CONTROL_STYLE} />
      {/* <Map mapboxAccessToken={process.env.MapboxAccessToken} /> */}
    </DeckGL>
  );
}

export default Map;
