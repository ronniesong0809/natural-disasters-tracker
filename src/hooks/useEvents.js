import { useState, useEffect } from "react";
import axios from "axios";

const useEventsData = () => {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      setEventsData(res.data.events);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { eventsData, loading };
};

export default useEventsData;
