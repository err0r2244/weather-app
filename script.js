// Function to fetch weather data
function getWeather() {
  const city = document.getElementById("city").value.trim();
  const apiKey = "ce32c0ddfd91b7a646f64e51c5357b2c"; 

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const weatherInfo = `
        <h2>Weather in ${data.name}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Condition:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      `;
      document.getElementById("weather-result").innerHTML = weatherInfo;
    })
    .catch((error) => {
      document.getElementById("weather-result").innerHTML = `<p>Error: ${error.message}</p>`;
    });
}

// Attach the function to the form submission
document.getElementById("weather-form").addEventListener("submit", function (event) {
  event.preventDefault(); 
  getWeather();
});

