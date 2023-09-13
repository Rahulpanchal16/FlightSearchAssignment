const flightData = [
  [
    {
      to: "New York",
      from: "Los Angeles",
      depart_date: "2023-09-14",
      depart_time: "08:30 AM",
      arrive_date: "2023-09-14",
      arrive_time: "11:45 AM",
      price_in_rupees: 35000,
    },
    {
      to: "London",
      from: "Paris",
      depart_date: "2023-09-15",
      depart_time: "10:15 AM",
      arrive_date: "2023-09-15",
      arrive_time: "01:30 PM",
      price_in_rupees: 45000,
    },
    {
      to: "Tokyo",
      from: "Seoul",
      depart_date: "2023-09-16",
      depart_time: "12:00 PM",
      arrive_date: "2023-09-16",
      arrive_time: "03:15 PM",
      price_in_rupees: 52000,
    },
    {
      to: "Sydney",
      from: "Melbourne",
      depart_date: "2023-09-17",
      depart_time: "09:45 AM",
      arrive_date: "2023-09-17",
      arrive_time: "11:30 AM",
      price_in_rupees: 28000,
    },
    {
      to: "San Francisco",
      from: "Chicago",
      depart_date: "2023-09-18",
      depart_time: "11:00 AM",
      arrive_date: "2023-09-18",
      arrive_time: "02:30 PM",
      price_in_rupees: 58000,
    },
    {
      to: "Dubai",
      from: "Istanbul",
      depart_date: "2023-09-19",
      depart_time: "07:20 AM",
      arrive_date: "2023-09-19",
      arrive_time: "10:10 AM",
      price_in_rupees: 67000,
    },
    {
      to: "Mumbai",
      from: "Delhi",
      depart_date: "2023-09-20",
      depart_time: "06:45 AM",
      arrive_date: "2023-09-20",
      arrive_time: "08:30 AM",
      price_in_rupees: 32000,
    },
    {
      to: "Rio de Janeiro",
      from: "Sao Paulo",
      depart_date: "2023-09-21",
      depart_time: "03:30 PM",
      arrive_date: "2023-09-21",
      arrive_time: "06:15 PM",
      price_in_rupees: 41000,
    },
    {
      to: "Cape Town",
      from: "Johannesburg",
      depart_date: "2023-09-22",
      depart_time: "01:10 PM",
      arrive_date: "2023-09-22",
      arrive_time: "03:45 PM",
      price_in_rupees: 31000,
    },
    {
      to: "Hong Kong",
      from: "Singapore",
      depart_date: "2023-09-23",
      depart_time: "08:50 AM",
      arrive_date: "2023-09-23",
      arrive_time: "11:20 AM",
      price_in_rupees: 42000,
    },
  ],
];

const searchForm = document.getElementById("searchForm");
const results = document.getElementById("results");

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const to = document
    .getElementById("destinationcity")
    .value.trim()
    .toLowerCase();
    const from = document.getElementById("origincity").value.trim().toLowerCase();
    console.log(to);
    console.log(from);

  // Perform the search
  const searchResults = flightData.filter((flight) => {
    const matchTo = !to || flight.to.toLowerCase().includes(to);
    const matchFrom = !from || flight.from.toLowerCase().includes(from);

    return matchTo && matchFrom;
  });

  // Display search results
  displayResults(searchResults);
});

function displayResults(searchResults) {
  const resultsContainer = document.getElementById("resultsContainer");
  resultsContainer.innerHTML = "";

  if (searchResults.length === 0) {
    resultsContainer.innerHTML = "No matching flights found.";
    return;
  }

  searchResults.forEach((flight) => {
    const flightCard = document.createElement("div");
    flightCard.classList.add("flight-card");
    flightCard.innerHTML = `
        <h3>Flight from ${flight.from} to ${flight.to}</h3>
        <p>Departure Date: ${flight.depart_date}</p>
        <p>Price: ${flight.price_in_rupees} rupees</p>
      `;
    resultsContainer.appendChild(flightCard);
  });
}
