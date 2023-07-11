import React, { useEffect, memo } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const GoogleMaps = (props: { location: { lat: number; lng: number } }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBINIoP-2MwtGUoKMg76Ea4FdNA1H6sroo">
      <GoogleMap
        mapContainerStyle={{ width: "70vw", height: "80vh", margin: "0 auto" }}
        center={{ lat: props.location.lat, lng: props.location.lng }}
        zoom={17}
        options={{ disableDefaultUI: true }}
      >
        <></>
      </GoogleMap>
    </LoadScript>
  );
};
export default GoogleMaps;
