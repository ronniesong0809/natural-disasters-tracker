import { useState, useEffect } from "react";
import axios from "axios";

const useEventsData = () => {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(process.env.REACT_APP_NASA_EONENT_API);
      setEventsData(res.data.events);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { eventsData, loading };
};

export default useEventsData;
