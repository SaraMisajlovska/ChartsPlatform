export const fetchAbandonedReasonsAndProducts = (fromDate, toDate, type) =>
  fetch("http://localhost:8888/abandon/reasons-and-products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ fromDate, toDate, type }), // Include the request body
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
      console.error("Error fetching abandonment reasons and products:", error);
      return [];
    });
