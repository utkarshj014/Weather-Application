const apiKey = "70b4bf5e127379d05e6447a46767e213";
const api = "https://api.openweathermap.org/data/2.5/weather?q=";



const searchBar = document.querySelector(".search_form input[type='text']");
const button = document.querySelector(".search_form button");
const weatherIcon = document.querySelector(".weather_icon img");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity .value_1");
const windSpeed = document.querySelector(".wind_speed .value_1");

const errorMessage = document.querySelector(".error");
const displayBlock = document.querySelector(".display");


// WEATHER FUNCTION


async function knowWeather() {

    const response = await fetch(api + searchBar.value + `&appid=${apiKey}&units=metric`);
    // console.log(response);

    if (response.status == 404) {
        console.log("hey");
        errorMessage.style.display = "block";
        displayBlock.style.display = "none";

    }
    else {
        const data = await response.json();
        console.log(data);

        weatherIcon.setAttribute("src", `images/${data.weather[0].main.toLowerCase()}.png`);
        weatherIcon.setAttribute("title", `${data.weather[0].main}`);
        city.textContent = data.name;
        temp.textContent = data.main.temp + "°C";
        humidity.textContent = data.main.humidity + "%";
        windSpeed.textContent = data.wind.speed + "Km/h";

        errorMessage.style.display = "none";
        displayBlock.style.display = "block";

    }

}

// knowWeather();

button.addEventListener("click", (e) => {

    e.preventDefault();
    knowWeather();
    searchBar.value = "";

})