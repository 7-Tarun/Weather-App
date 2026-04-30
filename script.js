const cityInput = document.querySelector(`#city-input`);
const searchBtn = document.querySelector(`#search-btn`);
const Apikey = `YOUR_API_KEY_HERE`;
const temp = document.querySelector(`#main-temp`);
const card = document.querySelector(`#main-card`);
const historySection = document.querySelector(`.history-section`);

const locationText = document.querySelector(`#location`);
const date = document.querySelector(`#date-time`);
const conditionText = document.querySelector(`#condition-text`);
const weatherIcon = document.querySelector(`#weather-icon`);
const humidity = document.querySelector(`#humidity-val`);
const wind = document.querySelector(`#wind-val`);
const high = document.querySelector(`#uv-val`);
const feels = document.querySelector(`#feels-temp`);

async function getData(city) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}&units=metric`;
        //url explanation:-
        //1. This is the website url https://api.openweathermap.org/data/2.5/weather
        //2. ?, It is called Query String, As soon as the ? is placed we start giving our condition.
        //3. This checks the the data of the city (e.i. Jaipur), q=${city}
        //4. This acts like pass key, checks you are authorized or not, appid=${Apikey}
        //5. This converts data into celsius, units=metric

        const response = await fetch(url);
        const weatherData = await response.json();
        
        updateUI(weatherData);
        updateHistory(weatherData.name);

        localStorage.setItem('lastCity', city);
    }

    catch (error) {
        alert(`City Not Found: Please check spelling!`);
    }
}

function updateUI(data) {
    card.classList.remove("big-card");
    temp.innerText = Math.round(data.main.temp) + '°';
    feels.innerText = Math.round(data.main.feels_like) + '°';
    humidity.innerText = data.main.humidity;
    wind.innerText = Math.round(data.wind.speed * 3.6) + 'Km/h';
    conditionText.innerText = data.weather[0].description.toUpperCase();
    locationText.innerText = `📍 ${data.name}, ${data.sys.country}`;

    const currentDate = new Date();
    const dateOptions = { weekday: 'short', month: 'short', day: "numeric" };
    date.innerText = currentDate.toLocaleDateString('en-US', dateOptions);


    const iconMap = {
        "Clear": "☀️",
        "Clouds": "☁️",
        "Rain": "🌧️",
        "Drizzle": "🌦️",
        "Thunderstorm": "⛈️",
        "Snow": "❄️",
        "Haze": "🌫️",
        "Mist": "🌫️",
        "Smoke": "💨",
        "Fog": "🌫️"
    };

    const currentCondition = data.weather[0].main;
    weatherIcon.innerText = iconMap[currentCondition] || "🌡️";
    cityInput.value = "";
}

searchBtn.addEventListener(`click`, () => {
    const cityName = cityInput.value.trim();
    if (cityName !== "") {
        getData(cityName);
    }
    else {
        alert(`Please Enter the city!`);
    }

});

//Creating localstoreage(browser memory)
//Four(4) pillers of creating browser memory:-
//1. localStorage.setItem('key','value'): For Saving data
//2. localStorage.getItem('key'): For Fetching data
//3. localStorage.removeItem('key'): For Deleting specific data
//4. localStorage.clear(): For Removing all data(browser memory)

window.addEventListener("load", () => {
    const savedCity = localStorage.getItem('lastCity');

    if (savedCity) {
        getData(savedCity);
    }
    else {
        getData("Jaipur");
    }
});
//-------------------------------------------------------


//-----Creating Search History-----//

function updateHistory(city) {

    //Fetching history, & if there is no search history creat an empty array []
    let history = JSON.parse(localStorage.getItem('weatherHistory')) || [];

    //Filter repeated search name
    history = history.filter(item => item !== city);

    //Putting new search city on the 1st place
    history.unshift(city);

    //Removing more then 3 search history
    if (history.length > 3) {
        history.pop();
    }
    //set the updated list and convert it into text(JSON) form cause localStorage only understand String(text)
    localStorage.setItem('weatherHistory', JSON.stringify(history));

    //calling
    renderHistory();

}
//-------------------------------------


function renderHistory() {
    let history = JSON.parse(localStorage.getItem('weatherHistory')) || [];

    historySection.innerHTML = "";

    history.forEach(city => {
        const chip = document.createElement('div'); //Creating new div element
        chip.classList.add('search-history');   //adding css class
        chip.innerHTML = `<p>${city}</p>`;      //puting city name into the chip
        chip.addEventListener('click', () => {  //search city when the chip is clicked
            getData(city);
        });

        historySection.appendChild(chip);   //add chip into the html section
    });

}

//Adding Keyboard Enter Support:-
cityInput.addEventListener('keydown',(event) => {
    if(event.key === "Enter"){
        const cityName = cityInput.value.trim();

        if(cityName !== "") {
            getData(cityName);
        }
        else{
            alert("Please enter the city");
        }
    }
});