import React, { useState, useLayoutEffect } from "react";
import {
  Container as MapDiv,
  NaverMap,
  NavermapsProvider,
  useNavermaps,
  Marker,
} from "react-naver-maps";

import { AppDispatch, RootState } from "../../../store";
import { useSelector, useDispatch } from "react-redux";
import { setPlaceMarkers } from "../../../store/placeMarkers";
import { setFoodMarkers } from "../../../store/foodMarkers";

const NaverMaps = (props: { location: { lat: number; lng: number }}) => {
  // //@ts-ignore
  // const {naver} = window;
  const [info, setInfo] = useState();
  const [map, setMap] = useState();

  const foodMarkers = useSelector((state: RootState) => state.foodMarkers);
  const placeMarkers = useSelector((state: RootState) => state.placeMarkers);
  const mapBound = useSelector((state: RootState) => state.mapBound);
  // useLayoutEffect(() => {
  //   //@ts-ignore
  //   const bounds = new naver.maps.LatLngBounds();
  //   for (let i = 0; i < mapBound.food.length; i++) {
  //     bounds.extend(
  //       //@ts-ignore
  //       new naver.maps.LatLng(
  //         parseInt(mapBound.food[i].y),
  //         parseInt(mapBound.food[i].x),
  //       ),
  //     );
  //   }
  //   //@ts-ignore
  //   map.setBounds(bounds);
  //   for (let i = 0; i < mapBound.place.length; i++) {
  //     bounds.extend(
  //       //@ts-ignore
  //       new naver.maps.LatLng(
  //         parseInt(mapBound.place[i].y),
  //         parseInt(mapBound.place[i].x),
  //       ),
  //     );
  //   }
  //   //@ts-ignore
  //   map.setBounds(bounds);
  // }, [map]);
  return (
    <NavermapsProvider ncpClientId="njhdwkp91k">
      <MapDiv
        style={{
          width: "70vw",
          height: "80vh",
          margin: "0 auto",
        }}
      >
        <NaverMap
          center={{ lat: props.location.lat, lng: props.location.lng }}
          ref={setMap}
        >
          {foodMarkers.map((marker) => (
            //@ts-ignore
            <Marker
              // @ts-ignore
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
              // @ts-ignore
              position={marker.position}
              onClick={() => setInfo(marker)}
            >
              {
                // @ts-ignore
                info && info.content === marker.content && (
                  // @ts-ignore
                  <div style={{ color: "#000" }}>{marker.content}</div>
                )
              }
            </Marker>
          ))}
          {placeMarkers.map((marker) => (
            //@ts-ignore
            <Marker
              // @ts-ignore
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
              // @ts-ignore
              position={marker.position}
              onClick={() => setInfo(marker)}
            >
              {
                // @ts-ignore
                info && info.content === marker.content && (
                  // @ts-ignore
                  <div style={{ color: "#000" }}>{marker.content}</div>
                )
              }
            </Marker>
          ))}
        </NaverMap>
      </MapDiv>
    </NavermapsProvider>
  );
};

export default NaverMaps;
