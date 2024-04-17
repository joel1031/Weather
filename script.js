document.addEventListener(`DOMContentLoaded`, function(){

const searchbar = document.querySelector(`.search-bar`);
const searchbtn = document.querySelector(`.search-btn`);

searchbtn.addEventListener(`click`, function(event){
    event.preventDefault();
    const city = searchbar.value;

    fetch(`http://api.weatherapi.com/v1/current.json?key=f767b142d9b54e01b9b200154241604&q=${city}&aqi=no`)
    .then(response => response.json())
    .then(data => {
        document.querySelector(`.Location`).textContent = data.location.name;
        document.querySelector(`.Temperature`).textContent = data.current.temp_f + `°F`;
        switch(data.current.condition.text){
            case `Sunny`:
                document.querySelector(`.weather-icon`).textContent = `☀️`;
                document.querySelector(`.Condition`).textContent = `Sunny`;
                break;
            case `Partly cloudy`:
                document.querySelector(`.weather-icon`).textContent = `🌤️`;
                document.querySelector(`.Condition`).textContent = `Partly cloudy`;
                break;
            case `Cloudy`:
                document.querySelector(`.weather-icon`).textContent = `☁️`;
                document.querySelector(`.Condition`).textContent = `Cloudy`;
                break;
            case `Overcast`:
                document.querySelector(`.weather-icon`).textContent = `☁️`;
                document.querySelector(`.Condition`).textContent = `Overcast`;
                break;
            case `Mist`:
                document.querySelector(`.weather-icon`).textContent = `🌫️`;
                document.querySelector(`.Condition`).textContent = `Mist`;
                break;
            case `Patchy rain possible`:
                document.querySelector(`.weather-icon`).textContent = `🌧️`;
                document.querySelector(`.Condition`).textContent = `Patchy rain possible`;
                break;
            case `Patchy snow possible`:
                document.querySelector(`.weather-icon`).textContent = `❄️`;
                document.querySelector(`.Condition`).textContent = `Patchy snow possible`;
                break;
            case `Patchy sleet possible`:
                document.querySelector(`.weather-icon`).textContent = `🌨️`;
                document.querySelector(`.Condition`).textContent = `Patchy sleet possible`;
                break;
            case `Patchy freezing drizzle possible`:
                document.querySelector(`.weather-icon`).textContent = `🌧️`;
                document.querySelector(`.Condition`).textContent = `Patchy freezing drizzle possible`;
                break;
            case `Thundery outbreaks possible`:
                document.querySelector(`.weather-icon`).textContent = `⛈️`;
                document.querySelector(`.Condition`).textContent = `Thundery outbreaks possible`;
                break;
            case `Blowing snow`:
                document.querySelector(`.weather-icon`).textContent = `❄️`;
                document.querySelector(`.Condition`).textContent = `Blowing snow`;
                break;
            case `Blizzard`:
                document.querySelector(`.weather-icon`).textContent = `❄️`;
                document.querySelector(`.Condition`).textContent = `Blizzard`;
                break;
            case `Fog`:
                document.querySelector(`.weather-icon`).textContent = `🌫️`;
                document.querySelector(`.Condition`).textContent = `Fog`;
                break;
            case `Freezing fog`:
                document.querySelector(`.weather-icon`).textContent = `🌫️`;
                document.querySelector(`.Condition`).textContent = `Freezing fog`;
                break;
            case `Patchy light drizzle`:
                document.querySelector(`.weather-icon`).textContent = `🌧️`;
                document.querySelector(`.Condition`).textContent = `Patchy light drizzle`;
                break;
            case `Light drizzle`:
                document.querySelector(`.weather-icon`).textContent = `🌧️`;
                document.querySelector(`.Condition`).textContent = `Light drizzle`;
                break;
            case `Freezing drizzle`:
                document.querySelector(`.weather-icon`).textContent = `🌧️`;
                document.querySelector(`.Condition`).textContent = `Freezing drizzle`;
                break;
            case `Heavy freezing drizzle`:
                document.querySelector(`.weather-icon`).textContent = `🌧️`;
                document.querySelector(`.Condition`).textContent = `Heavy freezing drizzle`;
                break;
            case `Patchy light rain`:
                document.querySelector(`.weather-icon`).textContent = `🌧️`;
                document.querySelector(`.Condition`).textContent = `Patchy light rain`;
                break;
            case `Light rain`:
                document.querySelector(`.weather-icon`).textContent = `🌧️`;
                document.querySelector(`.Condition`).textContent = `Light rain`;
                break;
            case `Moderate rain at times`:
                document.querySelector(`.weather-icon`).textContent = `🌧️`;
                document.querySelector(`.Condition`).textContent = `Moderate rain at times`;
                break;
            case `Moderate rain`:
                document.querySelector(`.weather-icon`).textContent = `🌧️`;
                document.querySelector(`.Condition`).textContent = `Moderate rain`;
                break;
            case `Heavy rain at times`:
                document.querySelector(`.weather-icon`).textContent = `🌧️`;
                document.querySelector(`.Condition`).textContent = `Heavy rain at times`;
                break;
            case `Heavy rain`:
                document.querySelector(`.weather-icon`).textContent = `🌧️`;
                document.querySelector(`.Condition`).textContent = `Heavy rain`;
                break;
            case `Light freezing rain`:
                document.querySelector(`.weather-icon`).textContent = `🌧️`;
                document.querySelector(`.Condition`).textContent = `Light freezing rain`;
                break;
            case `Moderate or heavy freezing rain`:
                document.querySelector(`.weather-icon`).textContent = `🌧️`;
                document.querySelector(`.Condition`).textContent = `Moderate or heavy freezing rain`;
                break;
            case `Light sleet`:
                document.querySelector(`.weather-icon`).textContent = `🌨️`;
                document.querySelector(`.Condition`).textContent = `Light sleet`;
                break;
            case `Moderate or heavy sleet`:
                document.querySelector(`.weather-icon`).textContent = `🌨️`;
                document.querySelector(`.Condition`).textContent = `Moderate or heavy sleet`;
                break;
            case `Patchy light snow`:
                document.querySelector(`.weather-icon`).textContent = `❄️`;
                document.querySelector(`.Condition`).textContent = `Patchy light snow`;
                break;
            case `Light snow`:
                document.querySelector(`.weather-icon`).textContent = `❄️`;
                document.querySelector(`.Condition`).textContent = `Light snow`;
                break;
            case `Patchy moderate snow`:
                document.querySelector(`.weather-icon`).textContent = `❄️`;
                document.querySelector(`.Condition`).textContent = `Patchy moderate snow`;
                break;
            case `Moderate snow`:
                document.querySelector(`.weather-icon`).textContent = `❄️`;
                document.querySelector(`.Condition`).textContent = `Moderate snow`;
                break;
            case `Patchy heavy snow`:
                document.querySelector(`.weather-icon`).textContent = `❄️`;
                document.querySelector(`.Condition`).textContent = `Patchy heavy snow`;
                break;
            case `Heavy snow`:
                document.querySelector(`.weather-icon`).textContent = `❄️`;
                document.querySelector(`.Condition`).textContent = `Heavy snow`;
                break;
            case `Ice pellets`:
                document.querySelector(`.weather-icon`).textContent = `🌨️`;
                document.querySelector(`.Condition`).textContent = `Ice pellets`;
                break;
            case `Light rain shower`:
                document.querySelector(`.weather-icon`).textContent = `🌧️`;
                document.querySelector(`.Condition`).textContent = `Light rain shower`;
                break;
            case `Moderate or heavy rain shower`:
                document.querySelector(`.weather-icon`).textContent = `🌧️`;
                document.querySelector(`.Condition`).textContent = `Moderate or heavy rain shower`;
                break;
            case `Torrential rain shower`:
                document.querySelector(`.weather-icon`).textContent = `🌧️`;
                document.querySelector(`.Condition`).textContent = `Torrential rain shower`;
                break;
            case `Light sleet showers`:
                document.querySelector(`.weather-icon`).textContent = `🌨️`;
                document.querySelector(`.Condition`).textContent = `Light sleet showers`;
                break;
            case `Moderate or heavy sleet showers`:
                document.querySelector(`.weather-icon`).textContent = `🌨️`;
                document.querySelector(`.Condition`).textContent = `Moderate or heavy sleet showers`;
                break;
            case `Light snow showers`:
                document.querySelector(`.weather-icon`).textContent = `❄️`;
                document.querySelector(`.Condition`).textContent = `Light snow showers`;
                break;
            case `Moderate or heavy snow showers`:
                document.querySelector(`.weather-icon`).textContent = `❄️`;
                document.querySelector(`.Condition`).textContent = `Moderate or heavy snow showers`;
                break;
            case `Light showers of ice pellets`:
                document.querySelector(`.weather-icon`).textContent = `🌨️`;
                document.querySelector(`.Condition`).textContent = `Light showers of ice pellets`;
                break;
            case `Moderate or heavy showers of ice pellets`:
                document.querySelector(`.weather-icon`).textContent = `🌨️`;
                document.querySelector(`.Condition`).textContent = `Moderate or heavy showers of ice pellets`;
                break;
            case `Patchy light rain with thunder`:
                document.querySelector(`.weather-icon`).textContent = `⛈️`;
                document.querySelector(`.Condition`).textContent = `Patchy light rain with thunder`;
                break;
            case `Moderate or heavy rain with thunder`:
                document.querySelector(`.weather-icon`).textContent = `⛈️`;
                document.querySelector(`.Condition`).textContent = `Moderate or heavy rain with thunder`;
                break;
            case `Patchy light snow with thunder`:
                document.querySelector(`.weather-icon`).textContent = `⛈️`;
                document.querySelector(`.Condition`).textContent = `Patchy light snow with thunder`;
                break;
            case `Moderate or heavy snow with thunder`:
                document.querySelector(`.weather-icon`).textContent = `⛈️`;
                document.querySelector(`.Condition`).textContent = `Moderate or heavy snow with thunder`;
                break;
            default:
                document.querySelector(`.weather-icon`).textContent = `☀️`;
                document.querySelector(`.Condition`).textContent = `Sunny`;
                break;

        }

        })

});



});