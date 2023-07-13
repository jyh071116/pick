import React, { useState, useEffect } from "react";
import {
  Container as MapDiv,
  NaverMap,
  NavermapsProvider,
  Marker,
} from "react-naver-maps";

import { RootState } from "../../../store";
import { useSelector } from "react-redux";

interface MarkerType {
  content: string;
  position: { lat: number; lng: number };
}

const NaverMaps = (props: { location: { lat: number; lng: number } }) => {
  const [map, setMap] = useState<any>();

  const foodMarkers = useSelector((state: RootState) => state.foodMarkers);
  const placeMarkers = useSelector((state: RootState) => state.placeMarkers);
  const mapBound = useSelector((state: RootState) => state.mapBound);
  const placeOrFood = useSelector((state: RootState) => state.placeOrFood);
  const initialCenter = props.location;

  useEffect(() => {
    if (!mapBound.food[0].x || !map) return;
    //@ts-ignore
    const bounds = new N.LatLngBounds();
    for (let i = 0; i < mapBound.food.length; i++) {
      bounds.extend(
        //@ts-ignore
        new N.LatLng(
          parseFloat(mapBound.food[i].y),
          parseFloat(mapBound.food[i].x),
        ),
      );
    }

    for (let i = 0; i < mapBound.place.length; i++) {
      bounds.extend(
        //@ts-ignore
        new N.LatLng(
          parseFloat(mapBound.place[i].y),
          parseFloat(mapBound.place[i].x),
        ),
      );
    }
    //@ts-ignore
    map.fitBounds(bounds);
  }, [map]);

  return (
    <NavermapsProvider ncpClientId="njhdwkp91k">
      <MapDiv
        style={{
          width: "70vw",
          height: "80vh",
          margin: "0 auto",
        }}
      >
        <NaverMap center={initialCenter} ref={setMap}>
          {(placeOrFood === "food" || placeOrFood === "both") &&
            foodMarkers.map((marker) => (
              //@ts-ignore
              <Marker
                // @ts-ignore
                key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                // @ts-ignore
                position={marker.position}
                onClick={() => {
                  // @ts-ignore
                  alert(marker.content);
                }}
              ></Marker>
            ))}
          {(placeOrFood === "place" || placeOrFood === "both") &&
            placeMarkers.map((marker) => (
              //@ts-ignore
              <Marker
                // @ts-ignore
                key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                // @ts-ignore
                position={marker.position}
                onClick={() => {
                  // @ts-ignore
                  alert(marker.content);
                }}
              ></Marker>
            ))}
        </NaverMap>
      </MapDiv>
    </NavermapsProvider>
  );
};

export default NaverMaps;
