import useEventsData from "./hooks/useEvents";
import Map from "./components/Map";

function App() {
  const { eventsData, loading } = useEventsData();

  return (
    <div className="App">
      {!loading ? <Map events={eventsData} /> : <h1>Loading...</h1>}
    </div>
  );
}

export default App;
