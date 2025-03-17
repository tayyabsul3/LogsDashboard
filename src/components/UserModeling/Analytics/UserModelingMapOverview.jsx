import React from "react";
import MAP_DATA from '../Data/data.json';
import { Map } from "react-map-gl";
import DeckGL, { GeoJsonLayer, IconLayer } from "deck.gl";

const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiaHVzbmFpbm43NyIsImEiOiJjbG14MXB5eDIwaWk2MmluenQ1ZmNsdmdsIn0.-Y1Hl2ntJ7oGkBqK9-OCyg";
const MAP_STYLE = "mapbox://styles/mapbox/dark-v11";

const INITIAL_VIEW_STATE = {
  latitude: 30.3753,
  longitude: 69.3451,
  zoom: 3,
  bearing: 0,
  pitch: 20,
};

const UserModelingMapOverview = (props) => {
  console.log("ma data:",)
  const onClick = (info) => {
    if (info.object) {
      alert(info.object.properties.Name);
    }
  };

  const layers = [
    // GeoJsonLayer for polygons or other GeoJSON data
    new GeoJsonLayer({
      id: "geojson-layer",
      data: {
        "type": "FeatureCollection",
  "features":props.userTrafficMap},
  // data: MAP_DATA,
      filled: true,
      pointRadiusMinPixels: 5,
      pointRadiusScale: 2000,
      getPointRadius: () => 5,
      getFillColor: [86, 144, 58, 250],
      pickable: true,
      autoHighlight: true,
    }),
    
   
  ];

  return (
    <div >
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers}
        onClick={onClick}
        style={{ position: "relative", width: "100%", height: "60vh" }}
      >
        <Map 
          mapStyle={MAP_STYLE} 
          mapboxAccessToken={MAPBOX_ACCESS_TOKEN} 
        />
      </DeckGL>
    </div>
  );
};

export default UserModelingMapOverview;
