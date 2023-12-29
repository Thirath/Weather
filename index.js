const axios = require('axios');
const apiKey = '9ee55c86a289c754d643dd7006b28b53';
async function getWeather(city) {
    try {
       const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
       return response.data;
    } catch (error) {
       console.error(`Error: ${error.message}`);
       return null;
    }
   }
   (async () => {
    const city = 'Hyderabad';
    const weatherData = await getWeather(city);
   
    if (weatherData) {
       console.log(`Weather data for ${city}:`);
       console.log(`Temperature: ${weatherData.main.temp}K`);
       console.log(`Humidity: ${weatherData.main.humidity}%`);
       console.log(`Weather: ${weatherData.weather[0].description}`);
    }
   })();