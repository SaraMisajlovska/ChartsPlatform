import { useEffect, useState } from "react";
import { fetchAbandonedReasonsAndProducts } from "/src/services/CheckoutAbandonmentService.js";
import { fiveMinutes } from "/src/assets/CommonConstants.js";

const useAbandonedReasons = (fromDate, toDate, filterType) => {
  const [abandonedReasonsAndProducts, setAbandonedReasonsAndProducts] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchData = async () =>
    await fetchAbandonedReasonsAndProducts(fromDate, toDate, filterType);

  useEffect(() => {
    Object.keys(abandonedReasonsAndProducts).length === 0 ? setLoading(true) : setLoading(false)
  }, [abandonedReasonsAndProducts]);

  useEffect(() => {
    setLoading(true);

    fetchData().then((data) => setAbandonedReasonsAndProducts(data));
    const intervalId = setInterval(
      () => fetchData().then((data) => setAbandonedReasonsAndProducts(data)),
      fiveMinutes,
    );

    return () => {
      setLoading(false);
      clearInterval(intervalId);
    }
  }, [fromDate, toDate]);

  return { abandonedReasonsAndProducts, loading};
};

export default useAbandonedReasons;
