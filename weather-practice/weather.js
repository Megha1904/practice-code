const city = document.getElementById('city');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img')
const temp = document.querySelector('.temperature');
const desc = document.querySelector('.description');

async function getWeather(city) {
    const apiKey = '224c337ac0f966058a903a1e7e93c454';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const weather = await fetch(`${url}`).then(response => response.json());
    console.log(weather);
    temp.innerHTML = `${Math.round(weather.main.temp - 273.15)}°C`;
    desc.innerHTML = `${weather.weather[0].description}`;

    switch (weather.weather[0].main) {
        case 'Clouds':
            weather_img.src = "./assets/cloud.png"
            break;
        case 'Clear':
            weather_img.src = "./assets/clear.png"
            break;
        case 'Mist':
            weather_img.src = "./assets/mist.png"
            break;
        case 'Rain':
            weather_img.src = "./assets/rain.png"
            break;
        case 'Snow':
            weather_img.src = "./assets/snow.png"
            break;
        case 'Haze':
            weather_img.src = "./assets/haze.png"
            break;
        default:
            weather_img.src = "./assets/404.png"
            break;
    }
}

city.innerHTML = '';


searchBtn.addEventListener('click', () => {
    if (city.value.trim() === "") {
        alert('Please enter a valid city name!');
        console.log('No city entered');
        return;
    }
    getWeather(city.value);
});