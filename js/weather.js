// weather.js
const apiKey = '15cf013516ba86b45037c420cc95274a';
const city = 'San Giorgio del Sannio'; 

const encodedCity = encodeURIComponent(city);
const url_weather = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${apiKey}`;

console.log(url_weather);

// Check if weather data is already stored in localStorage
if (localStorage.getItem('weatherData')) {
  const storedWeatherData = JSON.parse(localStorage.getItem('weatherData'));
  updateWeatherUI(storedWeatherData);
} else {
  fetch(url_weather)
    .then(response => response.json())
    .then(data => {
      // Save weather data to localStorage
      localStorage.setItem('weatherData', JSON.stringify(data));
      updateWeatherUI(data);
    })
    .catch(error => console.error('Error:', error));
}

// Function to update weather UI
function updateWeatherUI(data) {
  const temperatureElement = document.getElementById('temperature');
  const locationElement = document.getElementById('location');
  const weatherIconElement = document.getElementById('weather-icon');
  const currentDateElement = document.getElementById('current-date');

  if (temperatureElement && locationElement && weatherIconElement && currentDateElement) {
    console.log(data);

    temperatureElement.textContent = `${data.main.temp}°C`;
    locationElement.textContent = data.name;
    weatherIconElement.src = `../img/weather/${data.weather[0].icon}.png`;

    // You can also update the current date element if needed
    const currentDate = new Date();
    currentDateElement.textContent = currentDate.toLocaleDateString();
  } else {
    console.error('Error: Unable to find weather UI elements in the DOM');
  }
}