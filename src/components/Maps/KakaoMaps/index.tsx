import React from "react";
import { Map } from "react-kakao-maps-sdk";

const KakaoMaps = (props: { location: { lat: number; lng: number } }) => {
  return (
    <Map
      center={{ lat: props.location.lat, lng: props.location.lng }}
      style={{ width: "70vw", height: "80vh", margin: "0 auto" }}
      level={3}
    ></Map>
  );
};

export default KakaoMaps;
