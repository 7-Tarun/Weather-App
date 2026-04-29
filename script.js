const cityInput = document.querySelector(`#city-input`);
const searchBtn = document.querySelector(`#search-btn`);
const Apikey = `dummyapi`;
const temp = document.querySelector(`#main-temp`);
const card = document.querySelector(`#main-card`);

const conditionText = document.querySelector(`#condition-text`);
const humidity = document.querySelector(`#humidity-val`);
const wind = document.querySelector(`#wind-val`);
const high = document.querySelector(`#uv-val`);
const feels = document.querySelector(`#feels-temp`);

async function getData(city) {
    try {
        console.log(`Fetching ${city} Data from the internet`);

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}&units=metric`;
        //url explanation: 
        //1. This is the website url https://api.openweathermap.org/data/2.5/weather
        //2. ?, It is called Query String, As soon as the ? is placed we start giving our condition.
        //3. This checks the the data of the city (e.i. Jaipur), q=${city}
        //4. This acts like pass key, checks you are authorized or not, appid=${Apikey}
        //5. This converts data into celsius, units=metric

        const response = await fetch(url);
        const weatherData = await response.json();

        console.log("Success, Here is the Data: ",weatherData.main.temp);
        const condition = weatherData.weather[0].main;
        console.log("Weather main: ",condition);
        console.log("Weather Speen: ",weatherData.wind.speed);

        updateUI(weatherData);
    }
    
    catch (error) {
        console.log(`API Fail: ${error}`);
    }
}

function updateUI(data) {
    card.classList.remove("big-card");
    temp.innerText = Math.round(data.main.temp)+'°';
    feels.innerText = Math.round(data.main.feels_like)+'°';
    humidity.innerText = data.main.humidity;
    wind.innerText = Math.round(data.wind.speed * 3.6) + 'Km/h';
    conditionText.innerText = data.weather[0].description.toUpperCase();
}

searchBtn.addEventListener(`click`, () => {
    const cityName = cityInput.value.trim();
    if(cityName !== ""){
        console.log(`Users wants the weather of: ${cityName}`);
        getData(cityName);
    }
    else{
        console.log(`Please Enter the city!`);
    }

});