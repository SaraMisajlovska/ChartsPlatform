import {useEffect, useState} from "react";
import {fetchTopWords} from "/src/services/WordFrequencyService.js";
import {fiveMinutes} from "/src/assets/CommonConstants.js";

const useTopWords = (fromDate, toDate) => {
  const [topWords, setTopWords] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchData = async () => await fetchTopWords(5, fromDate, toDate);

  useEffect(() => {
    Object.keys(topWords).length === 0 ? setLoading(true) : setLoading(false)
  }, [topWords]);

  useEffect(() => {
    setLoading(true);

    const intervalId
      = setInterval(() => fetchData().then(data => setTopWords(data)), fiveMinutes);

    fetchData().then(data => setTopWords(data));
    return () => {
      clearInterval(intervalId);
      setLoading(false);
    }
  }, [fromDate, toDate])

  return {topWords, loading};
}

export default useTopWords;