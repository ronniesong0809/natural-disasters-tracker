import { useState, useRef } from "react";
import GoogleMap from "google-map-react";
import MessageBox from "./MessageBox";
import { motion } from "framer-motion";
import HandleMarkers from "./HandleMarkers";

const Map = ({ center, zoom, events }) => {
  const [info, setInfo] = useState(null);
  const constraintsRef = useRef(null);
  const markers = events.map(event => {
    return HandleMarkers(event, setInfo);
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
