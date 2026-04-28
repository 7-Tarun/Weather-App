const cityInput = document.querySelector(`#city-input`);
const searchBtn = document.querySelector(`#search-btn`);

searchBtn.addEventListener(`click`, () => {
    const cityName = cityInput.value.trim();
    if(cityName !== ""){
        console.log(`Users wants the weather of: `);
    }
    else{
        console.log(`Please Enter the city!`);
    }
});