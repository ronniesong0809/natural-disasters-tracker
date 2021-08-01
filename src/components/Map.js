import { useState, useRef } from "react";
import GoogleMap from "google-map-react";
import { WildfireMarker, StormMarker } from "./Marker";
import MessageBox from "./MessageBox";
import { motion } from "framer-motion";

const Map = ({ center, zoom, events }) => {
  const [info, setInfo] = useState(null);
  const constraintsRef = useRef(null);
  const markers = events.map(event => {
    const id = event.id;
    const category = event.categories[0].id;
    const title = event.title;
    const description = event.description;
    const type = event.geometries[0].type;
    const date = event.geometries[0].date;

    return event.categories[0].id === 8 ? (
      <WildfireMarker
        key={id}
        lat={event.geometries[0].coordinates[1]}
        lng={event.geometries[0].coordinates[0]}
        onClick={() =>
          setInfo({ id, category, title, description, type, date })
        }
      />
    ) : event.categories[0].id === 10 ? (
      <StormMarker
        key={id}
        lat={event.geometries[0].coordinates[1]}
        lng={event.geometries[0].coordinates[0]}
        onClick={() =>
          setInfo({ id, category, title, description, type, date })
        }
      />
    ) : null;
  });

  return (
    <motion.div className="map" ref={constraintsRef}>
      <GoogleMap
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAP_API
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMap>
      {info && (
        <MessageBox
          info={info}
          setInfo={setInfo}
          constraintsRef={constraintsRef}
        />
      )}
    </motion.div>
  );
};

Map.defaultProps = {
  center: { lat: 45.5051, lng: -122.675 },
  zoom: 6
};

export default Map;
