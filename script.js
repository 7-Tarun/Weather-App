const cityInput = document.querySelector(`#city-input`);
const searchBtn = document.querySelector(`#search-btn`);
const apiKey = c8c53bd683d00125afc1b84a6aa3ce1d;

searchBtn.addEventListener(`click`, () => {
    const cityName = cityInput.value.trim();
    if(cityName !== ""){
        console.log(`Users wants the weather of: `);
    }
    else{
        console.log(`Please Enter the city!`);
    }
});

async function getData(city) {
    try{
        console.log(`Fetching ${city} data from the internet`);
        const url = `https://api.openweathermap.org/data/2.5 /weather?q=${city}&appid=${c8c53bd683d00125afc1b84a6aa3ce1d}&units=metric;`

        const responce = await fetch(url);

        const weatherData = await responce.json();

        console.log(`Successful, Here is the data: ${weatherData}`);
    }

    catch (error) {
        console.log(`API Fail: ${error}`);
    }
}