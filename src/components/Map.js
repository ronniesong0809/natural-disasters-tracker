import { useState } from "react";
import GoogleMap from "google-map-react";
import Marker from "./Marker";
import MessageBox from "./MessageBox";

const Map = ({ center, zoom, events }) => {
  const [info, setInfo] = useState(null);
  const markers = events.map(event => {
    if (event.categories[0].id === 8) {
      return (
        <Marker
          key={event.id}
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          onClick={() =>
            setInfo({
              id: event.id,
              title: event.title,
              description: event.description,
              type: event.geometries[0].type,
              date: event.geometries[0].date
            })
          }
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
      {info && <MessageBox info={info} />}
    </div>
  );
};

Map.defaultProps = {
  center: { lat: 45.5051, lng: -122.675 },
  zoom: 6
};

export default Map;
