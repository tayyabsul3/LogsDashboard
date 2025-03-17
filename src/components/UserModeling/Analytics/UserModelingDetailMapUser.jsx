import React from 'react';
import DeckGL from '@deck.gl/react';
import { ArcLayer } from '@deck.gl/layers';
import { Map } from "react-map-gl";


const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiaHVzbmFpbm43NyIsImEiOiJjbG14MXB5eDIwaWk2MmluenQ1ZmNsdmdsIn0.-Y1Hl2ntJ7oGkBqK9-OCyg";

function UserDetailTrafficMap() {
  // Sample data for traffic: Source in New York with multiple global destinations
  const trafficData = [
    {
      from: { name: "User's IP (New Delhi, India)", coordinate: [77.2090, 28.6139] },
      to: { name: 'Mumbai, India', coordinate: [72.8777, 19.0760] },
    },
    {
      from: { name: "User's IP (New Delhi, India)", coordinate: [77.2090, 28.6139] },
      to: { name: 'Bangalore, India', coordinate: [77.5946, 12.9716] },
    },
    {
      from: { name: "User's IP (New Delhi, India)", coordinate: [77.2090, 28.6139] },
      to: { name: 'Kolkata, India', coordinate: [88.3639, 22.5726] },
    },
    {
      from: { name: "User's IP (New Delhi, India)", coordinate: [77.2090, 28.6139] },
      to: { name: 'Chennai, India', coordinate: [80.2707, 13.0827] },
    },
    {
      from: { name: "User's IP (New Delhi, India)", coordinate: [77.2090, 28.6139] },
      to: { name: 'Karachi, Pakistan', coordinate: [67.0011, 24.8607] },
    },
    {
      from: { name: "User's IP (New Delhi, India)", coordinate: [77.2090, 28.6139] },
      to: { name: 'Lahore, Pakistan', coordinate: [74.3587, 31.5497] },
    },
    {
      from: { name: "User's IP (New Delhi, India)", coordinate: [77.2090, 28.6139] },
      to: { name: 'Dhaka, Bangladesh', coordinate: [90.4125, 23.8103] },
    },
    {
      from: { name: "User's IP (New Delhi, India)", coordinate: [77.2090, 28.6139] },
      to: { name: 'Hyderabad, India', coordinate: [78.4867, 17.3850] },
    },
    {
      from: { name: "User's IP (New Delhi, India)", coordinate: [77.2090, 28.6139] },
      to: { name: 'Ahmedabad, India', coordinate: [72.5714, 23.0225] },
    },
    {
      from: { name: "User's IP (New Delhi, India)", coordinate: [77.2090, 28.6139] },
      to: { name: 'Islamabad, Pakistan', coordinate: [73.0479, 33.6844] },
    },
    {
      from: { name: "User's IP (New Delhi, India)", coordinate: [77.2090, 28.6139] },
      to: { name: 'Beijing, China', coordinate: [116.4074, 39.9042] },
    },
    {
      from: { name: "User's IP (New Delhi, India)", coordinate: [77.2090, 28.6139] },
      to: { name: 'Shanghai, China', coordinate: [121.4737, 31.2304] },
    },
    {
      from: { name: "User's IP (New Delhi, India)", coordinate: [77.2090, 28.6139] },
      to: { name: 'Tehran, Iran', coordinate: [51.3890, 35.6892] },
    }
];



  // Define the ArcLayer to visualize the traffic data
  const layer = new ArcLayer({
    id: 'ArcLayer',
    data: trafficData,
    getSourcePosition: (d) => d.from.coordinate,
    getTargetPosition: (d) => d.to.coordinate,
    getSourceColor: [0, 128, 255], // Light blue color for the source
    getTargetColor: [255, 0, 128], // Pink color for the target
    getWidth: 3,
    pickable: true,
  });

  return (
    <DeckGL
      initialViewState={{
        longitude: 77.2090,
        latitude: 28.6139,
        zoom: 4,
        pitch: 30,
      }}
      controller={true}
      getTooltip={({ object }) => object && `${object.from.name} to ${object.to.name}`}
      layers={[layer]}
      style={{ position: "relative", width: "100%", height: "60vh" }}
    >
        <Map
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v11"
      />
    </DeckGL>
  );
}

export default UserDetailTrafficMap;
