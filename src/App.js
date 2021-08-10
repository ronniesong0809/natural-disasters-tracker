import useEventsData from "./hooks/useEvents";
import Map from "./components/Map";
import Loading from "./components/Loading";

function App() {
  const { eventsData, loading } = useEventsData();

  return (
    <div className="App">
      {loading && <Loading />}
      <Map events={eventsData} />
    </div>
  );
}

export default App;
