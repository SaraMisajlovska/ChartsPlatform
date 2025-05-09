export const fetchTopWords = (limit = 5, fromDate, toDate) =>
  fetch("http://localhost:8888/search/top-words", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ limit, fromDate, toDate }), // Include the request body
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
      console.error("Error fetching top words:", error);
      return [];
    });
