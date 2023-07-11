import React from "react";
import {
  Container as MapDiv,
  NaverMap,
  NavermapsProvider,
} from "react-naver-maps";

const NaverMaps = (props: { location: { lat: number; lng: number } }) => {
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
        />
      </MapDiv>
    </NavermapsProvider>
  );
};

export default NaverMaps;
