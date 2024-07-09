const apiKey = 'bd5e378503939ddaee76f12ad7a97608';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${apiKey}`;


async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const { name, main, weather } = data;
        const { temp, humidity } = main;
        const { description } = weather[0];

        const weatherInfo = `
            <p>Location: ${name}</p>
            <p>Temperature: ${temp} &deg;C</p>
            <p>Humidity: ${humidity}%</p>
            <p>Weather: ${description}</p>
        `;
        document.querySelector('.weather-info').innerHTML = weatherInfo;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.querySelector('.weather-info').innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
    }
}

// Load weather data when the page loads
window.addEventListener('load', () => {
    getWeather();
});
