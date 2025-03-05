import { useEffect, useState } from "react";
import { fiveMinutes } from "/src/assets/CommonConstants.js";

const useFetchDataWithTimePeriod = (fromDate, toDate, filterType, fetchFunction) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await fetchFunction(fromDate, toDate, filterType);
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, fiveMinutes);

    return () => clearInterval(intervalId);
  }, [fromDate, toDate, filterType]); // Ensure `filterType` triggers updates too

  return { data, loading };
};

export default useFetchDataWithTimePeriod;
