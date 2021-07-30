import GoogleMap from "google-map-react";
import Marker from "./Marker";

const Map = ({ center, zoom, events }) => {
  const markers = events.map(event => {
    if (event.categories[0].id === 8) {
      return (
        <Marker
          key={event.id}
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
        />
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMap
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAP_API
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMap>
    </div>
  );
};

Map.defaultProps = {
  center: { lat: 45.5051, lng: -122.6750 },
  zoom: 6
};

export default Map;
