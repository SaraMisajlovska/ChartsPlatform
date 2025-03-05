export const fetchProductViews = (fromDate, toDate, type) =>
  fetch("http://localhost:8888/view/product-views", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ timePeriod: {fromDate, toDate}, type }),
  })
    .then((response) => {
      if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`);
        return [];
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.error("Error fetching product views:", error);
      return [];
    });
