import { useState, useEffect } from "react";
// import axios from "axios";

const useEventsData = () => {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();

      setEventsData(events);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { eventsData, loading };
};

export default useEventsData;
