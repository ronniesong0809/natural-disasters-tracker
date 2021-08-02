import { WildfireMarker, StormMarker } from "./Marker";

const HandleMarkers = (event, setInfo) => {
  const id = event.id;
  const category = event.categories[0].id;
  const title = event.title;
  const description = event.description;
  const type = event.geometry[0].type;
  const date = event.geometry[0].date;

  return event.categories[0].id === "wildfires" ? (
    <WildfireMarker
      key={id}
      lat={event.geometry[0].coordinates[1]}
      lng={event.geometry[0].coordinates[0]}
      onClick={() => setInfo({ id, category, title, description, type, date })}
    />
  ) : event.categories[0].id === "severeStorms" ? (
    <StormMarker
      key={id}
      lat={event.geometry[0].coordinates[1]}
      lng={event.geometry[0].coordinates[0]}
      onClick={() => setInfo({ id, category, title, description, type, date })}
    />
  ) : null;
};

export default HandleMarkers;
