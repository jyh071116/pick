import { useState, useLayoutEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

import { AppDispatch, RootState } from "../../../store";
import { useSelector, useDispatch } from "react-redux";
import { setPlaceMarkers } from "../../../store/placeMarkers";
import { setFoodMarkers } from "../../../store/foodMarkers";
import { setPlaceBound, setFoodBound } from "../../../store/mapBound";

const KakaoMaps = (props: { location: { lat: number; lng: number } }) => {
  const { kakao } = window;
  const [info, setInfo] = useState();
  const [map, setMap] = useState();

  const dispatch = useDispatch<AppDispatch>();

  const searchVal = useSelector((state: RootState) => state.searchVal);

  const foodMarkers = useSelector((state: RootState) => state.foodMarkers);
  const placeMarkers = useSelector((state: RootState) => state.placeMarkers);

  const placeOrFood = useSelector((state: RootState) => state.placeOrFood);

  const searchLocation = () => {
    const ps = new kakao.maps.services.Places();
    const bounds = new kakao.maps.LatLngBounds();

    ps.keywordSearch(`${searchVal} 맛집`, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        dispatch(setFoodBound(data));

        let markers = [];

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        // @ts-ignore
        dispatch(setFoodMarkers(markers));

        // @ts-ignore
        map.setBounds(bounds);
      }
    });

    ps.keywordSearch(`${searchVal} 관광명소`, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        dispatch(setPlaceBound(data));

        let markers = [];

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        // @ts-ignore
        dispatch(setPlaceMarkers(markers));

        // @ts-ignore
        map.setBounds(bounds);
      }
    });
  };

  useLayoutEffect(() => {
    if (!searchVal || !map) return;
    searchLocation();
  }, [searchVal, map]);

  return (
    <Map
      center={{ lat: props.location.lat, lng: props.location.lng }}
      style={{ width: "70vw", height: "80vh", margin: "0 auto" }}
      level={3}
      // @ts-ignore
      onCreate={setMap}
    >
      {(placeOrFood === "food" || placeOrFood === "both") && foodMarkers.map((marker) => (
        <MapMarker
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
        </MapMarker>
      ))}
      {(placeOrFood === "place" || placeOrFood === "both") && placeMarkers.map((marker) => (
        <MapMarker
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
        </MapMarker>
      ))}
    </Map>
  );
};

export default KakaoMaps;
