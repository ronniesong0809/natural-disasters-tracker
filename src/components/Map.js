import React from "react";
import GoogleMaps from "google-map-react";

const Map = ({center, zoom}) => {
  return (
    <div className="map">
      <GoogleMaps
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAP_API
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMaps>
    </div>
  );
};

Map.defaultProps = {
  center: { lat: 42.3265, lng: -122.8756 },
  zoom: 6
};

export default Map;
