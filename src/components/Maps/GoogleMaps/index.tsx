import { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";

import { RootState } from "../../../store";
import { useSelector } from "react-redux";

const GoogleMaps = (props: { location: { lat: number; lng: number } }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY as string,
    version: "3.47",
  });
  const [info, setInfo] = useState();

  const foodMarkers = useSelector((state: RootState) => state.foodMarkers);
  const placeMarkers = useSelector((state: RootState) => state.placeMarkers);
  const mapBound = useSelector((state: RootState) => state.mapBound);
  const placeOrFood = useSelector((state: RootState) => state.placeOrFood);

  const mapBoundFunc = (map: any) => {
    if (!mapBound.food[0].x) return;
    const bounds = new window.google.maps.LatLngBounds();
    for (let i = 0; i < mapBound.food.length; i++) {
      bounds.extend(
        new window.google.maps.LatLng(
          parseFloat(mapBound.food[i].y),
          parseFloat(mapBound.food[i].x),
        ),
      );
    }

    for (let i = 0; i < mapBound.place.length; i++) {
      bounds.extend(
        new window.google.maps.LatLng(
          parseFloat(mapBound.place[i].y),
          parseFloat(mapBound.place[i].x),
        ),
      );
    }
    //@ts-ignore
    map.fitBounds(bounds);
    //@ts-ignore
  };

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          id="google-map"
          mapContainerStyle={{
            width: "70vw",
            height: "80vh",
            margin: "0 auto",
          }}
          center={{ lat: props.location.lat, lng: props.location.lng }}
          zoom={17}
          options={{ disableDefaultUI: true }}
          onLoad={(map) => {
            mapBoundFunc(map);
          }}
        >
          {(placeOrFood === "food" || placeOrFood === "both") &&
            foodMarkers.map((marker) => (
              //@ts-ignore
              <MarkerF
                // @ts-ignore
                key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                // @ts-ignore
                position={{
                  //@ts-ignore
                  lat: parseFloat(marker.position.lat),
                  //@ts-ignore
                  lng: parseFloat(marker.position.lng),
                }}
                onClick={() => setInfo(marker)}
              >
                {
                  // @ts-ignore
                  info && info.content === marker.content && (
                    // @ts-ignore
                    <InfoWindowF>
                      <div style={{ color: "#000" }}>
                        {
                          //@ts-ignore
                          marker.content
                        }
                      </div>
                    </InfoWindowF>
                  )
                }
              </MarkerF>
            ))}
          {(placeOrFood === "place" || placeOrFood === "both") &&
            placeMarkers.map((marker) => (
              //@ts-ignore
              <MarkerF
                // @ts-ignore
                key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                // @ts-ignore
                position={{
                  //@ts-ignore
                  lat: parseFloat(marker.position.lat),
                  //@ts-ignore
                  lng: parseFloat(marker.position.lng),
                }}
                onClick={() => setInfo(marker)}
              >
                {
                  // @ts-ignore
                  info && info.content === marker.content && (
                    // @ts-ignore
                    <InfoWindowF>
                      <div style={{ color: "#000" }}>
                        {
                          //@ts-ignore
                          marker.content
                        }
                      </div>
                    </InfoWindowF>
                  )
                }
              </MarkerF>
            ))}
        </GoogleMap>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
export default GoogleMaps;
